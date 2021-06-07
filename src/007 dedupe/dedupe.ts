// Will work if array is not sorted in ascended order
// export default function dedupe(arr: number[]): number {
//     let i = 0;
//     const seen = new Set();
//     while (arr[i] !== undefined) {
//         const value = arr[i];
//         if (seen.has(value)) {
//             arr.splice(i, 1);
//             continue;
//         }
//         seen.add(value);
//         i += 1;
//     }
//     return arr.length;
// }

export default function dedupe(nums: number[]): number {
    let len = nums.length;
    let i = len - 1;

    while (i >= 0) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1);
            len -= 1;
        }
        i -= 1;
    }
    return len;
}
