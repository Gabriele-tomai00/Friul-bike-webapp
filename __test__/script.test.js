// Mock globals
global.document = {
    getElementById: jest.fn()
};

global.XMLHttpRequest = jest.fn();

describe('script.js', () => {
    let scriptModule;

    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
        
        // Mock XMLHttpRequest
        global.XMLHttpRequest.mockImplementation(() => ({
            open: jest.fn(),
            send: jest.fn(),
            onreadystatechange: null,
            readyState: 4,
            status: 200,
            responseText: 'Mock Description'
        }));

        // Re-require to reset module-level variables like 'firstTime'
        scriptModule = require('../public/Scripts/script.js');
    });

    test('showLinks toggles class name', () => {
        const mockElement = { className: 'topnav' };
        global.document.getElementById.mockReturnValue(mockElement);

        scriptModule.showLinks();
        expect(mockElement.className).toBe('topnav responsive');

        scriptModule.showLinks(); // className is now 'topnav responsive'
        // Logic: if (x.className === "topnav") -> responsive
        // else -> "topnav"
        
        // Wait, the code says:
        // if (x.className === "topnav") { ... += " responsive" } else { x.className = "topnav" }
        // So if it is "topnav responsive", it goes to else and becomes "topnav".
        expect(mockElement.className).toBe('topnav');
    });

    test('loadDescription loads from file on first call', () => {
        const mockDescElem = { style: { display: 'none' }, innerHTML: '' };
        global.document.getElementById.mockReturnValue(mockDescElem);
        
        const xhrMock = new global.XMLHttpRequest();
        global.XMLHttpRequest.mockImplementation(() => xhrMock);

        scriptModule.loadDescription('test');

        expect(xhrMock.open).toHaveBeenCalledWith('GET', '../../../Contents/Descriptions/test.txt', true);
        expect(xhrMock.send).toHaveBeenCalled();
        
        // Simulate callback
        xhrMock.onreadystatechange();
        expect(mockDescElem.innerHTML).toBe('Mock Description');
    });

    test('loadDescription toggles display on subsequent calls', () => {
        const mockDescElem = { style: { display: 'none' }, innerHTML: '' };
        const mockLoadDescBtn = { innerHTML: '' };
        
        global.document.getElementById.mockImplementation((id) => {
            if (id === 'desc') return mockDescElem;
            if (id === 'loadDesc') return mockLoadDescBtn;
        });

        // First call loads data
        scriptModule.loadDescription('test');
        
        // Second call toggles display
        // If display is none -> block
        scriptModule.loadDescription('test');
        expect(mockDescElem.style.display).toBe('block');
        expect(mockLoadDescBtn.innerHTML).toBe('Nascondi descrizione');

        // Third call -> none
        scriptModule.loadDescription('test');
        expect(mockDescElem.style.display).toBe('none');
        expect(mockLoadDescBtn.innerHTML).toBe('Visualizza descrizione');
    });
});
