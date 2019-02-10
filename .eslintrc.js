module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      module: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
}
