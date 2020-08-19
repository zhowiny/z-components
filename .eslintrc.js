module.exports = {
  root: true,
  env: {
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "@vue/typescript"
  ],
  parserOptions: {
    "parser": "@typescript-eslint/parser"
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'never']
  }
}
