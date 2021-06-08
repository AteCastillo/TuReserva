import React from 'react';

export const OrderMain = (props) => {
    const names = props.location.names
    console.log(names)
    names.forEach(element => {
        console.log(element)
    })
    return(
        <>
        {names.map((element) => (
            <h2>{element}</h2>
        ))}
    
        </>
        
        
    );
}