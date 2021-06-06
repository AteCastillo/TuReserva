import React from 'react';
import './Categories.css';

export const PartnerInfo = ({address, name, phone, description}) => {
    return(
        <div className="card p-2 m-5 partner-card" style={{width: '18rem'}}>
        <h3 className="card-title font-weight-bold text-center">{name}</h3>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{address}</li>
            <li className="list-group-item ">Phone: {phone}</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body card-body-partner">
            <a href="#" className="button-partner 
            cyan darken-3 text-center">
                Reservation</a>
        </div>
        </div>    
    )
};
