export const GetCssClasses = (incomingClasses, componentClasses) =>
    [[componentClasses], incomingClasses].filter(val => !!val).join(' ');
