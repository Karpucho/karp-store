const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'max-len': [1, { code: 160 }],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'import/extensions': 0,
    'import/no-cycle': 0, // мое новое
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "class-methods-use-this": 0,
    "no-use-before-define": 0,
    "camelcase": 0,
    "no-unused-expressions": 0,
    "no-nested-ternary": 1,
    "import/no-extraneous-dependencies": 1,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
  },
  ignorePatterns: ['tools', '.eslintrc.js', 'webpack.config.ts', 'node_modules', 'out'],
  overrides: [
    {
      "files": [
        "**/*.stories.*"
      ],
      "rules": {
        "import/no-anonymous-default-export": "off"
      }
    }
  ]
};
