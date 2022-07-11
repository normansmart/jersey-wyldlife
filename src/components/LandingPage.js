import React from "react";

//Landing page for each page of site
function LandingPage({ backgroundimage }) {


    return (
        //container for the landing page. The section of the page itself has a background image dependent on the parameter input from parent
        <>

            <div className="title-header" style={{ backgroundImage: `url(${backgroundimage})` }}>

                {/* container for the info box on the side in landing page container */}
                <div className="title-text">

                    <img className="landing-logo" src={require("./images/home-logo.png")} />

                    <h3 className="description"> Serving Northern New Jersey and Surrounding Areas </h3>


                    <div className="landing-info">

                        <div className="landing-info-contact">

                            <img className="landing-info-image" src={require("./images/phone-icon.png")} />

                            <p> 973-232-2212 </p>

                        </div>

                        <div className="landing-info-contact">

                            <img className="landing-info-image" src={require("./images/email-icon.png")} />

                            <p> Send an email </p>

                        </div>
                    </div>

                    {/* Entry form for complaint and personal information */}

                    <form>
                        <input id="name" type="text" name="name" placeholder="Full Name" />
                        <input type="text" name="number" placeholder="Phone number" />
                        <input type="text" name="email" placeholder="Email address" />
                        <p> Give us a short description of your problem. </p>
                        <textarea type="text" id="issue-description" name="complaint" rows={5} cols={40}/>
                        <br />
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