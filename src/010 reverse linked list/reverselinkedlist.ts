export type Node = { val: unknown; next: Node | null };

export default function reverseList(head: Node | null): Node | null {
    const next = head?.next;
    if (!head || !next) return head;

    const newHead = reverseList(next);

    next.next = head;
    head.next = null;

    return newHead;
}
