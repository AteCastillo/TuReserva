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
    <div className='user-container'>

        <div className='form-content-left'>
            <img className='form-img' src='https://cdn0.iconfinder.com/data/icons/click-linear-outline/300/1520733Untitled-3-512.png' alt='new'></img>
        </div>
           <FormSignupUser submitForm= {submitForm}/>
        </div>
    </>
    );
};
