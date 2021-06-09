import React, {useState} from 'react';
import FormLogin from './FormLogin';
import './login.css';

export const Login = () => {
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
            <FormLogin/>
        </div>
    </>
    );
};


