/// <reference types="cypress" />

import { describe, it } from 'node:test';
import Quiz from '../../client/src/components/Quiz'; // adjust the import path as needed

describe('Quiz Component', () => {
  it('renders the start button', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').should('exist');
  });

  it('starts the quiz on button click and displays a question', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').click();
    // Adjust selector to match your question element (e.g., class or id)
    cy.get('.question').should('be.visible');
  });
});

/**
 * @param {import("react/jsx-runtime").JSX.Element} _arg0
 */
function mount(_arg0) {
  throw new Error('Function not implemented.');
}
