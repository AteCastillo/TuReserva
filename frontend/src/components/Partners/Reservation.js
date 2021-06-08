import React from 'react';
import { Link } from 'react-router-dom';

export const Reservation = ({quantity, total}) =>
{
    return (
    <div className="reservation-partner">
        <p>Servicios {quantity}, Total: {total}</p>
        <Link> Reservar</Link>
    </div>
    );
}