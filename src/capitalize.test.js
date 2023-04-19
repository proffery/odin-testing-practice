import capitalize from './capitalize'

test('word => Word', () => {
    expect(capitalize('word')).toBe('Word')
})