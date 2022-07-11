import React from "react";
import ServiceCard from "./ServiceCard";


function ServiceList({ services }) {

    const serviceCardObj = services.map((item) => {

        return <ServiceCard key={item.id} services={item} />

    })

    return (
        
        <div className="right-container">

            <div className="services-container">
                {serviceCardObj}
            </div>

        </div>
    )
}


export default ServiceList