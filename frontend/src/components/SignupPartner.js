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
            <h1> Join us to improve your bussiness!</h1>
            <p>You must register to access and use TuReserva. The email address you provide during your registration will be the login for your account. Each account must have a unique email address. 
You represent that any information you provide during registration or at any time thereafter is true, accurate and complete and that you will update all such information as necessary to maintain its truth, accuracy and completeness. You shall be responsible for maintaining the confidentiality of your password, and will be solely liable for all actions taken via your account and under your password, whether or not made with your knowledge or authority. 
By registering, you agree that you will use TuReserva only for the purposes advertised on this website, that you are a valid business desiring to use the Services to advertise your business and generate online appointments from consumers this app, and that any contact information you provide, such as email addresses and phone numbers, is valid and active contact information for you.
</p>

        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormSignup submitForm= {submitForm}/> ) : (<FormSuccess/>)}
        </div>
    </>
    );
};


