const caesarCipher = require('./caesarCipher');

test ('Testing shift', () => {
    expect(caesarCipher('string', 1)).toBe('tusjoh')
});

test ('Testing letters over index of 26', () => {
    expect(caesarCipher('meow', 5)).toBe('rjtb')
});

test ('Negative shift', () => {
    expect(caesarCipher('string', -3)).toBe('pqofkd')
});

test ('Testing letters with a negative index', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz')
});