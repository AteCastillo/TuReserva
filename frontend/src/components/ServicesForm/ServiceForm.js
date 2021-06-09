import React, {useState} from 'react';
import FormServices from './FormServices';
import FormSuccess from './FormSuccess';
import './Services.css';

export const ServiceForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true);
    }
    return (
    <>
    <div className='service-container'>
        
        <div className='form-content-left'>
            <img className='newImage' src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4163865.jpg' alt='New'></img>
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormServices submitForm= {submitForm}/> ) : (<FormSuccess/>)}
        </div>
    </>
    );
};


