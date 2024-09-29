import { useState } from 'react';

function StudyPlan() {
    const [plan, setPlan] = useState([]);

    const getStudyPlan = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/study-plan', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer OPENAI_API_KEY`
                },
                body: JSON.stringify({ studentInfo: { field: 'Computer Science' } }),
            });

            const data = await response.json();
            if (response.ok) {
                // Split the studyPlan into lines (handles bullet points and new sections)
                const lines = data.studyPlan.split('\n').map(line => line.trim()).filter(line => line);
                setPlan(lines);
            } else {
                console.error('Error:', data.error);
                setPlan(['Error generating study plan']);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setPlan(['Error generating study plan']);
        }
    };

    const getStudyPlanBio = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/study-plan', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer OPENAI_API_KEY`
                },
                body: JSON.stringify({ studentInfo: { field: 'Biology' } }),
            });

            const data = await response.json();
            if (response.ok) {
                // Split the studyPlan into lines (handles bullet points and new sections)
                const lines = data.studyPlan.split('\n').map(line => line.trim()).filter(line => line);
                setPlan(lines);
            } else {
                console.error('Error:', data.error);
                setPlan(['Error generating study plan']);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setPlan(['Error generating study plan']);
        }
    };

    return (
        <div>
            <button onClick={getStudyPlan}>Generate Study Plan for Computer Science</button>
            <button onClick={getStudyPlanBio} style={{marginLeft: '10px'}}>Generate Study Plan for Biology</button>
            {/* <p>{plan}</p> */}
            <ul>
                {plan.length > 0 ? (
                    plan.map((line, index) => (
                        // Check if the line starts with a dash or a number for bullets
                        <li key={index} style={{ listStyleType: line.startsWith('-') ? 'disc' : 'none' }}>
                            {line}
                        </li>
                    ))
                ) : (
                    <li>No study plan available</li>
                )}
            </ul>
        </div>
    );
}

export default StudyPlan;
