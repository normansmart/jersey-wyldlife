
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navigation';
import HomePage from './components/HomePage';
import AnimalLibrary from './components/AnimalLibrary';
import AdminPage from './components/AdminPage';


function App() {



  return (

   

    //  <Router>

    //     <NavBar />

    //     <Routes>

    //     <Route path="/" exact element={<HomePage/>} />
    //     <Route path="/animals"  element={<AnimalLibrary/>} />

    //     </Routes>

    //   </Router>


    <AdminPage/>
    

   
  );
}

export default App;
