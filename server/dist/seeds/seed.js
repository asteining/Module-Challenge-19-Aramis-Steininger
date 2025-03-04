import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';
(async () => {
    try {
        // Dynamically import the JSON file using import assertions
        const { default: questionData } = await import('./pythonQuestions.json', { assert: { type: 'json' } });
        await db();
        await cleanDB();
        // Bulk create each model
        await Question.insertMany(questionData);
        console.log('Seeding completed successfully!');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
})();
