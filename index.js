// https://eslint.org/docs/user-guide/getting-started
module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'standard',
    ...['./rules/base', './rules/import', './rules/prettier'].map(require.resolve),
  ],
  plugins: ['jest'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        ...['./rules/typescript'].map(require.resolve),
      ],
      settings: {
        /**
         * import plugin with Typescript configuration
         * https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
}
