import reverseString from "./reverseString";

describe("reverseString", () => {
    test('reverses a simple string', () => {
        expect(reverseString('hello')).toBe('olleh');
    })

    test('reverses a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    })

    test('works with palindromes', () => {
        expect(reverseString('racecar')).toBe('racecar');
    })

    test('handles empty strings', () => {
        expect(reverseString('')).toBe('');
    })

    test('handles single character strings', () => {
        expect(reverseString('a')).toBe('a');
    })

    test('preserves case when reversing', () => {
        expect(reverseString('Hello')).toBe('olleH');
    })
})