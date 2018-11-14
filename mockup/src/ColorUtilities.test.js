import { rgbToColorArray } from './ColorUtilities';

describe('Background Utilities', () => {
    const rgbString = 'rgb(255, 255, 255)';
    describe('rgbToColorArray', () => {
        var actual = rgbToColorArray(rgbString);
        var expected = [255, 255, 255];
        expect(expected).toEqual(actual);
    });
});
