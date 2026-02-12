const request = require('supertest');

// Mock DataBaseHandler BEFORE requiring app
const mockAdd = jest.fn();
const mockDb = [
    { id: 1, name: 'Test User', text: 'Hello', date: '20/10/2023' }
];

jest.mock('../public/Scripts/DataBaseHandler', () => {
    return jest.fn().mockImplementation(() => {
        return {
            add: mockAdd,
            db: mockDb
        };
    });
});

const app = require('../app');

describe('App Endpoints', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Middleware and Setup', () => {
        test('should use body-parser middleware (json)', async () => {
            // Sending JSON should work
            const res = await request(app)
                .post('/api/comments/add/mtb/m1')
                .send({ name: 'Test', text: 'Body', date: '01/01/2023' })
                .set('Content-Type', 'application/json');
            
            expect(res.statusCode).not.toBe(500); // Should not crash
        });
    });

    describe('POST /api/comments/add/mtb/m1', () => {
        test('should accept valid comments', async () => {
            const comment = { name: 'Valid User', text: 'Safe text', date: '01/01/2024' };
            
            const res = await request(app)
                .post('/api/comments/add/mtb/m1')
                .send(comment);

            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('ok');
            expect(mockAdd).toHaveBeenCalledWith(expect.objectContaining(comment));
        });

        // test('should reject comments with XSS in name', async () => {
        //     const comment = { name: '<script>alert(1)</script>', text: 'Safe text', date: '01/01/2024' };
            
        //     const res = await request(app)
        //         .post('/api/comments/add/mtb/m1')
        //         .send(comment);

        //     expect(res.statusCode).toBe(400);
        //     expect(res.text).toContain('Potential XSS detected');
        //     expect(mockAdd).not.toHaveBeenCalled();
        // });

        // test('should reject comments with XSS in text', async () => {
        //     const comment = { name: 'Safe Name', text: '<img src=x onerror=alert(1)>', date: '01/01/2024' };
            
        //     const res = await request(app)
        //         .post('/api/comments/add/mtb/m1')
        //         .send(comment);

        //     expect(res.statusCode).toBe(400);
        //     expect(mockAdd).not.toHaveBeenCalled();
        // });

        test('should accept empty values as safe', async () => {
             // The code says: if (!value) return true;
             const comment = { name: '', text: 'Some text', date: '01/01/2024' };
             
             const res = await request(app)
                .post('/api/comments/add/mtb/m1')
                .send(comment);

            expect(res.statusCode).toBe(200);
            expect(mockAdd).toHaveBeenCalled();
        });
    });

    describe('GET /api/comments/list/mtb/m1', () => {
        test('should return list of comments', async () => {
            const res = await request(app).get('/api/comments/list/mtb/m1');
            
            expect(res.statusCode).toBe(200);
            expect(JSON.parse(res.text)).toHaveLength(1);
            expect(JSON.parse(res.text)[0].name).toBe('Test User');
        });
    });
});
