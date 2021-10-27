/**
 * Tests if given string starts with a capital letter
 * @param {string} text for test
 * @returns {boolean} true when text starts with capital letter, false otherwise (empty string and null too)
 */
export const beginsWithCapitalLetter = (text) => /^[A-Z].*/.test(text);

export default beginsWithCapitalLetter;