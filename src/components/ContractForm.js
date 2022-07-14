import React from "react";

import "./admin.css"

function ContractForm({ ContractSubmit }) {
    return (
        <>


            <div className="admin-contact-form">
                <form className="admin-form">
                    <input id="name" type="text" name="name" placeholder="Client Full Name" />
                    <input type="text" name="address" placeholder="Street Address/City/State/Zip Code" />
                    <input type="text" name="number" placeholder="number" />
                    <input type="text" name="email" placeholder="email" />
                    <input type="text" name="DOI" placeholder="Date of inspection" />
                    <input type="text" name="nuisanceAnimal" placeholder="Nuisance Animal" />
                    <input type="text" name="inspectionFee" placeholder="Inspection Fee" />
                    <input type="text" name="trapFee" placeholder="Trap Installation Fee" />
                    <input type="text" name="PAR" placeholder="Price for Animal Removal" />
                    <input type="text" name="EPW" placeholder="Exclusion and Preventative Work" />
                    <input type="text" name="subtotal" placeholder="Subtotal" />
                    <input type="text" name="AST" placeholder="Applicable Sales Tax" />
                    <input type="text" name="deposit" placeholder="Deposit" />
                    <input type="text" name="total" placeholder="Total" />
                    <input type="text" name="signedPaid" placeholder="Signed and Paid?" />


                    <button id="button"
                        type="submit"
                        name="submit"
                        className="submit" onClick={()=> ContractSubmit()}>
                        SUBMIT </button>

                </form>

            </div>

        </>
    )
}

export default ContractForm