import { add } from './stringcalc';

describe('stringcal', () => {
    test('basic', () => {
        expect(add('')).toEqual(0);
        expect(add('1')).toEqual(1);
        expect(add('1,')).toEqual(1);
        expect(add('1,2')).toEqual(3);
        expect(add('1,2,,,,')).toEqual(3);
        expect(add('1,2,2,43,2,1')).toEqual(51);
        expect(
            add(`1
        2,3`),
        ).toEqual(6);
        expect(
            add(`1
        `),
        ).toEqual(1);
        expect(add('//;\n1;2')).toEqual(3);
        expect(
            add(`//;
        1;2,22`),
        ).toEqual(1);
        expect(add('//;\n1;2;3;5')).toEqual(11);
        expect(() => add('5,-8')).toThrowError('negatives not allowed. -8');
    });

    test('new line', () => {
        expect(
            add(`1
        2,3`),
        ).toEqual(6);
        expect(
            add(`1
        `),
        ).toEqual(1);
    });

    test('delimeter', () => {
        expect(add('//;\n1;2')).toEqual(3);
        expect(
            add(`//;
        1;2,22`),
        ).toEqual(1);
        expect(add('//;\n1;2;3;5')).toEqual(11);
        expect(() => add('5,-8')).toThrowError('negatives not allowed. -8');
    });

    test('throw on negative', () => {
        expect(() => add('5,-8')).toThrowError('negatives not allowed. -8');
        expect(() => add('5,-8, 8, -3, , -2')).toThrowError('negatives not allowed. -8, -3, -2');
    });

    test('ignore > 1000', () => {
        expect(add('2,1001')).toEqual(2);
    });

    test('complication delimeter', () => {
        expect(add('//[***]\n1***2***3')).toEqual(6);
        expect(add('//[!()]\n1!()2!()3')).toEqual(6);
        expect(add('//[*][%]\n1*2%3')).toEqual(6);
        expect(add('//[***][%]\n1***2%3')).toEqual(6);
        expect(add('//[***][*][&]\n1***2*3&4')).toEqual(10);
    });
});
