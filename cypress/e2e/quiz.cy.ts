import { describe, beforeEach, it } from "node:test";

describe('Tech Quiz End-to-End Test', () => {
    beforeEach(() => {
      // Visit your application’s URL (adjust the URL if necessary)
      cy.visit('/');
    });
  
    it('should start the quiz and navigate through questions', () => {
      // Click the start button to begin the quiz
      cy.get('button').contains('Start').click();
      
      // Check that the first question is displayed
      cy.get('.question').should('be.visible');
      
      // Simulate answering 10 questions
      for (let i = 0; i < 10; i++) {
        // Assume each answer option has a common class, e.g., '.answer'
        cy.get('.answer').first().click();
        
        // If it’s not the last question, ensure a new question appears
        if (i < 9) {
          cy.get('.question').should('exist');
        }
      }
      
      // Verify that the quiz is over by checking for the score element
      cy.get('.score').should('exist');
      // Verify the restart button is available
      cy.get('button').contains('Restart').should('exist');
    });
  });
  