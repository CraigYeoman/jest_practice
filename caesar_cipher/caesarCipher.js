function caesarCipher(string, shift) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let array = string.split("");
    let newString = '';
    let i = 0;
    while(i <= string.length-1) {
        let newIndex = alphabet.indexOf(array[i])+shift;
        if (newIndex >= 26) {
            newString += alphabet[newIndex-26];
            i++;
        } else if (newIndex < 0) {
            newString += alphabet[newIndex+26];
            i++;
        } else {
            newString += alphabet[newIndex];
            i++;
        };
    }
    return newString
}

module.exports = caesarCipher;