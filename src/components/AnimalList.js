import React from "react";
import AnimalCard from "./AnimalCard";


function AnimalList({ animals }) {

    const animalList = animals.map((item) => {
  
        return <AnimalCard key={item.id} animal={item} />

    })

    return (
        
       <>
       <div>{animalList} </div>
       

       </>

    )
}


export default AnimalList