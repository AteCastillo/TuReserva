import React, {useState} from 'react';


export const ServiceInfo = ({name, description, time,
    add, del, select, price, id}) => {
    return(
        <>
            <h2>{name}</h2>
            <p> {description}</p>
            <p>{time}</p>
            <p>{price}</p>
        
         {select.includes(id) && select.length > 0 ? (
            <button onClick={(e) => del(price, id, name)}> - </button>
        ) : (
            
            <button onClick={(e) => add(price, id, name)}> + </button>
        )}
        
        </>
    )
}