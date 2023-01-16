module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    extends: ['standard', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'no-unused-vars': 'error',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        eqeqeq: 'error',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 2 }],
        indent: ['error', 4],
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-extra-semi': 'error',
    },
};
