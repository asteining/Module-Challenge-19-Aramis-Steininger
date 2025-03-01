// cypress.config.ts
import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

const webpackOptions = {
  resolve: {
    fallback: {
      "node:test": 'false', // Ignore the node:test module (fixes webpack error)
    },
  },
};

export default defineConfig({
  e2e: {
    // Look for e2e test files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // If you have a support file, point to it; otherwise, you can disable it with false
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // Use the webpack preprocessor with our custom options
      const options = { webpackOptions };
      on('file:preprocessor', webpackPreprocessor(options));
      return config;
    },
  },
  component: {
    // Look for component test files
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
