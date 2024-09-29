import { useEffect, useState } from 'react';
import StudyPlan from './StudyPlan';

const LandingPage = () => {
    const [userProfile, setUser] = useState('');
    const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000');
        const json = await response.json(); // Await the json() method to get the parsed data
        console.log('message:', json.message);
        setData(json.message); // Access the message property from the JSON object
      } catch (error) {
        console.log('error fetching', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <h1>{data ? data : 'Loading...'}</h1>
    {/* <p>put forum</p> */}
    <StudyPlan />
    </>
  );
};

export default LandingPage;