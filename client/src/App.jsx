import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>test for hot reloading</h2>
      <h1>{data ? data : 'Loading...'}</h1>
    </div>
  );
}

export default App;