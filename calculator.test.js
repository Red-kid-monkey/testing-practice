import calculator from "./calculator";

describe("Calculator", () => {
    describe("add", () => {
        test("adds two positive numbers", () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test("adds a positive and a negative number", () => {
            expect(calculator.add(2, -3)).toBe(-1);
        });

        test("adds two negative numbers", () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });

        test("adds zero to a number", () => {
            expect(calculator.add(2, 0)).toBe(2);
        });

        test('adds decimal numbers', () => {
            expect(calculator.add(2.5, 3.5)).toBe(6);
        })
    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        })

        test('subtracts a positive and a negative number', () => {
            expect(calculator.subtract(5, -3)).toBe(8);
        })

        test('subtracts two negative numbers', () => {
            expect(calculator.subtract(-5, -3)).toBe(-2);
        })

        test('subtracts zero from a number', () => {
            expect(calculator.subtract(5, 0)).toBe(5);
        })
    })

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        })

        test('multiplies a positive and a negative number', () => {
            expect(calculator.multiply(2, -3)).toBe(-6);
        })

        test('multiplies two negative numbers', () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
        })

        test('multiplies by zero', () => {
            expect(calculator.multiply(2, 0)).toBe(0);
        })

        test('multiplies decimal numbers', () => {
            expect(calculator.multiply(2.5, 3.5)).toBe(8.75);
        })
    })

    describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(calculator.divide(6, 3)).toBe(2);
        })

        test('divides a positive and a negative number', () => {
            expect(calculator.divide(6, -3)).toBe(-2);
        })

        test('divides two negative numbers', () => {
            expect(calculator.divide(-6, -3)).toBe(2);
        })

        test('throws an error when dividing by zero', () => {
            expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
        })

        test('divides decimal numbers', () => {
            expect(calculator.divide(7.5, 2.5)).toBe(3);
        })
    })
})

