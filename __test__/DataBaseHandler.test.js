const DataBaseHandler = require('../public/Scripts/DataBaseHandler');
const fs = require('fs');

jest.mock('fs');

describe('DataBaseHandler', () => {
    let dbHandler;
    const mockFileName = 'test_db.json';

    beforeEach(() => {
        jest.clearAllMocks();
        dbHandler = new DataBaseHandler(mockFileName);
        
        // Fix mock implementations to handle arguments correctly
        // fs.writeFile(file, data, options, callback) or (file, data, callback)
        fs.writeFile.mockImplementation((file, data, ...args) => {
            const callback = args[args.length - 1];
            if (typeof callback === 'function') {
                callback(null);
            }
        });

        // fs.access(path, callback)
        // logic in code: if exists is truthy -> callback()
        // wait, the code is: this.fs.access(this.fileName, (exists) => { if(exists) ... })
        // If I pass true to the callback, it executes the 'if' branch.
        fs.access.mockImplementation((path, cb) => cb(true));
    });

    test('constructor initializes properties correctly', () => {
        expect(dbHandler.fileName).toBe(mockFileName);
        expect(dbHandler.db).toEqual([]);
    });

    test('checkForFile calls callback if file exists', () => {
        const callback = jest.fn();
        fs.access.mockImplementation((path, cb) => cb(true)); 
        dbHandler.checkForFile(callback);
        expect(callback).toHaveBeenCalled();
    });

    test('checkForFile creates file if it does not exist', () => {
        const callback = jest.fn();
        // Simulate "false" to callback -> enters else branch
        fs.access.mockImplementation((path, cb) => cb(false));
        
        dbHandler.checkForFile(callback);
        
        expect(fs.writeFile).toHaveBeenCalledWith(
            mockFileName, 
            '[]', 
            expect.any(Function)
        );
        expect(callback).toHaveBeenCalled();
    });

    test('add pushes entry and saves', () => {
        const entry = { id: 1, text: 'test' };
        const saveSpy = jest.spyOn(dbHandler, 'saveToStorage');
        saveSpy.mockImplementation(() => {});

        dbHandler.add(entry);
        expect(dbHandler.db).toContain(entry);
        expect(saveSpy).toHaveBeenCalled();
    });

    test('loadDB loads data if file exists', () => {
        fs.existsSync.mockReturnValue(true);
        const mockData = JSON.stringify([{ id: 1 }]);
        fs.readFileSync.mockReturnValue(mockData);

        dbHandler.loadDB();
        expect(dbHandler.db).toEqual([{ id: 1 }]);
    });

    test('loadDB handles missing file (creates empty)', () => {
        fs.existsSync.mockReturnValue(false);
        const saveSpy = jest.spyOn(dbHandler, 'saveToStorage');
        saveSpy.mockImplementation(() => {});

        dbHandler.loadDB();
        expect(saveSpy).toHaveBeenCalled();
    });

    test('loadDB handles error', () => {
        fs.existsSync.mockImplementation(() => {
            throw new Error('Read error');
        });
        const saveSpy = jest.spyOn(dbHandler, 'saveToStorage');
        saveSpy.mockImplementation(() => {});
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        dbHandler.loadDB();
        expect(consoleSpy).toHaveBeenCalled();
        expect(saveSpy).toHaveBeenCalled();
    });

    test('saveToStorage writes to file', () => {
        dbHandler.db = [{ id: 1 }];
        
        dbHandler.saveToStorage();
        expect(fs.writeFile).toHaveBeenCalledWith(
            mockFileName,
            JSON.stringify([{ id: 1 }], null, 4),
            'utf8',
            expect.any(Function)
        );
    });
});
