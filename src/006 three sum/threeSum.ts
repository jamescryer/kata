// brute force
// export default function threeSum(nums: number[]): number[][] {
//     //const nums = _nums.sort();
//     const dict: { [key: string]: boolean } = {};
//     const results = [];
//     const len = nums.length - 1;

//     for (let i = len; i > -1; i--) {
//         const x = nums[i];

//         for (let j = len; j > -1; j--) {
//             const y = nums[j];

//             if (i === j) {
//                 continue;
//             }

//             for (let k = len; k > -1; k--) {
//                 const z = nums[k];

//                 if (j === k || i === k) {
//                     continue;
//                 }

//                 if (x + y + z === 0) {
//                     const res = [x, y, z].sort();
//                     const key = res.join('-');
//                     if (!dict[key]) {
//                         results.push(res);
//                         dict[key] = true;
//                     }
//                 }
//             }
//         }
//     }
//     return results;
// }

// Two pointer solution
export default function threeSum(_nums: number[]): number[][] {
    const nums = _nums.sort((a: number, b: number): number => a - b);
    const results = [];
    const len = nums.length;
    const dict: { [key: string]: boolean } = {};

    for (let i = 0; i < len; i++) {
        const a = nums[i];
        let start = i + 1;
        let end = len - 1;

        while (start < end) {
            const b = nums[start];
            const c = nums[end];
            if (a + b + c === 0) {
                const res = [a, b, c];
                const key = res.join('-');

                if (!dict[key]) {
                    results.push(res);
                    dict[key] = true;
                }

                start += 1;
                end -= 1;
            } else if (a + b + c > 0) {
                end -= 1;
            } else {
                start += 1;
            }
        }
    }
    return results;
}
