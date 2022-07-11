import React from "react";

import TipBox from "./TipBox";


function AnimalCard({animal}) {


    return (
        <>

            <div className="animal-container" >

                <div className="info-responsive">

                    {/* <div class="warnings-container">

                        <p class="warning-header"> HELPFUL FACTS</p>

                        <TipBox warning={warning} />

                    </div> */}


                    <div className="info-container">

                        <div className="category-info">

                            <p className="info-type"> Family </p>
                            <p className="info-result"> {animal.info.family} </p>

                        </div>

                        <div className="category-info">

                            <p className="info-type"> Food Type </p>
                            <p className="info-result"> {animal.info.foodType} </p>


                        </div>


                        <div className="category-info">

                            <p className="info-type"> Habitat </p>
                            <p className="info-result"> {animal.info.habitat} </p>

                        </div>


                        <p className="animal-info"> {animal.info.animalInfo}
                        </p>


                    </div>


                </div>






                <img className="animal-image" src={animal.image}/>


            </div>

        </>
    )
}


export default AnimalCard