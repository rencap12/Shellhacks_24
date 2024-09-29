import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  
  return (
    <div>
      <h1>AI Powered Study Planner</h1>
      <h3>You said you are going to study Computer Science.</h3>
      <p>Below is a study plan to assist you in your learning!</p>
      <LandingPage />
      
    </div>
  );
}

export default App;
