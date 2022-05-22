module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // 兼容：vue3的不使用分号结尾
    semi: ['error', 'never'],

    // 兼容Typescript里使用import导入ts文件，eslint提示未声明扩展名
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
      },
    ],

    // 兼容typescript里的defineEmits定义的函数提示no-unused-vars错误
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],

    // 兼容typescript里的defineEmits定义的函数提示no-spaced-func错误
    'no-spaced-func': 'off',

    // 兼容typescript里的defineEmits定义的函数提示func-call-spacing错误
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
  },
  settings: {
    // 修复 - 将eslint与typescript一起使用-无法解析模块的路径
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}
