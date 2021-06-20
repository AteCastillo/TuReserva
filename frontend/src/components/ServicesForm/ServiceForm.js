import React from 'react';
import FormServices from './FormServices';
import './Services2.css';
import FormUpload from "./FormUpload"
import {Steps} from "./Steps"

export const ServiceForm = (props) => {
    const id = props.location.id
    return (
    <>
    <div className='service-container'>
        
        <div className='form-content-left'>
            <FormUpload partner_id={id}/>
        </div>
            {/* if is not submitted, display form, else success:*/}
            <FormServices partner_id={id}/>
        </div>
        <br/>
        <Steps first="#b0b0ab" second="#01bcd4" button={true}/>
    </>
    );
};


