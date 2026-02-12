// Mock globals before requiring the file
globalThis.document = {
    getElementById: jest.fn().mockReturnValue({
        className: 'topnav',
        style: {}
    })
};

globalThis.google = {
    maps: {
        LatLng: jest.fn((lat, lng) => ({ lat, lng })),
        Map: jest.fn(),
        Marker: jest.fn().mockImplementation(() => ({})),
    }
};

globalThis.XMLHttpRequest = jest.fn().mockImplementation(() => ({
    open: jest.fn(),
    send: jest.fn(),
    onreadystatechange: null,
    responseText: '[]'
}));

const { createMarker } = require('../public/Scripts/chargermap.js');

describe('chargermap.js', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('createMarker creates markers and adds them to the array', () => {
        const coords = [
            { latitude: 45.0, longitude: 13.0 },
            { latitude: 46.0, longitude: 14.0 }
        ];
        const arrayOfMarkers = [];
        const iconImage = 'test-icon.png';

        createMarker(coords, arrayOfMarkers, iconImage);

        expect(arrayOfMarkers.length).toBe(2);
        expect(globalThis.google.maps.Marker).toHaveBeenCalledTimes(2);
        expect(globalThis.google.maps.LatLng).toHaveBeenCalledWith(45.0, 13.0);
        expect(globalThis.google.maps.LatLng).toHaveBeenCalledWith(46.0, 14.0);
    });
});
