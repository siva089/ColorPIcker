import React from 'react';
import './App.css';
import Palette from "./Palette"
import seedColors from  "./SeedColors"
function App() {
  return (
    <div>
   <Palette {...seedColors[1]}/>  
    </div>
  );
}

export default App;
