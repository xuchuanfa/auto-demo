module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    // "ecmaVersion": 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'new-cap': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/extensions': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-unused-vars': 'error', // 禁止出现未使用的变量
    'vue/script-setup-uses-vars': 'error',
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
// plugin:vue/vue3-essential
// plugin:prettier/recommended
