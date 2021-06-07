import React from 'react';
import {Link} from 'react-router-dom';
import './Categories.css';

export const PartnerInfo = ({id, address, name, phone, description, image}) => {
    console.log(image)
    return(
        
        <div className="card p-2 m-5 partner-card" style={{width: '18rem'}}>
        <h3 className="card-title font-weight-bold text-center">{name}</h3>
        <figue>
        <img className="card-img-top" src={`${image}`}  alt="Card image cap" />
        </figue>
        <div className="card-body">
            <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{address}</li>
            <li className="list-group-item ">Phone: {phone}</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body card-body-partner">
            <Link to={{pathname: "/partner", name: name, 
            address: address, phone: phone,
            description: description, id:id}} className="button-partner 
            cyan darken-3 text-center">
                See More</Link>
        </div>
        </div>   
        
    )
};
