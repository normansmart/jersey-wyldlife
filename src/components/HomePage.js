import React from "react";
import data from "../db.json";
import LandingPage from "./LandingPage";
import ServiceList from "./ServiceList";


const HomePage=()=> {

    const service = data.services

console.log(service)
   


    let background = require("./images/background-home.png")

    return (
        <>
            {/* Landing page component. Passed variable "background", defined above, as argument with assigned value leading to file path */}
            <LandingPage backgroundimage={background} />

            {/* introduction banner only appears in home page */}
            <div className="intro-banner">

                <div className="intro-image">

                    <img src={require("./images/intro-image.png")} />

                </div>

                <div className="intro-text">

                    <h1>WE ARE<br/> JERSEY WYLDLIFE</h1>
                    <p> Jersey WyldLife LLC is a full-service humane nuisance wildlife removal company serving Northern
                        NJ and the
                        surrounding areas.
                    </p>

                </div>

            </div>

            <ServiceList services={service} />

        </>
    )


}


export default HomePage