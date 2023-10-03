import React from "react";
import LandingPage from "./LandingPage";
import data from "../db.json";
import '../library.css'

import AnimalList from "./AnimalList";



const AnimalLibrary= () =>{

    const animals = data.animals

    let background = require("./images/background-animal-library.png")

    return (
        <>

            <LandingPage backgroundimage={background} />

            <div className="intro-banner">

                <div className="intro-image">

                    <img src={require("./images/intro-image.png")} />

                </div>

                <div className="intro-text">

                    <h1>OUR<br /> WYLDLIFE</h1>
                

                </div>

            </div>

            <AnimalList animals={animals} />

        </>
    )

}





export default AnimalLibrary;

