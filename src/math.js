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
    if(typeof hexValue !== 'number')
    {
        throw 'The value passed to hexToDec() must be a number.';
    }

    return parseInt(hexValue, 10);
}

export {
    upto,
    randomBetween,
    hexToDec
};

