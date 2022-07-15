import React from "react";

function ContractCard({ contract , edit, remove}) {




    return (
        <>
            <div className="contract-container">

                <div className="contract">

                    <h3> {contract.client_name} </h3>

                    <div className="contract-list">
                        <li> {contract.street_address_line_1} </li>
                        <li> {contract.street_address_line_2} </li>
                        <li> {contract.city} </li>
                        <li> {contract.state} </li>
                        <li> {contract.zip_code} </li>
                        <li> {contract.phone_number} </li>
                        <li> {contract.email} </li>
                        <li> {contract.date_of_inspection} </li>
                        <li> {contract.nuisance_animal} </li>
                        <li> {contract.inspection_fee} </li>
                        <li> {contract.trap_installation_fee} </li>
                        <li> {contract.price_for_animal_removal_or_relocation} </li>
                        <li> {contract.exclusion_and_preventative_work} </li>
                        <li> {contract.sub_total} </li>
                        <li> {contract.state_sales_tax} </li>
                        <li> {contract.deposit} </li>
                        <li> {contract.total} </li>
                        <li> {contract.signed_and_paid} </li>
                    </div>


                    <button id="button"
                        className="submit" onClick={()=> remove(contract)}>  
                    </button>




                    <button id="button"
                        className="submit" onClick={() => edit(contract)}>EDIT  </button>



                </div>

            </div>


        </>
    )
}


export default ContractCard