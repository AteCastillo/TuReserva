import React from 'react';
import './Form.css';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We hace received your request</div>
            {/*put an image? */}
            <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
            
        </div>
    );
};

export default FormSuccess;
