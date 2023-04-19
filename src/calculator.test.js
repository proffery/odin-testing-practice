import calculator from "./calculator"

test('Calculate: 3 add 2 = 5', () => {
    expect(calculator.add(3, 2)).toBe(5)
})

test('Calculate: 3 subtract 2 = 1', () => {
    expect(calculator.subtract(3, 2)).toBe(1)
})

test('Calculate: 3 divide 2 = 1.5', () => {
    expect(calculator.divide(3, 2)).toBe(1.5)
})

test('Calculate: 3 multiply 2 = 6', () => {
    expect(calculator.multiply(3, 2)).toBe(6)
})
