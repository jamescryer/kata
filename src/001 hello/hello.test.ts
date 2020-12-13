import hello from './hello';

describe('hello', () => {
    test('return name', () => {
        expect(hello('James')).toEqual('Hello James!');
    });
});
