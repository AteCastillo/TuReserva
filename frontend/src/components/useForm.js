import {useState, useEffect} from 'react';

const useForm = (callback,validateInfo) => {
    const [values,setValues] = useState({
        username:'',
        name:'',
        address:'',
        telephone:'',
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
    const handleSubmit = async e => {
        e.preventDefault();

        setErrors(validateInfo(values));

        const res = await fetch(`http://localhost:5200/partners/id-01`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:values.username,
                name:values.name,
                address:values.address,
                phone: values.telephone,
                email: values.email,
                password: values.password,
            })
            
        })
        console.log(values.username,values.name, values.address, values.telephone, values.email,values.password)
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


export default useForm;