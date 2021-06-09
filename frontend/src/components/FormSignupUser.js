import React from 'react';
import useFormSignupUser from './useFormSignupUser';
import validateInfoSignupUser from './validateInfoSignupUser';
import './Formuser.css';


const FormSignupUser = ({ submitForm }) => {
    const {handleChange, values, handleSubmit, errors} = useFormSignupUser(submitForm,validateInfoSignupUser);
    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit} noValidate>
               <h1>Create your account by filling out the information bellow </h1>
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
                    Email
                </label>
                <input type="email" name='email' 
                className="form-imput" placeholder="Enter your email"
                value={values.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}

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
           <div className="form-imputs">
                <label className="form-label">
                    Confirm password
                </label>
                <input type="password" name='confirmpassword'
                className="form-imput" placeholder="Re enter your password"
                value={values.confirmpassword} onChange={handleChange}/>
                {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
           </div>
           <button className='form-imput-buttom' type="submit">Sign up</button>
           <span className='form-imput-login'>
               Already have an account? Login <a href="/#">here</a>
           </span>
           </form>
       </div>
    );
};

export default FormSignupUser;

