/**
 * User Interface utility functions
 */

/**
 * Create a HTMLElement - wrapper for document.createElement.
 *
 * @param {Object} options           Options for the element.
 * @param {string} options.type      Type of element to create.
 * @param {string} options.value     Value for the element.
 * @param {string} options.parent    Element to appended to.
 *
 * @return {Element}       A number with in the range min - max.
 */
function createTag(options)
{
    let element = document.createElement(options.type);
    element.innerText = options.value;
    options.parent.appendChild(element);
}

/**
 * Create a div tag element
 *
 * @param {Object} options          Options for the element.
 * @param {string} options.value    Value for the element.
 * @param {Array} options.class     Classes attributes for the element.
 *
 * @return {Element}       A number with in the range min - max.
 */
function createDiv(options)
{
    let element = document.createElement("DIV");
    element.innerText = options.value;
    options.class.forEach((classname) => element.classList.add(classname));
    options.parent.appendChild(element);
    return element;
}


export {
    createTag,
    createDiv,
};
