import { useEffect, useState } from 'react';
import OpenAI from 'openai';

function StudyPlan() {
    const [plan, setPlan] = useState('');

    
    const getStudyPlan = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/study-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ studentInfo: { field: 'Computer Science' } }),
            });

            const data = await response.json();
            if (response.ok) {
                setPlan(data.studyPlan);
            } else {
                console.error('Error:', data.error);
                setPlan('Error generating study plan');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setPlan('Error generating study plan');
        }
    };

    return (
        <div>
            <button onClick={getStudyPlan}>Generate Study Plan</button>
            <pre>{plan}</pre>
            <p>{plan}</p>
        </div>
    );
}

export default StudyPlan;
