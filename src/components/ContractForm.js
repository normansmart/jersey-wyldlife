import React from "react";

import "./admin.css"

function ContractForm({ ContractSubmit }) {
    return (
        <>


            <div className="admin-contact-form">
                <form className="admin-form">
                    <input id="name" type="text" name="name" placeholder="Client Full Name" />
                    <input type="text" name="number" placeholder="Street Address Line 1" />
                    <input type="text" name="number" placeholder="Street Address Line 2" />
                    <input type="text" name="number" placeholder="City" />
                    <input type="text" name="number" placeholder="State" />
                    <input type="text" name="number" placeholder="Zip Code" />
                    <input type="text" name="number" placeholder="Phone Number" />
                    <input type="text" name="number" placeholder="Email Address" />
                    <input type="text" name="email" placeholder="Date of inspection" />
                    <input type="text" name="number" placeholder="Nuisance Animal" />
                    <input type="text" name="number" placeholder="Inspection Fee" />
                    <input type="text" name="number" placeholder="Trap Installation Fee" />
                    <input type="text" name="number" placeholder="Price for Animal Removal" />
                    <input type="text" name="number" placeholder="Exclusion and Preventative Work" />
                    <input type="text" name="number" placeholder="Subtotal" />
                    <input type="text" name="number" placeholder="Applicable Sales Tax" />
                    <input type="text" name="number" placeholder="Deposit" />
                    <input type="text" name="number" placeholder="Total" />
                    <input type="text" name="number" placeholder="Signed and Paid?" />


                    <button id="button"
                        type="submit"
                        name="submit"
                        className="submit" onClick={ ContractSubmit()}>


                            
                        SUBMIT </button>

                </form>

            </div>

        </>
    )
}

export default ContractForm