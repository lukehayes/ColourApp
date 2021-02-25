/**
 * Local storage utility functions
 */

let storage = window.localStorage;

/**
 * Add a value to local storage.
 *
 * @param {string} name     Name of the value to be remembered.
 * @param {string} value    Value to be remembered.
 * @throws {TypeError}
 *
 * @return {void}
 */
function remember(name, value)
{
    if(name == 'undefined' || value == 'undefined')
    {
        throw TypeError('A value was undefined');
    }
    storage.setItem(name, value);
}

/**
 * Get a value from local storage.
 *
 * @param {string} name     Name of the value to be retrieved.
 *
 * @return {string}         The retrieved value.
 */
function retrieve(name)
{
    return storage.getItem(name);
}

/**
 * Remove the value from local storage.
 *
 * @param {string} name     Name of the value to be removed.
 *
 * @return {void}
 */
function forget(name)
{
    storage.remove(name);
}

/**
 * Clear the local storage.
 *
 * @return {void}
 */
function clear()
{
    storage.clear();
}


export {
    remember,
    retrieve,
    forget,
    clear
}
