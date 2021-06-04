import React, {useState} from 'react';
import FormLogin from './FormLogin';
import FormSuccessLogin from './FormSuccess';
import './login.css';

export const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true);
    }
    return (
    <>
    <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
            <h1> Not a partner yet?</h1>
            <span className='form-imput-login'>
               Signup <a href="#">here</a>
            </span>
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormLogin submitForm= {submitForm}/> ) : (<FormSuccessLogin/>)}
        </div>
    </>
    );
};


