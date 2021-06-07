// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

import plusOne from './plusOne';

describe('plusOne', () => {
    test('basic', () => {
        const arr = [1, 2, 3];
        expect(plusOne(arr)).toEqual([1, 2, 4]);
    });

    test('zero', () => {
        const arr = [0];
        expect(plusOne(arr)).toEqual([1]);
    });

    test('more', () => {
        const arr = [1, 2, 5, 9];
        expect(plusOne(arr)).toEqual([1, 2, 6, 0]);
    });

    test('bigger', () => {
        const arr = [1, 9, 9, 9];
        expect(plusOne(arr)).toEqual([2, 0, 0, 0]);
    });

    test('all the nines', () => {
        const arr = [9, 9, 9, 9];
        expect(plusOne(arr)).toEqual([1, 0, 0, 0, 0]);
    });
});
