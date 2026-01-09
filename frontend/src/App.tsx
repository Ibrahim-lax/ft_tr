// frontend/src/App.tsx

import {useEffect, useState } from 'react'


// 1. You must define this interface ABOVE the function 
// so TypeScript knows what "id", "user", and "task" are.
interface UserTask {
  id: number;
  user: string;
  task?: string;  // Optional because it might not exist in the 'state' call
  state?: string; // Optional because it might not exist in the 'task' call
}

function App() {
  const [tasks, setTasks] = useState<UserTask[]>([]);
  const [viewMode, setViewMode] = useState<'task' | 'state'>('task');

  // Function to fetch data based on the mode
  const fetchData = (mode: 'task' | 'state') => {
    const endpoint = mode === 'task' ? '/api/users' : '/api/state';
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error fetching:", err));
  };

  // Initial fetch on mount
  useEffect(() => {
    fetchData('task');
  }, []);

  // Handler for the button click
  const toggleMode = () => {
    const nextMode = viewMode === 'task' ? 'state' : 'task';
    setViewMode(nextMode);
    fetchData(nextMode);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>Project Transcendence: Team {viewMode === 'task' ? 'Tasks' : 'Statuses'}</h1>
      
      {/* 1. THE TOGGLE BUTTON */}
      <button 
        onClick={toggleMode}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#400074a6',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Switch to {viewMode === 'task' ? 'States' : 'Tasks'}
      </button>

      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}> 
          {tasks.map((item) => (
            <li key={item.id} style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
              <span>
                <strong style={{ color: '#400074a6' }}>{item.user}</strong> 
              </span>
              
              {/* 2. CONDITIONAL RENDERING */}
              <code style={{ 
                backgroundColor: viewMode === 'task' ? '#e409099a' : '#09aee49a', // Color changes based on mode
                padding: '10px 12px', 
                borderRadius: '20px',
                color: 'white'
              }}>
                {viewMode === 'task' ? item.task : item.state}
              </code>
            </li>
          ))}
        </ul>
      </div>

      {tasks.length === 0 && <p>Loading...</p>}
    </div>
  );
}

export default App

// function App() {
//   const   getMessage = async () => {
//     const res = await fetch("http://localhost:3000");
//     const txt = await res.text();
//     alert(txt);
//   };

//   return (
//     <button onClick={getMessage}>
//       Get message from backend
//     </button>
//   );
// }


