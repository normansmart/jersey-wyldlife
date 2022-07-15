import React from "react";
import { useState, useEffect } from "react";
import ContractForm from "./ContractForm";


const AdminPage = () => {

    const [requests, setRequests] = useState([])

    const [contracts, setContracts] = useState({})






    useEffect(() => {
        fetch("http://localhost:9292/completed_request_forms")
        .then(response => response.json())
        .then(setContracts)

    },[])
    console.log(contracts)

    useEffect(() => {
        fetch("http://localhost:9292/animal_control_requests")
        .then(response => response.json())
        .then(setRequests)
    },[])
    console.log(requests)

    

    function addNewContract(e) {
        e.preventDefault();

        fetch("http://localhost:9292/completed_request_forms", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    client_name: e.target.name.value,
                    street_address_line_1: e.target.address.value,
                    street_address_line_2: e.target.address2.value,
                    city: e.target.city.value,
                    state: e.target.state.value,
                    zip_code: e.target.zipCode.value,
                    phone_number: e.target.number.value,
                    email: e.target.email.value,
                    date_of_inspection: e.target.DOI.value,
                    nuisance_animal: e.target.nuisanceAnimal.value,
                    inspection_fee: e.target.inspectionFee.value,
                    trap_installation_fee: e.target.trapFee.value,
                    price_for_animal_removal_or_relocation: e.target.PAR.value,
                    exclusion_and_preventative_work: e.target.EPW.value,
                    sub_total: e.target.subtotal.value,
                    state_sales_tax: e.target.AST.value,
                    deposit: e.target.deposit.value,
                    total: e.target.total.value,
                    signed_and_paid: e.target.signedPaid.value
                }
            )
        })
        console.log('button pressed')
    }




    return (
        <>

            <ContractForm ContractSubmit={addNewContract} />

        </>
    )

}



export default AdminPage