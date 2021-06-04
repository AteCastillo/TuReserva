import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

export const SignupPartner = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true);
    }
    return (
    <>
    <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
            <h1> Already a partner?</h1>
            <span className='form-imput-login'>
               Login <a href="#">here</a>
            </span>
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormSignup submitForm= {submitForm}/> ) : (<FormSuccess/>)}
        </div>
    </>
    );
};


