module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'no-explicit-any': 'off',
        'indent': ['error', 2],
        'semi': 'off',
        'quotes': ['error', 'single'],
        'comma-dangle': 'off',
        'object-curly-spacing': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'space-before-function-paren': ['error', 'always'],
        'function-paren-newline': ['error', 'consistent'],
        'prefer-arrow-callback': 'error',
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'linebreak-style': ['error', 'unix'],
        'no-console': 'warn',
        'eqeqeq': ['error', 'always'],
    }
}
