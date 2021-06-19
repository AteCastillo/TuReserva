import {useState, useEffect} from 'react';

const useFormSignupUser = (validateInfo, openModal) => {
    const [values,setValues] = useState({
        username:'',
        email: '',
        password: '',
        confirmpassword: ''
    });


    const [errors, setErrors] = useState({});
    // false because is not submitted yet:
    const [submitting, setSubmitting] = useState (false);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setSubmitting(true);
        
        
    }; 

    useEffect(
        () => {
        if (Object.keys(errors).length === 0 && submitting){
            const send_request = async () => {
            const res = await fetch(`http://localhost:5200/users`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:values.username,
                email: values.email,
                password: values.password,
            })
        })
        const data = await res.json()
        localStorage.setItem('tureserva_token', "Token");
        localStorage.setItem('tureserva_user', data.user)
        openModal()
    }
    send_request();
    }
    },
    [errors]
    );
    return { handleChange, values, handleSubmit, errors };
};
export default useFormSignupUser;