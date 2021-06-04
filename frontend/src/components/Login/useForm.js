import {useState, useEffect} from 'react';

const useFormLogin = (callback,validateInfo) => {
    const [values,setValues] = useState({
        username:'', 
        password: '',
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
    const handleSubmit = async e => {
        e.preventDefault();

        setErrors(validateInfo(values));

        const res = await fetch(`http://localhost:5200/login`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:values.username,
                password: values.password
            })
            
        })
        const data = await res.json()
        console.log(data)
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


export default useFormLogin;