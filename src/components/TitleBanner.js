import React from "react";

//Landing page for each page of site
function LandingPage({ backgroundImage }) {


    return (
        //container for the landing page. The section of the page itself has a background image dependent on the parameter input from parent
        <div className="title-header" style={{ backgroundImage: URL({ backgroundImage }) }}>

            {/* container for the info box on the side in landing page container */}
            <div className="title-text">

                <img class="landing-logo" src="images/home-logo.png" />

                <h3> Serving Northern New Jersey and Surrounding Areas </h3>

                {/* Entry form for complaint and personal information */}

                <div class="landing-info-contact">

                    <img class="landing-info-image" src="images/phone-icon.png" />

                    <p> 973-232-2212 </p>

                </div>

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

    )

}


export default LandingPage