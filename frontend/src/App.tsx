// frontend/src/App.tsx

import {useEffect, useState } from 'react'


function App() {
  const   getMessage = async () => {
    const res = await fetch("/api/get_helloo");
    const txt = await res.text();
    alert(txt);
  };

  return (
      <button class="q" onClick={getMessage}>
        GET THAT MESSAGE
      </button>
  );
}


export default App