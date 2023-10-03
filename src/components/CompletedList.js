import React from "react";
import ContractCard from "./ContractCard";

function CompletedList({contracts , edit , remove}){

const contractList = contracts.map(
   
   (contract) => {
    return <ContractCard key={contract.id} contract={contract} edit={edit} remove={remove}/>
   }
)



    return (

       <>
       {contractList}
       </> 
    )
}

export default CompletedList