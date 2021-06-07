import {useState, useEffect} from 'react';

const useForm = (callback,validateInfo) => {
    const [values,setValues] = useState({
        name:'',
        description:'',
        price:'',
        duration:'',
    });


    const [errors, setErrors] = useState({});
    // false because is not submitted yet:
    const [isSubmitting /*setIsSubmitting*/] = useState (false);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async e => {
        e.preventDefault();

        setErrors(validateInfo(values));

        const res = await fetch(`http://localhost:5200/services/65d29319-4e86-439e-8bf2-525075810549`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:values.name,
                description:values.description,
                price:values.price,
                time: values.duration,
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


export default useForm;