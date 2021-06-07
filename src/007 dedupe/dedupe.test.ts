// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

import dedupe from './dedupe';

describe('dedupe', () => {
    test('basic', () => {
        const arr = [1, 1, 2];
        expect(dedupe(arr)).toEqual(2);
        expect(arr).toEqual([1, 2]);
    });

    test('more', () => {
        const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect(dedupe(arr)).toEqual(5);
        expect(arr).toEqual([0, 1, 2, 3, 4]);
    });
});
