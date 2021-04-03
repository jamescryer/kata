export default function toFixed(numStr: string, fractionDigits = 0): string {
    const num = Number.parseFloat(numStr);
    const exponent = 10 ** fractionDigits;
    const result = (Math.round(num * exponent) / exponent).toString();
    const arr = result.split('.');
    arr[1] = (arr[1] || '').padEnd(fractionDigits, '0');
    return arr.join('.').replace(/\.$/, '');
    //return num.toFixed(fractionDigits);
}
