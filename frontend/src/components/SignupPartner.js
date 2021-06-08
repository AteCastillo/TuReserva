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
        <div className='form-content-left'>
            
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormSignup submitForm= {submitForm}/> ) : (<FormSuccess/>)}
        </div>
    </>
    );
};


