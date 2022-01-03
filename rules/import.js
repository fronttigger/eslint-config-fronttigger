// https://github.com/import-js/eslint-plugin-import
module.exports = {
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '#/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
  },
}
