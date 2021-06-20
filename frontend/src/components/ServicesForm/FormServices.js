import React, { useState, useEffect } from 'react';
import useForm2 from './useForm2';
import validateInfo from './validateInfo';
import './Services2.css';
import {useModal} from "../Modals/useModal"
import Modal from "../Modals/Modal"


const FormServices = ({ partner_id }) => {
    const [button, setButton] = useState(false)
    const [msg, setMsg] = useState(false)
    const {handleChange, values, handleSubmit, 
    errors} = useForm2(partner_id, validateInfo, setButton, setMsg);
    const [isOpenModal, openModal, closeModal] = useModal(false, null)
    
    useEffect(() => {
        setTimeout(function(){
            if (msg === true){setMsg(false)}
            document.getElementById('service-name').value = ""
            document.getElementById('service-duration').value = ""
            document.getElementById('service-price').value = ""
            document.getElementById('service-description').value = ""
        }, 2000);
    }, [msg])
    
    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit} noValidate>
               <h1>Post your services!</h1>
               <h2> Describe, as detailed as possible, the service you will provide </h2>
            <div className='form-imputs'>
                <label className='form-label'>Name</label>
                <input
                    id="service-name"
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
                    id="service-description"
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
                    id="service-price"
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
                    id="service-duration"
                    className='form-imput'
                    type='text'
                    name='duration'
                    placeholder='Enter service duration in minutes'
                    value={values.duration}
                    onChange={handleChange}
                />
                {errors.duration && <p>{errors.duration}</p>}
            </div>
            {msg && (<p className="msg-created"> Your service was created</p>)}

           <button className='form-imput-buttom button-submit' type="submit">Create</button>
           
           </form>
           <div className='btn-step'>
            {button && (<button className="button-step" onClick={openModal}> Finish</button>)}
         </div>
         <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <h3>Notification</h3>
            <p>Your Account was created successfully</p>
        </Modal>
       </div>
    );
};

export default FormServices;



