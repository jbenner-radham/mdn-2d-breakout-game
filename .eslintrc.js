module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        camelcase: 'error',
        'comma-dangle': ['error', 'never'],
        'eol-last': ['error', 'always'],
        indent: ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'vue/attribute-hyphenation': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/script-indent': ['error', 4, { baseIndent: 1, switchCase: 1 }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: ['**/*.vue'],
            rules: {
                indent: 'off',
                'vue/html-indent': ['error', 4],
                'vue/max-attributes-per-line': 'off'
            }
        }
    ]
};
