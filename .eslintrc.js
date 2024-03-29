module.exports = {
  'parser':'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': ['standard', 'plugin:react/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'semi': [
      'error',
      'always'
    ],
    'semi-style': [
      'error', 
      'last'
    ]
  }
};