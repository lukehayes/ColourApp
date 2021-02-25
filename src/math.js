/**
 * Math helper functions are defined inside this library.
 */

/**
 * Return a range from 0 to N
 *
 * @param {number} n    The maximum number to reach. Defaults to 10.
 * @return {Array}      The list of numbers.
 */
function upto(n)
{
    n = n || 10;
    return [...Array(n).keys()];
}

/**
 * Return a random integer between min and max - excluding max.
 *
 * @param {number} min    The minium number to to start with.
 * @param {number} max    The maximum number to reach.
 * @return {number}       A number with in the range min - max.
 */
function randomBetween(min, max)
{
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}

/**
 * Convert an hexadecimal value into a decimal value.
 *
 * @param {number} hexValue    The hex value to be converted. (Starts with Ox...).
 * @return {number}            Converted decimal value.
 */
function hexToDec(hexValue)
{
    isNum(hexValue);
    return parseInt(hexValue, 10);
}

/**
 * Convert an hexadecimal value into a decimal value.
 *
 * @param {number} hexValue    The hex value to be converted. (Starts with Ox...).
 * @return {number}            Converted decimal value.
 */
function decToHex(decValue)
{
    return decValue.toString(16).toUpperCase();
}

/**
 * Check if a value is of type 'number'.
 *
 * @param {number} value           Value to be type checked.
 * @param {string} errorMessage    Value to be type checked.
 *
 * @throws {TypeError}             If value is not a number.
 */
function isNum(value, errorMessage)
{
    if(typeof value !== 'number')
    {
        let message = errorMessage || 'The value must be a number.';
        throw TypeError(message);
    }
}

export {
    upto,
    randomBetween,
    hexToDec,
    decToHex
};

