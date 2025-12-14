import { describe, expect, test } from 'vitest';
import { add, subtract } from './math.helper';


describe('add', () => {
    test('should add two positives numbers', () => {
        const a = 2;
        const b = 3;

        const result = add(a, b);
        console.log({ result });

        expect(result).toBe(a + b);
    });
    test('should add two negative numbers', () => {
        const a = -2;
        const b = -3;

        const result = add(a, b);
        console.log({ result });

        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('should subtract two positives numbers', () => {
        const a = 2;
        const b = 3;

        const result = subtract(a, b);
        console.log({ result });

        expect(result).toBe(a - b);
    });
    test('should subtract two negative numbers', () => {
        const a = -2;
        const b = -3;

        const result = subtract(a, b);
        console.log({ result });

        expect(result).toBe(a - b);
    });
});

