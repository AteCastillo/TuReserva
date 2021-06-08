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
        
        
        <div className='form-content-left'>
       
            <img className='form-img' src='https://arabacademy-u8hapu3mdn.netdna-ssl.com/wp-content/uploads/2015/04/loginImage-400x300.jpg' alt='new'></img>
        </div>
     
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormLogin submitForm= {submitForm}/> ) : (<FormSuccessLogin/>)}
        </div>
    </>
    );
};


