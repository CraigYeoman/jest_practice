function reverseString(string) {
    let i = string.length -1
    let newString = '';
    while (i >= 0) {
        newString += string[i];
        i--;
    }
    return newString
};

module.exports = reverseString;