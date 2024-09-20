import React from 'react';
import Home from "./components/Home";
import Nav from "./components/nav";

import './App.css';

function App() {
  return (
        <div className='nav-heading'>
          <div>
            <Nav />
          </div>
          <div>
            <Home />
          </div>
        </div>
  )
}

export default App;
