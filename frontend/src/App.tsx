import {useEffect, useState } from 'react'


// 1. You must define this interface ABOVE the function 
// so TypeScript knows what "id", "user", and "task" are.
interface UserTask {
  id: number;
  user: string;
  task: string;
}

function App() {
  const [tasks, setTasks] = useState<UserTask[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/users') 
      .then(response => response.json())
      .then(data => {
        setTasks(data);
      })
      .catch(err => console.error("Error fetching:", err));
  }, []);

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f4f4f4', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ color: '#333' }}>Project Transcendence: Team Tasks</h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
      }}>
        <ul style={{ listStyle: 'none', padding: 0 }}> 
          {}
          {tasks.map((item) => (
            <li key={item.id} style={{ 
              padding: '15px', 
              borderBottom: '1px solid #000000ff',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>
                <strong style={{ color: '#400074a6' , padding: '2px 6px'}}>{item.user}</strong> 
              </span>
              <code style={{ backgroundColor: '#e409099a', padding: '10px 6px', borderRadius: '20px' }}>
                {item.task}
              </code>
            </li>
          ))}
        </ul>
      </div>

      {tasks.length === 0 && <p>Loading tasks or backend is offline...</p>}
    </div>
  )
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


