module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
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
    ],
    rules: {
        'react/jsx-indent': ['error', 4],
        indent: ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'import/no-import-module-exports': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
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
    },
    globals: {
        __IS_DEV__: 'readonly',
    },
};
