import React from 'react';
import useFormLogin from './useForm';
import validateInfoLogin from './validateInfo';
import {Link} from 'react-router-dom';

import './login.css';


const FormLogin = ({login}) => {
    const {handleChange, values, handleSubmit, errors} = useFormLogin(validateInfoLogin, login);
    
    return (
                
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit} noValidate>
               <h1>Welcome back!</h1>
               <h2> To get in fill out the information bellow </h2>
            <div className='form-imputs'>
                <label className='form-label'>Username</label>
                <input
                    className='form-imput'
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                    value={values.username}
                    onChange={handleChange}
                    />
                    
                {/*if errors.username is true, it will return whatever passed after that (in this case, {errors.username} */}
                {errors.username && <p>{errors.username}</p>}
            </div>
           <div className="form-imputs">
                <label className="form-label">
                    Password
                </label>
                <input type="password" name='password'
                className="form-imput" placeholder="Enter your password"
                value={values.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}

           </div>
           <button className='form-imput-buttom' type="submit">Log in</button>
           <span className='form-input-login'>
           Don't have an account?  Create one <Link to="/signupuser">here</Link>
           </span>
           </form>
       </div>
    );
};

export default FormLogin;

