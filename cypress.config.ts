import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    specPattern: 'cypress/component/**/*.cy.jsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'http://localhost:3001', // Adjust if your client runs on a different port
    supportFile: false,
  },
});
