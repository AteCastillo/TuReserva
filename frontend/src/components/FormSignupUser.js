import React from 'react';
import useFormSignupUser from './useFormSignupUser';
import validateInfoSignupUser from './validateInfoSignupUser';
import {Link} from 'react-router-dom';
import './Formuser.css';
import {useModal} from "./Modals/useModal"
import Modal from "./Modals/Modal"


const FormSignupUser = ({login}) => {
    const [isOpenModal, openModal, closeModal] = useModal(false, login)
    const {handleChange, values, handleSubmit, errors} = useFormSignupUser(validateInfoSignupUser, openModal);
    
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
               Already have an account? Login <Link className='form-imput-link' to="/login">here</Link>
           </span>
           </form>
           <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <h3>Notification</h3>
            <p>Your Account was created successfully</p>
        </Modal>
       </div>
    );
};

export default FormSignupUser;

