interface Add {
    (numbers: string): number;
}

const clean = (str: string): string => str.replace(/^\[|\]$/g, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const add: Add = (numbers) => {
    const delimetersRegExp = /^\/\/(.|\[.*\])\n/;
    const [, delimeter] = numbers.match(delimetersRegExp) || [];
    const multipleDelimeters = delimeter?.match(/(\[.+?\])/g)?.map((str) => clean(str)) || [delimeter || ','];
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
