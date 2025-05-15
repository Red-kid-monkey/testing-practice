import analyzeArray from "./analyzeArray";


describe('analyzeArray', () => {
    test('analyzes an array of numbers', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6])
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    })

    test('handles array with single number', () => {
        const result = analyzeArray([5])
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1
        })
    })

    test('handles array with negative numbers', () => {
        const result = analyzeArray([-1, -5, -3])
        expect(result).toEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 3
        })
    })

    test('handles arrays with decimal numbers', () => {
        const result = analyzeArray([1.5, 2.5, 3.5])
        expect(result).toEqual({
            average: 2.5,
            min: 1.5,
            max: 3.5,
            length: 3
        })
    })

    test('handles empty array', () => {
        const result = analyzeArray([])
        expect(result).toEqual({
            average: null,
            min: null,
            max: null,
            length: 0
        })
    })

    test('handles array with mixed positive and negative numbers', () => {
        const result = analyzeArray([-1, 0, 1])
        expect(result).toEqual({
            average: 0,
            min: -1,
            max: 1,
            length: 3
        })
    })
}) 