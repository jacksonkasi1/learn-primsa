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
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'off',
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
