import './App.css';
import Getter from './components/Getter';
import AddNew from './components/AddNew';
import { useEffect, useState } from 'react';
import React from 'react';
import DeleteUser from './components/DeleteUser';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    

    void fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8088/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="App">
     <Getter data={data}/>
     <AddNew refetch={fetchData}/>
     <DeleteUser refetch={fetchData}/>
    </div>
  );
}

export default App;
