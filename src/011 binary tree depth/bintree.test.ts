// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

import depth, { Node } from './bintree';

function node(v: unknown, l: Node | null = null, r: Node | null = null): Node {
    return { val: v, left: l, right: r };
}
describe('binary tree', () => {
    test('0', () => {
        const tree = null;
        const result = depth(tree);
        expect(result).toEqual(0);
    });
    test('1', () => {
        const tree = node(1);
        const result = depth(tree);
        expect(result).toEqual(1);
    });
    test('2', () => {
        const tree = node(1, node(2));
        const result = depth(tree);
        expect(result).toEqual(2);
    });
    test('3', () => {
        const tree = node(1, node(2, node(4), node(5)), node(3, node(6), node(7)));
        const result = depth(tree);
        expect(result).toEqual(3);
    });
    test('8', () => {
        const tree = node(1, node(2, node(4), node(5, node(6, node(7, node(8, node(9, node(10))))))), node(3));
        const result = depth(tree);
        expect(result).toEqual(8);
    });
});
