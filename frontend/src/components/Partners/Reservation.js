import React from 'react';
import { Link } from 'react-router-dom';

export const Reservation = ({quantity, total, services, names}) =>
{
    return (
    <div className="reservation-partner">
        <p className='reservation-service'>Servicios {quantity}, Total: {total}</p>
        <p>
        <Link to={{pathname: "/order", services:services, names:names}} 
        className="reservation-button">Reservar</Link>
        </p>
    </div>
    );
}