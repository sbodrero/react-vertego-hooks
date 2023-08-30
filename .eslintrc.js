module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'react-app'],
  plugins: ['promise'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'max-len': [1, 120],
    'no-param-reassign': 'off',
    'react/require-default-props': 'off'
  },
};
