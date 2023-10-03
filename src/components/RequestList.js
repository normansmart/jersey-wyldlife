import React from "react";
import RequestCard from "./RequestCard";
// import ContractCard from "./ContractCard";

function RequestList({requests , remove}){

const requestList = requests.map(
   (request) => {
    return <RequestCard key={request.id} request={request} remove={remove}/>
   }
)



    return (

       <>
       {requestList}
       </> 
    )
}

export default RequestList