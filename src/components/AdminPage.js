import React from "react";
import { useState } from "react";
import ContractForm from "./ContractForm";


const AdminPage = () => {

    const [Requests, setRequests] = useState([])

    const [Contracts, setContracts] = useState([])



    fetch("http://localhost:9292/")
        .then(response => response.json())
        .then(json => {
            setRequests(json)
        }
        )


    function addNewContract() {


        fetch(`http://localhost:9292/animal_control_requests`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                
            )
        })
            .then(setContracts())
    }




    return (
        <>

            <ContractForm ContractSubmit={addNewContract} />


        </>
    )

}



export default AdminPage