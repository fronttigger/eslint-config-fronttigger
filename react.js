module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'standard-jsx',
    ...['./rules/react', './rules/react-hooks'].map(require.resolve),
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },
}
