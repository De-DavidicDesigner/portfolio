import React from 'react';
import Home from "./components/Home";
import Nav from "./components/nav";
import About from './components/About';
import Page from "./components/Page";
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {

  return (
        <div className='nav-heading'>
          <div>
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/page' element={<Page />} />
              <Route path='/contact' element={<About />} />
            </Routes>
          </div>
          {/* <div>
            <Home />
          </div>
          <div>
            <About />
          </div> */}
        </div>
  )
}

export default App;
