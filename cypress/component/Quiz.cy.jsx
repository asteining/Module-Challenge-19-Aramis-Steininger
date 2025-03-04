import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the start quiz button', () => {
    mount(<Quiz />);
    cy.get('[data-cy="start-quiz"]').should('be.visible');
  });

  it('starts the quiz on clicking start button', () => {
    mount(<Quiz />);
    cy.get('[data-cy="start-quiz"]').click();
    // Since questions are loaded asynchronously, wait for the question text
    cy.get('[data-cy="question-text"]', { timeout: 10000 }).should('be.visible');
  });
});
