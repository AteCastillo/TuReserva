import React from 'react';
import { Link } from 'react-router-dom';

export const Reservation = ({quantity, total, 
    services, names, times, prices, partner}) =>
{   
    return (
    <div className="reservation-partner">
        <p className='reservation-service'>Services {quantity}, Total: {total}</p>
        <p>
        <Link to={{pathname: "/order", services:services, names:names, 
        quantity:quantity, total:total, times:times, prices:prices,
        partner:partner}} 
        className="reservation-button">Reserve</Link>
        </p>
    </div>
    );
}