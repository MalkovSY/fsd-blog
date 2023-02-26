module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-indent': ['error', 2],
    indent: ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'i18next/no-literal-string': ['error', { markupOnly: true }],
  },
  globals: {
    __IS_DEV__: 'readonly',
  },
  overrides: [
    {
      files: ['**/src/**/*.spec.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
