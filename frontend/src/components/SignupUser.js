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
            <img className='form-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16DY2L9Lq_VmGBKwcAw9RLmRrtPn-X2Fdvw&usqp=CAU' alt='new'></img>
        </div>
            {/* if is not submitted, display form, else success:*/}
            {!isSubmitted ? (<FormSignupUser submitForm= {submitForm}/> ) : (<FormSuccessUser/>)}
        </div>
    </>
    );
};
