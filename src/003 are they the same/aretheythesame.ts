// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

const compareSquare = (a: number, b: number): boolean => {
    return a ** 2 === b;
};

export default function aretheythesame(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length || arr1.length === 0 || arr2.length === 0) {
        return false;
    }

    const a = arr1.sort();
    const b = arr2.sort();

    let result = true;

    for (let idx = 0; idx < a.length; idx += 1) {
        //for (let idx = a.length - 1; idx >= 0; idx -= 1) {
        //for (const idx in a) { // This is 3x slower
        result = result && compareSquare(a[idx], b[idx]);
        if (result === false) {
            break;
        }
    }

    return result;
}
