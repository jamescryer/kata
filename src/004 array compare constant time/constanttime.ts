// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

export default function constanttime(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length || arr1.length === 0 || arr2.length === 0) {
        return false;
    }

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1].filter((x) => !set2.has(x)).length === 0;
}
