module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: ['flowtype', 'react', 'prettier', 'react-native'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    mocha: true,
    node: true
  },
  rules: {
    'consistent-return': 1,
    'global-require': 0,
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': [2, { ignore: ['@'] }],
    'import/prefer-default-export': 'off',
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 1,
    'react/display-name': 0,
    'react/forbid-prop-types': [0, { forbid: ['any', 'array'] }],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 1,
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 1,
    'react/prefer-stateless-function': 'off',

    'comma-dangle': [0, 'always-multiline'],
    complexity: [1, 6],
    curly: [2, 'all'],
    'default-case': [2],
    'dot-notation': [1],
    'dot-location': [1, 'property'],
    eqeqeq: [2, 'allow-null'],
    'guard-for-in': [2],
    indent: [2, 2],
    quotes: [2, 'single'],
    'linebreak-style': [2, 'unix'],
    'max-depth': [1, 3],
    'max-len': [1, 120],
    'max-params': [0, 4],
    'max-statements': [1, 20],
    'no-alert': [2],
    'no-caller': [2],
    'no-console': [0],
    'no-else-return': [1],
    'no-extend-native': [2],
    'no-eval': [2],
    'no-floating-decimal': [2],
    'no-implied-eval': [2],
    'no-loop-func': [1],
    'no-multi-str': [2],
    'no-native-reassign': [2],
    'no-new-func': [2],
    'no-new-wrappers': [2],
    'no-proto': [2],
    'no-regex-spaces': 1,
    'no-return-assign': [2, 'except-parens'],
    'no-script-url': [2],
    'no-self-compare': [2],
    'no-sequences': [2],
    'no-unexpected-multiline': [2],
    'no-unused-expressions': [2],
    'no-unused-vars': [2, { args: 'none' }],
    'no-useless-call': [2],
    'no-var': [2],
    'no-with': [2],
    radix: [2],
    semi: [2, 'never'],
    'valid-jsdoc': [
      1,
      {
        prefer: {
          returns: 'return'
        },
        requireParamDescription: false,
        requireReturn: false,
        requireReturnDescription: false
      }
    ]
  },
  settings: {
    'import/resolver': {
      reactnative: {}
    }
  },
  globals: {
    it: false,
    describe: false,
    expect: false,
    beforeEach: false,
    afterEach: false
  }
}
