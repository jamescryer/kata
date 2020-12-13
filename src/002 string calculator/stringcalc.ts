interface Add {
    (numbers: string): number;
}

const delimetersRegExp = /^\/\/(.|\[.*\])\n/;
const bracketsRegExp = /^\[|\]$/g;
const escapeRegExp = /[.*+?^${}()|[\]\\]/g;
const delimeterArgsRegExp = /(\[.+?\])/g;

const clean = (str: string): string => str.replace(bracketsRegExp, '').replace(escapeRegExp, '\\$&');

export const add: Add = (numbers) => {
    const [, delimeter] = numbers.match(delimetersRegExp) || [];
    const multipleDelimeters = delimeter?.match(delimeterArgsRegExp)?.map(clean) || [delimeter || ','];
    const delimeters = [...multipleDelimeters, '\n'];
    const errors: number[] = [];

    const ret = numbers
        .replace(delimetersRegExp, '')
        .split(new RegExp(delimeters.join('|'), 'g'))
        //.map((str) => str.replace(/\D|\s/g, ''))
        .reduce((acc, value) => {
            let num = Number(value) || 0;
            if (num > 1000) {
                num = 0;
            }
            if (num < 0) {
                errors.push(num);
            }
            return acc + num;
        }, 0);

    if (errors.length) {
        throw new Error(`negatives not allowed. ${errors.join(', ')}`);
    }

    return ret;
};
