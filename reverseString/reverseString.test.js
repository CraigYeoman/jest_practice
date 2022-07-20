const reverseString = require('./reverseString');

test ('checks if string is reversed', () => {
    expect(reverseString('string')).toBe('gnirts');
});