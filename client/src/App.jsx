import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/api');
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
    <div>
      <h1>Hello World!</h1>
      <h2>test for hot reloading</h2>
      <p>testing</p>
      <h1>{data ? data : 'Loading...'}</h1>
    </div>
  );
}

export default App;
