const { builtinModules } = require('module');
const path = require('path');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.eslint.json'),
      },
      globals: {
        ...builtinModules.reduce((globals, mod) => {
          globals[mod] = 'readonly';
          return globals;
        }, {}),
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        Buffer: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      node: require('eslint-plugin-node'),
      import: require('eslint-plugin-import'),
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'node/no-unpublished-require': 'off',
      'import/extensions': ['error', 'ignorePackages', {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      }],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
      node: {
        tryExtensions: ['.js', '.json', '.node', '.mjs', '.ts', '.tsx'],
      },
    },
  },
];
