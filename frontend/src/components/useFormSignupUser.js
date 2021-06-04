import {useState, useEffect} from 'react';

const useFormSignupUser = (callback,validateInfo) => {
    const [values,setValues] = useState({
        username:'',
        email: '',
        password: '',
        confirmpassword: ''
    });


    const [errors, setErrors] = useState({});
    // false because is not submitted yet:
    const [isSubmitting, setIsSubmitting] = useState (false);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }; 

    useEffect(
        () => {
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    },
    [errors]
    );
    return { handleChange, values, handleSubmit, errors };
};
export default useFormSignupUser;