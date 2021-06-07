import React from 'react';

export const Reservation = ({quantity, total}) =>
{
    return (
    <div className="reservation-partner">
        <p>Servicios {quantity}, Total: {total}</p>
    </div>
    );
}