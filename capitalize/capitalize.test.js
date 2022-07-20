const capitalize = require('./capitalize');

test('capitlizes the first letter', () => {
    expect (capitalize('meow')).toBe("Meow");
});