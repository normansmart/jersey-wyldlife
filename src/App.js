
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navigation';
import HomePage from './components/HomePage';
import AnimalLibrary from './components/AnimalLibrary';
import AdminPage from './components/AdminPage';


function App() {
  function addNewRequest(e) {
    e.preventDefault();

    fetch("http://localhost:9292/animal_control_requests", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                name: e.target.name.value,
                phone_number: e.target.number.value,
                email: e.target.email.value,
                description: e.target.complaint.value,
            }
        )
    })
    
}





  return (
    <>
  

      <Router>

        <NavBar />

        <Routes>

          <Route path="/" exact element={<HomePage addRequest={addNewRequest}/>} />

          <Route path="/animals"  element={<AnimalLibrary addRequest={addNewRequest}/>} />
     
          {/* <Route path='/admin' element={<AdminPage />} /> */}
        
        </Routes>
      </Router>


    
    
    </>
   
  );
}

export default App;