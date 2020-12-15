module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-debugger': 1,
    'no-undef': 0,
    'no-unused-vars': 1,
    // 'react/prop-types': 1,
    'react/no-unescaped-entities': 0,
  },
}
