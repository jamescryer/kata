import toFixed from './toFixed';

describe('toFixed', () => {
    test('basic', () => {
        expect(toFixed('1.01513')).toEqual('1');
    });
    test('2 fraction digits round up', () => {
        expect(toFixed('1.01513', 2)).toEqual('1.02');
    });
    test('2 fraction digits round down', () => {
        expect(toFixed('1.01434', 2)).toEqual('1.01');
    });
    test('10 fraction digits', () => {
        expect(toFixed('1.01513', 10)).toEqual('1.0151300000');
    });
    test('-2.346', () => {
        expect(toFixed('-2.346', 2)).toEqual('-2.35');
    });
    test('1.23e+20', () => {
        expect(toFixed('1.23e+20', 3)).toEqual('123000000000000000000.000');
    });
    test('1.23e-10', () => {
        expect(toFixed('1.23e-10', 3)).toEqual('0.000');
    });
});
