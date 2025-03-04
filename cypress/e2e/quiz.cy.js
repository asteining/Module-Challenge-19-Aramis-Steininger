describe('Tech Quiz End-to-End Test', () => {
    beforeEach(() => {
      // Stub the API call to return fixture data
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
      cy.visit('/');
    });
  
    it('starts the quiz and displays a question', () => {
      cy.get('[data-cy="start-quiz"]').click();
      cy.wait('@getQuestions');
      cy.get('[data-cy="question-text"]').should('be.visible');
    });
  
    it('completes the quiz and displays score', () => {
      cy.get('[data-cy="start-quiz"]').click();
      cy.wait('@getQuestions');
  
      // Use the fixture data to determine the number of questions (assumed 10)
      cy.fixture('questions').then((questions) => {
        const questionCount = questions.length;
        for (let i = 0; i < questionCount; i++) {
          // Click the first answer button for each question
          cy.get('[data-cy="answer-btn"]').first().click();
          // For all but the last question, ensure the question text changes
          if (i < questionCount - 1) {
            cy.get('[data-cy="question-text"]').should('not.contain', questions[i].question);
          }
        }
      });
  
      // Verify that the quiz completion view is shown
      cy.get('[data-cy="quiz-completed"]').should('be.visible');
      cy.get('[data-cy="score"]').should('contain', 'Your score:');
      // Check that the "Take New Quiz" button is available
      cy.get('[data-cy="new-quiz"]').should('be.visible');
    });
  });
  