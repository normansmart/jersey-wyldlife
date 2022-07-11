
import React from 'react';
import { useState } from 'react';
import './App.css';
import data from "./db.json";

import HomePage from './components/HomePage';
import AnimalLibrary from './components/AnimalLibrary';


function App() {



  

  return (

    <div className="App">

 <AnimalLibrary />

    </div>
  );
}

export default App;
