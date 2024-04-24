import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';



const App = () => {





  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
         <Route path='/'/>
         <Route path='/Recipelist' />

        </Routes>
      </Router>





    </div>
  )
}

export default App
