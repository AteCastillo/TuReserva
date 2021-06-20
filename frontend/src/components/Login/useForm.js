import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

const useFormLogin = (validateInfoLogin, login) => {
    let history = useHistory();
    const [values,setValues] = useState({
        username:'', 
        password: '',
    });
    const [submitting, setSubmitting] = useState(false);

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
        setSubmitting(true);
    }
    useEffect(
        () => {
        if (Object.keys(errors).length === 0 && submitting){
            const send_data = async () => {
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
        console.log(data.user)
        if (data !== "Wrong Password"){
            localStorage.setItem('tureserva_token', "Token");
            localStorage.setItem('tureserva_user', data.user)
            login(data.user)
            history.push('/')
            
        }
    };
    send_data();
}
    },
    [errors]
    );
    return { handleChange, values, handleSubmit, errors};
};


export default useFormLogin;