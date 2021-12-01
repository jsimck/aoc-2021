module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        jsxSingleQuote: true,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
