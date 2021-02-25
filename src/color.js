/**
 * Color value generator functions>
 */

import {randomBetween, decToHex} from "./math.js"

/**
 * Generate a random hexadecimal color value.
 *
 * @return {string}    The color value.
 */
function color()
{
    let r = decToHex( randomBetween(50,255) );
    let g = decToHex( randomBetween(50,255) );
    let b = decToHex( randomBetween(50,255) );
    return "#"+r+g+b;
}

export { color };


