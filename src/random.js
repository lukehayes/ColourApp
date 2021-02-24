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


export {
    upto,
    randomBetween
};

