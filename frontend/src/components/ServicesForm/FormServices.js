import React from 'react';
import useForm2 from './useForm2';
import validateInfo from './validateInfo';
import './Services2.css';


const FormServices = ({ partner_id }) => {
    const {handleChange, values, handleSubmit, errors} = useForm2(partner_id, validateInfo);
    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit} noValidate>
               <h1>Post your services!</h1>
               <h2> Describe, as detailed as possible, the service you will provide </h2>
            <div className='form-imputs'>
                <label className='form-label'>Name</label>
                <input
                    className='form-imput'
                    type='text'
                    name='name'
                    placeholder='Enter service name'
                    value={values.name}
                    onChange={handleChange}
                />
                {/*if errors.username is true, it will return whatever passed after that (in this case, {errors.username} */}
                {errors.name && <p>{errors.name}</p>}
            </div>
            
            
            <div className='form-imputs'>
                <label className='form-label'>Service description</label>
                <input
                    className='form-imput'
                    type='text'
                    name='description'
                    placeholder="Enter service description"
                    value={values.description}
                    onChange={handleChange}
                />
                {errors.description && <p>{errors.description}</p>}
            </div>

            <div className='form-imputs'>
                <label className='form-label'>Price</label>
                <input
                    className='form-imput'
                    type='text'
                    name='price'
                    placeholder='Enter service price in pesos'
                    value={values.price}
                    onChange={handleChange}
                />
                {errors.price && <p>{errors.price}</p>}
            </div>

            <div className='form-imputs'>
                <label className='form-label'>Duration</label>
                <input
                    className='form-imput'
                    type='text'
                    name='duration'
                    placeholder='Enter service duration in minutes'
                    value={values.duration}
                    onChange={handleChange}
                />
                {errors.duration && <p>{errors.duration}</p>}
            </div>

           <button className='form-imput-buttom button-submit' type="submit">Create</button>
           
           </form>
       </div>
    );
};

export default FormServices;



