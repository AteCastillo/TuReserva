import React, {useState} from 'react';
import FormSignupUser from './FormSignupUser';
import FormSuccessUser from './FormSuccessUser';
import './Formuser.css';

export const SignupUser = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true);
    }
    return (
    <>
    <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
            <h1>Already have an account?</h1>
            <span className='form-imput-login'>
               Login <a href="#">here</a>
            </span>
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormSignupUser submitForm= {submitForm}/> ) : (<FormSuccessUser/>)}
        </div>
    </>
    );
};
