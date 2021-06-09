import {useState, useEffect} from 'react';

const useFormLogin = (callback,validateInfoLogin) => {
    const [values,setValues] = useState({
        username:'', 
        password: '',
    });


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async e => {
        e.preventDefault();

        setErrors(validateInfoLogin(values));

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
        if (data !== "Wrong Password"){
            localStorage.setItem('tureserva_token', data)
        }
    };

/*
    useEffect(
        () => {
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    },
    [errors]
    ); */
    return { handleChange, values, handleSubmit, errors };
};


export default useFormLogin;