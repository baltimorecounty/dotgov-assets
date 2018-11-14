import { rgbToColorArray, rgbToHex } from './ColorUtilities';

describe('Background Utilities', () => {
    describe('rgbToColorArray', () => {
        it('should return an array of numbers than matches the string value provided', () => {
            const rgbString = 'rgb(255, 255, 255)';
            var actual = rgbToColorArray(rgbString);
            var expected = [255, 255, 255];
            expect(expected).toEqual(actual);
        });

        it('should return an empty array if no value is specified', () => {
            var actual = rgbToColorArray('');
            var expected = [];
            expect(expected).toEqual(actual);
        });
    });

    describe('rgbToHex', () => {
        const rgbString = 'rgb(0, 117, 201)';

        it('should convert the rgb value to a 6 number hex', () => {
            var actual = rgbToHex(rgbString);
            var expected = '#0075c9';
            expect(expected).toEqual(actual);
        });
    });
});
