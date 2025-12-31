import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const   getMessage = async () => {
    const res = await fetch("http://localhost:3000");
    const txt = await res.text();
    alert(txt);
  };

  return (
    <button onClick={getMessage}>
      Get message from backend
    </button>
  );
}

export default App
