// https://eslint.org/docs/rules/
module.exports = {
  rules: {
    'no-console': 'warn',
    'no-empty-function': 'off',
    'no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' }],
  },
}
