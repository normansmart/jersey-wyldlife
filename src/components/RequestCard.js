import React from "react";

function RequestCard({ request , remove}) {




    return (
        <>
            <div className="contract-container">

                <div className="contract">

                    <h3> {request.name} </h3>

                    <div className="contract-list">
                        <li> {request.phone_number} </li>
                        <li> {request.email} </li>
                        <li> {request.description} </li>
                   
                    </div>


                    <button id="button"
                        className="submit" onClick={()=> remove(request)}>  DELETE
                    </button>
                    
    
                </div>

            </div>


        </>
    )
}


export default RequestCard