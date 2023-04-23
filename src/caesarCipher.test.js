import caesarCipher from "./caesarCipher.js"

test('Encrypt: a-z,A-Z', () => {
    expect(caesarCipher.encrypto('AbcdefghijklmnopqrstuvwxyZ', 1)).toBe('BcdefghijklmnopqrstuvwxyzA')
})

test('Encrypt: punctuation', () => {
    expect(caesarCipher.encrypto('Abcdefghijklmnopqrstuvwxy,Z', 1)).toBe('Bcdefghijklmnopqrstuvwxyz,A')
})

test('Encrypt: backspaces', () => {
    expect(caesarCipher.encrypto('Abcdefghijklmnopqrstuvwxy, Z', 1)).toBe('Bcdefghijklmnopqrstuvwxyz, A')
})

test('Decrypt: a-z,A-Z', () => {
    expect(caesarCipher.decrypto('BcdefghijklmnopqrstuvwxyzA', 1)).toBe('AbcdefghijklmnopqrstuvwxyZ')
})

test('Decrypt: punctuation', () => {
    expect(caesarCipher.decrypto('Bcdefghijklmnopqrstuvwxyz,A', 1)).toBe('Abcdefghijklmnopqrstuvwxy,Z')
})

test('Decrypt: backspaces', () => {
    expect(caesarCipher.decrypto('Bcdefghijklmnopqrstuvwxyz, A', 1)).toBe('Abcdefghijklmnopqrstuvwxy, Z')
})