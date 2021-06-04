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
    <div className='login-container'>
        <span className='close-btn'>×</span>
        <div>
           
            <span className='form-imput-login'>
               Not a partner yet? Signup <a href="#">here</a>
            </span>
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormLogin submitForm= {submitForm}/> ) : (<FormSuccessLogin/>)}
        </div>
    </>
    );
};


