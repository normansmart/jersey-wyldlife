import React from "react";

function ServiceCard({services}) {

    return (
        <>

            <div className="service-box" style={{backgroundColor: services.backgroundColor}}>

                <div className="service-header">

                    <p className="service-header-text"style={{color: services.textColor}}>

                        {services.name}

                    </p>

                    <div className="service-description">

                        <p className="service-description-text" style={{color: services.textColor}}>
                            {services.shortDescription}
                        </p>

                    </div>

                </div>

                <a className="service-link">
                    <h2 className="view-more-button" style={{backgroundColor: services.backgroundColor}}>
                        <span style={{color: services.textColor}}> READ MORE </span>
                    </h2>
                </a>

            </div>

        </>
    )

}

export default ServiceCard