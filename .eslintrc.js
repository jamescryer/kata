module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    env: {
        browser: false,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
};
