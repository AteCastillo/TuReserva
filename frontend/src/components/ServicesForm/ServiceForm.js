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
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
            <h1> Already a partner?</h1>
            <span className='form-imput-login'>
               Login <a href="/#">here</a>
            </span>
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormServices submitForm= {submitForm}/> ) : (<FormSuccess/>)}
        </div>
    </>
    );
};


