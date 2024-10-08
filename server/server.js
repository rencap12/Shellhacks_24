// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import OpenAI from "openai";

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// // OpenAI setup
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true, // Optional, depending on your setup
// });


// app.post('/api/study-plan', async (req, res) => {
    
//     console.log(`api key is`, openai.apiKey);
//     const { studentInfo } = req.body; // Extract student info from request
//     console.log('Received studentInfo:', studentInfo); // Debugging log

//     try {
//         const completion = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 { role: "system", content: "You are a helpful assistant." },
//                 { role: "user", content: `Generate a study plan and resource guide for a student from a low socioeconomic background who is interested in higher education and job skills in the field of ${studentInfo.field}. Include affordable resources.` },
//             ],
//         });
        
//         console.log('OpenAI Response:', completion);
//         console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY); // Debugging line
//         console.log(completion.choices[0].message); // Log the response message
//         res.json({ studyPlan: completion.choices[0].message.content }); // Adjusted to return the correct structure
//     } catch (error) {
//         console.error('Error generating study plan:', error); // Log the error
//         res.status(500).json({ error: 'Error generating study plan' });
//     }
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     console.log('hello from initial');
// });

// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello from server!' });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 4000;

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for generating study plans
app.post('/api/study-plan', async (req, res) => {
    const { studentInfo } = req.body;
    const apiKey = process.env.OPENAI_API_KEY; // Make sure to set this in your environment

    try {
        console.log('apikey', apiKey);
        const response = await fetch('https://api.openai.com/v1/chat/completions', { // Updated endpoint for chat completions
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Use the appropriate model
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: `Generate a study plan and resource guide for a student from a low socioeconomic background who is interested in higher education and job skills in the field of ${studentInfo.field}. Include affordable resources.` }
                ],
                max_tokens: 150 // Adjust based on your needs
            })
        });

        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error });
        }

        // Extracting the study plan from the OpenAI response
        const studyPlan = data.choices[0].message.content.trim();
        res.json({ studyPlan });
    } catch (error) {
        console.error('Error generating study plan:', error); // Log the error
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET endpoint for a test route
app.get('/', (req, res) => {
    res.json({ message: 'Try it out!' }); // Corrected to use json()
    console.log('hello from initial');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
