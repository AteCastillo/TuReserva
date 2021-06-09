import React, {useState} from 'react';
import FormLogin from './FormLogin';
import './login.css';

export const Login = () => {
    return (
    <>
    <div className='login-container'>
        
        
        <div className='form-content-left'>
       
            <img className='form-img' src='https://arabacademy-u8hapu3mdn.netdna-ssl.com/wp-content/uploads/2015/04/loginImage-400x300.jpg' alt='new'></img>
        </div>
     
            {/* if is not submitted, display form, else success:*/}
            <FormLogin/>
        </div>
    </>
    );
};


