import { fileURLToPath } from 'node:url';

import Codex from 'eslint-config-codex';

const enabledConfigs = new Set([
  'codex/ignore',
  'codex/globals',
  'codex/typescript',
  'codex/node',
]);

export default [
  ...Codex.filter(config => enabledConfigs.has(config.name)),
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: fileURLToPath(new URL('.', import.meta.url)),
        sourceType: 'module',
      },
    },
    rules: {
      'n/no-missing-import': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'jsdoc/require-returns-description': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
    },
  },
  {
    ignores: ['dev/**', 'tests/**', 'vite.config.js', 'vitest.config.ts', 'postcss.config.js'],
  },
];
