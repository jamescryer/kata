// Through string
// export default function plusOne(digits: number[]): number[] {
//     return (parseInt(digits.join('')) + 1 + '').split('').map((i) => parseInt(i));
// }

export default function plusOne(digits: number[]): number[] {
    const arr = [...digits];
    let i = arr.length - 1;

    while (true) {
        const res = arr[i] + 1;
        const isTen = res === 10;

        arr[i] = isTen ? 0 : res;

        if (isTen && i !== 0) {
            i -= 1;
            continue;
        }

        if (isTen) {
            arr.unshift(1);
        }

        break;
    }

    return arr;
}
