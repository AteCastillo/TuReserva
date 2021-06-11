import React from 'react';
import FormServices from './FormServices';
import './Services.css';

export const ServiceForm = (props) => {
    const id = props.location.id
    return (
    <>
    <div className='service-container'>
        
        <div className='form-content-left'>
            <img className='newImage' src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4163865.jpg' alt='New'></img>
        </div>
            {/* if is not submitted, display form, else success:*/}
            <FormServices partner_id={id}/>
        </div>
    </>
    );
};


