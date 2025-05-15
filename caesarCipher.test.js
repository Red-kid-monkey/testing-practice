import caesarCipher from "./caesarCipher";


describe('caeserCipher', () => {
    test('shifts a lowercase string', () => {
        expect(caesarCipher('abc', 1)).toEqual('bcd');
    })

    test('shifts an uppercase string', () => {
        expect(caesarCipher('ABC', 1)).toEqual('BCD');
    })

    test('shifts a mixed case string', () => {
        expect(caesarCipher('AbC', 1)).toEqual('BcD');
    })

    test('preserves case properly', () => {
        expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
    })

    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toEqual('abc');
    })

    test('wraps from Z to A', () => {
        expect(caesarCipher('XYZ', 3)).toEqual('ABC');
    })

    test('leaves punctuation and spaces unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
    })

    test('shifts with negative shift', () => {
        expect(caesarCipher('def', -3)).toEqual('abc');
    })

    test('handles empty string', () => {
        expect(caesarCipher('', 5)).toEqual('');
    })

    test('handles strings with no letters', () => {
        expect(caesarCipher('1234!@#$%^&*()', 5)).toEqual('1234!@#$%^&*()');
    })
})