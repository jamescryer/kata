// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

import threeSum from './threeSum';

describe('tripples', () => {
    test('basic', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
    });

    test('more', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toHaveLength(9);
        expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toEqual([
            [-4, 0, 4],
            [-4, 1, 3],
            [-3, -1, 4],
            [-3, 0, 3],
            [-3, 1, 2],
            [-2, -1, 3],
            [-2, 0, 2],
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
    });

    test('empty', () => {
        expect(threeSum([])).toEqual([]);
    });

    test('zero', () => {
        expect(threeSum([0])).toEqual([]);
    });
});
