import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['cypress/**/*.cy.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: 'readonly',
        ...globals.mocha,
        ...globals.cypress,
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.parcel-cache/',
      '.env',
      '.DS_Store',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'Thumbs.db',
    ],
  },
]);
