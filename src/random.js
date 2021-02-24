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

export { upto };

