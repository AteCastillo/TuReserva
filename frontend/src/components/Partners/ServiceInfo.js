import React, {useState} from 'react';


export const ServiceInfo = ({name, description, time,
    add, del, select, price, id}) => {
    return(
        <div className='services-container' id={id}>
            <div className="info-services">
            <h2 className="name-services">{name}</h2>
            <p> {description}</p>
            <p>Duration: {time}m</p>
            
        </div>
        <p className="price-services">${price}</p>
         {select.includes(id) && select.length > 0 ? (
            <button className='button-services' 
            onClick={(e) => del(price, id, name)}> - </button>
        ) : (
            
            <button className='button-services'
            onClick={(e) => add(price, id, name)}> + </button>
        )}
        </div>
    )
}