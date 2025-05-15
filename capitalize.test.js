import capitalize from "./capitalize";

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    })

    test('works with already capitalized strings', () => {
        expect(capitalize('Hello')).toBe('Hello');
    })

    test('works with single letter strings', () => {
        expect(capitalize('h')).toBe('H');
    })

    test('handles empty strings', () => {
        expect(capitalize('')).toBe('');
    })

    test('preverses the rest of the string case', () => {
        expect(capitalize('hELLO')).toBe('HELLO');
    })
})