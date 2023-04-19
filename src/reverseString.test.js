import reverseString from './reverseString'

test('word => drow', () => {
    expect(reverseString('word')).toBe('drow')
})

test('Hello, world! => !dlrow ,olleH', () => {
    expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH')
})