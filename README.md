## Coding Quiz
This project is a full-stack tech quiz application built with the MERN stack. The application allows users to take a quiz of ten random questions and view their final score. Cypress is used for both component and end-to-end testing.


## Project Structure
- Copy
.
├── client/                    # Front-end React application
├── server/                    # Back-end Node/Express API
├── cypress/                   # Cypress test folder
│   ├── component/             # Component tests (e.g., Quiz.cy.jsx, Word.cy.tsx)
│   ├── e2e/                   # End-to-end tests (e.g., quiz.cy.js)
│   ├── fixtures/              # Fixture files (e.g., mockWord.json, keys.json)
│   └── support/               # Support files (e.g., commands.ts, e2e.ts)
├── cypress.config.ts          # Cypress configuration file
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project configuration and scripts
└── README.md                  # Project documentation (this file)


## Walkthrough Video
A walkthrough video demonstrating the application and tests is available here:
