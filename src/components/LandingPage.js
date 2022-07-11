import React from "react";

//Landing page for each page of site
function LandingPage({ backgroundimage }) {


    return (
        //container for the landing page. The section of the page itself has a background image dependent on the parameter input from parent
        <>

        <div className="title-header" style={{backgroundImage: `url(${backgroundimage})`}}>

            {/* container for the info box on the side in landing page container */}
            <div className="title-text">

                <img className="landing-logo" src= {require("./images/home-logo.png")} />

                <h3> Serving Northern New Jersey and Surrounding Areas </h3>

                <div className="landing-info-contact">

                    <img className="landing-info-image" src={require("./images/phone-icon.png")}  />

                    <p> 973-232-2212 </p>

                </div>

                {/* Entry form for complaint and personal information */}
                
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="number" placeholder="Phone number" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="complaint" placeholder="Give a short description of your problem." />

                    <button id="button"
                        type="submit"
                        name="submit"
                        className="submit">
                        SUBMIT </button>

                </form>


            </div>

        </div>





        </>

    )

}


export default LandingPage