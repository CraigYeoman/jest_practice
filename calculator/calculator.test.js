const calculator = require('./calculator');

test ('add function', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test ('subtract function', () => {
    expect(calculator.subtract(2,1)).toBe(1);
});

test ('divide function', () => {
    expect(calculator.divide(1,1)).toBe(1);
});

test ('multiply function', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});