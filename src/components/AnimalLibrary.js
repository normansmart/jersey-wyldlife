import React from "react";
import LandingPage from "./LandingPage";
import data from "../db.json";

import AnimalList from "./AnimalList";


function AnimalLibrary() {

    const animals = data.animals
    const warnings = animals.map(
        (item) =>{
            return item.warnings.map(
                (obj) => {
                    return obj
                }
            )
        }
    )




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
                    <p> Short description of page
                    </p>

                </div>

            </div>


<AnimalList animals={animals} />



        </>
    )

}



export default AnimalLibrary