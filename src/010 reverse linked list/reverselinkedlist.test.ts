// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

import rev, { Node } from './reverselinkedlist';

function node(v: unknown, n: Node | null): Node {
    return { val: v, next: n };
}

describe('reverselinkedlist', () => {
    test('2', () => {
        const list = node(1, node(2, null));
        const revList = node(2, node(1, null));
        const result = rev(list);

        expect(result).toEqual(revList);
    });

    test('6', () => {
        const list = node(1, node(2, node(3, node(4, node(5, node(6, null))))));
        const revList = node(6, node(5, node(4, node(3, node(2, node(1, null))))));
        const result = rev(list);

        expect(result).toEqual(revList);
    });

    test('1', () => {
        const list = node(1, null);
        const revList = node(1, null);
        const result = rev(list);

        expect(result).toEqual(revList);
    });
});
