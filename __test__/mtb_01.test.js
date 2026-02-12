// Mock globals
globalThis.window = {
    onload: null
};

globalThis.document = {
    getElementById: jest.fn().mockImplementation((id) => ({
        style: {},
        innerHTML: '',
        value: '0', // default value
    })),
    getElementsByClassName: jest.fn().mockReturnValue([{ onclick: null }])
};

globalThis.google = {
    maps: {
        LatLng: jest.fn((lat, lng) => ({ lat, lng })),
        Map: jest.fn(),
        Marker: jest.fn().mockImplementation(() => ({
            setMap: jest.fn(),
            addListener: jest.fn()
        })),
        KmlLayer: jest.fn(),
        InfoWindow: jest.fn().mockImplementation(() => ({
            open: jest.fn()
        })),
        Circle: jest.fn().mockImplementation(() => ({
            bindTo: jest.fn(),
            setMap: jest.fn()
        }))
    }
};

globalThis.XMLHttpRequest = jest.fn().mockImplementation(() => ({
    open: jest.fn(),
    send: jest.fn(),
    onreadystatechange: null,
    responseText: '[]'
}));

// Mock jQuery
const mockJQueryObj = {
    val: jest.fn(),
    empty: jest.fn(),
    append: jest.fn(),
    html: jest.fn(),
    each: jest.fn(),
    done: jest.fn().mockReturnThis(),
    fail: jest.fn().mockReturnThis()
};
globalThis.$ = jest.fn().mockReturnValue(mockJQueryObj);
globalThis.$.get = jest.fn().mockReturnValue(mockJQueryObj);
globalThis.$.post = jest.fn().mockReturnValue(mockJQueryObj);

globalThis.navigator = {
    geolocation: {
        getCurrentPosition: jest.fn()
    }
};

globalThis.alert = jest.fn();

// Require the module
const mtbModule = require('../public/Scripts/mtb/mtb_01.js');

describe('mtb_01.js', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Reset specific mock implementations if needed
        mockJQueryObj.val.mockReturnValue('test-value');
    });

    test('descrMarker returns correct description', () => {
        expect(mtbModule.descrMarker(0)).toBe('tutti i marcatori');
        expect(mtbModule.descrMarker(2)).toBe('partenza');
        expect(mtbModule.descrMarker(99)).toBe('altro');
    });

    test('createMarker creates markers', () => {
        const coords = [{ latitude: 10, longitude: 20 }];
        const array = [];
        mtbModule.createMarker(coords, array, 'icon.png');
        expect(array.length).toBe(1);
        expect(globalThis.google.maps.Marker).toHaveBeenCalled();
    });

    test('setMapOnAllMarkers sets map for shops', () => {
        mtbModule.setMapOnAllMarkers('shop', null);
    });

    test('getLocation handles geolocation', () => {
        mtbModule.getLocation();
        expect(globalThis.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
    });
    
    test('showPosition creates marker and circle', () => {
        mtbModule.showPosition({ coords: { latitude: 10, longitude: 10 } });
        expect(globalThis.google.maps.Marker).toHaveBeenCalled();
        expect(globalThis.google.maps.Circle).toHaveBeenCalled();
    });

    test('generateComment sends post request', () => {
        // Setup DOM values
        mockJQueryObj.val.mockReturnValue('test-input');
        
        mtbModule.generateComment(1);
        
        expect(globalThis.$.post).toHaveBeenCalledWith(
            "/api/comments/add/mtb/m1",
            expect.objectContaining({
                name: 'test-input',
                text: 'test-input',
                id: 1
            })
        );
    });
});
