export type Node = { val: unknown; left: Node | null; right: Node | null };

// First attempt
// export default function depth(root: Node | null, c = 0): number {
//     if (!root) return 0;

//     const l = root.left;
//     const r = root.right;

//     c += 1;

//     if (!l && !r) {
//         return c;
//     }

//     let ld = 0;
//     let rd = 0;

//     if (l) ld = depth(l, c);
//     if (r) rd = depth(r, c);

//     return Math.max(ld, rd);
// }

export default function depth(root: Node | null): number {
    if (!root) return 0;

    return Math.max(depth(root.left), depth(root.right)) + 1;
}
