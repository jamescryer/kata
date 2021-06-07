import aretheythesame from './aretheythesame';

describe('aretheythesame', () => {
    test('arrays are the same', () => {
        const a = [121, 144, 19, 161, 19, 144, 19, 11];
        const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

        expect(aretheythesame(a, b)).toEqual(true);
    });

    test('arrays are the similar but not the same', () => {
        const a = [2, 3, 3];
        const b = [9, 4, 4];

        expect(aretheythesame(a, b)).toEqual(false);
    });

    test('arrays are not the same', () => {
        const a = [121, 144, 19, 161, 19, 144, 19, 11];
        const b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

        expect(aretheythesame(a, b)).toEqual(false);
    });

    test('arrays are not the same length', () => {
        const a = [121, 144, 19, 161, 19, 144, 19, 11];
        const b = [121, 14641, 20736, 361, 25921];

        expect(aretheythesame(a, b)).toEqual(false);
    });

    test('empty a', () => {
        const a: number[] = [];
        const b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

        expect(aretheythesame(a, b)).toEqual(false);
    });

    test('empty b', () => {
        const a = [121, 144, 19, 161, 19, 144, 19, 11];
        const b: number[] = [];

        expect(aretheythesame(a, b)).toEqual(false);
    });

    test('empty a & b', () => {
        const a: number[] = [];
        const b: number[] = [];

        expect(aretheythesame(a, b)).toEqual(false);
    });

    test('large arrays', () => {
        const large = new Array(10000000).fill(1);
        expect(aretheythesame(large, large)).toEqual(true);
    });
});
