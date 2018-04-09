module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['dependencies', 'prettier', 'react', 'import'],
  rules: {
    'arrow-parens': [0, 'always'],
    'class-methods-use-this': [2, { exceptMethods: ['render'] }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'never',
        objects: 'always-multiline',
      },
    ],
    'dependencies/no-cycles': 2,
    'dependencies/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'new-cap': 0,
    'no-alert': 2,
    'no-console': 1,
    'no-debugger': 2,
    'no-use-before-define': [2, { functions: false, classes: true }],
    'no-underscore-dangle': 0,
    quotes: [2, 'single'],
    'react/jsx-filename-extension': 0,
    semi: ['error', 'always'],
    'sort-keys': 1,
    strict: [2, 'safe'],
  },
};
