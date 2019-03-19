module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jest', 'cypress', 'prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/__tests__/**', '**/*.test.js', '**/*.stories.js'],
      },
    ],
  },
};
