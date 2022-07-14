import React from "react";


function AnimalCard({ animal }) {


    return (
        <>

            <div className="animal-container" style={{ backgroundColor: animal.background }}>

                <div className="info-responsive">

                    <div className="warnings-container" style={{ color: animal.textColor }}>

                        <p className="warning-header"> HELPFUL FACTS</p>

                        <div className="tip-box">

                            <img src={animal.warnings.icon1} />

                            <div className="tip">
                                <p className="tip-header">
                                    {animal.warnings.warningName1}
                                </p>

                                <p className="tip-info">
                                    {animal.warnings.warningMessage1}
                                </p>

                            </div>

                        </div>



                        <div className="tip-box">

                            <img src={animal.warnings.icon2} />

                            <div className="tip">
                                <p className="tip-header">
                                    {animal.warnings.warningName2}
                                </p>

                                <p className="tip-info">
                                    {animal.warnings.warningMessage2}
                                </p>

                            </div>

                        </div>



                        <div className="tip-box">

                            <img src={animal.warnings.icon3} />

                            <div className="tip">
                                <p className="tip-header">
                                    {animal.warnings.warningName3}
                                </p>

                                <p className="tip-info">
                                    {animal.warnings.warningMessage3}
                                </p>

                            </div>

                        </div>


                    </div>




                    <div className="info-container" style={{ color: animal.textColor }}>

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






                <img className="animal-image" src={animal.image} />


            </div>

        </>
    )
}


export default AnimalCard