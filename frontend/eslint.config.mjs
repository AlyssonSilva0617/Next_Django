import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with the new ESLint API
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend common Next.js, TypeScript, and React configurations
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'), // Next.js and TypeScript support
  'plugin:@typescript-eslint/recommended', // TypeScript linting rules
  'plugin:react/recommended', // React linting rules
  'plugin:react/jsx-runtime', // React 17+ JSX runtime support
  'plugin:prettier/recommended', // Optional: integrate Prettier with ESLint
];

// ESLint custom rules
const customRules = {
  '@typescript-eslint/no-explicit-any': 'warn', // Warn if `any` is used in TypeScript
  'react/prop-types': 'off', // Disable PropTypes since you're using TypeScript for type checking
  'react/react-in-jsx-scope': 'off', // React 17 doesn't need to be in scope
  'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Restrict JSX to .tsx
  'no-console': 'warn', // Warn for `console.log` usage
  'react-hooks/rules-of-hooks': 'error', // Ensure correct hook usage
  'react-hooks/exhaustive-deps': 'warn', // Ensure correct dependencies in hooks
};

export default {
  extends: eslintConfig,
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Supports ES2020+ syntax
    sourceType: 'module', // Enable ES modules
    ecmaFeatures: {
      jsx: true, // Enable JSX support
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'], // Plugins for TypeScript, React, and React hooks
  rules: customRules, // Custom rules to enforce coding style
};
