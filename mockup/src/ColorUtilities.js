export const componentToHex = c => {
    if (!c) return '';
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};

export const rgbToColorArray = rgbString => {
    return rgbString
        ? rgbString
              .replace('rgb(', '')
              .replace(')', '')
              .split(',')
              .map(item => parseInt(item))
        : [];
};

export const getStyle = (elm, propertyName) =>
    window.getComputedStyle(elm, null).getPropertyValue(propertyName);

export const rgbToHex = rgbString => {
    const colors = rgbToColorArray(rgbString);
    const [r, g, b] = colors;
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const getBackgroundColor = elm => getStyle(elm, 'background-color');

export const getColorInformation = elm => {
    const rgb = getBackgroundColor(elm);
    const hex = rgbToHex(rgb);

    return {
        rgb,
        hex
    };
};
