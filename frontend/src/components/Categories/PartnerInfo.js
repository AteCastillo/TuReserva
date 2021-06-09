import React from 'react';
import {Link} from 'react-router-dom';
import './Categories.css';

export const PartnerInfo = ({id, address, name, phone, description, image}) => {
    return(
        <div className="card p-2 m-4 partner-card" style={{width: '400px', height: '600px'}}>
        <h3 className="card-title font-weight-bold text-center">{name}</h3>
        <figure>
        <img className="card-img-top" src={`${image[0]}`}  alt="Card image cap" />
        </figure>
        <div className="card-body">
            <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{address}</li>
            <li className="list-group-item ">Phone: {phone}</li>
        </ul>
        <div className="card-body card-body-partner">
            <Link to={{pathname: "/partner", name: name, 
            address: address, phone: phone,
            description: description, id:id,
            images:image}} className="button-partner 
            cyan text-center">
                See More</Link>
        </div>
        </div>   
        
    )
};
