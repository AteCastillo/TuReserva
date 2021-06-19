import React from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import './Form.css';


const FormSignup = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validateInfo);
    
    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit} noValidate>
               <h1>Become our partner!</h1>
               <h2> Create your account by filling out the information bellow </h2>
     
            <div className='form-imputs'>
                <label className='form-label'>Company's name</label>
                <input
                    className='form-imput'
                    type='text'
                    name='name'
                    placeholder="Enter your company's name"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            
            <div className='form-imputs form-textarea'>
                <label className='form-label'>Company's description</label>
                <textarea
                    className='form-imput'
                    type='text'
                    name='description'
                    placeholder="Enter your company's description"
                    value={values.description}
                    rows="5"
                    cols="40"
                    onChange={handleChange}
                ></textarea>
                {errors.description && <p>{errors.description}</p>}
            </div>

            <div className='form-imputs'>
                <label className='form-label'>Address</label>
                <input
                    className='form-imput'
                    type='text'
                    name='address'
                    placeholder='Enter your address'
                    value={values.address}
                    onChange={handleChange}
                />
                {errors.address && <p>{errors.address}</p>}
            </div>

            <div className='form-imputs'>
                <label className='form-label'>Telephone</label>
                <input
                    className='form-imput'
                    type='text'
                    name='telephone'
                    placeholder='Enter your telephone number'
                    value={values.telephone}
                    onChange={handleChange}
                />
                {errors.telephone && <p>{errors.telephone}</p>}
            </div>

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
           <div className="form-imputs">
                <label className="form-label label-categories">
                    Category
                </label>
                <select name='categories' 
                className='categories-form' value={values.categories} 
                onChange={handleChange} defaultValue="">
                    <option value='id-01'>Stetic</option>
                    <option value='id-02'>Massagge</option>
                    <option value='id-03'>Clean</option>
               </select>
               {errors.category && <p>{errors.category}</p>}

           </div>
           <button className='form-imput-buttom' type="submit">Sign up</button>
           </form>
       </div>
    );
};

export default FormSignup;

