import {useState, useEffect} from 'react';

const useForm = (validateInfo) => {
    const [submit, setSubmit] = useState(false);
    const [values,setValues] = useState({
        username:'',
        name:'',
        description:'',
        address:'',
        telephone:'',
        email: '',
        password: '',
        confirmpassword: ''
    });


    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        setErrors(validateInfo(values)); 
        setSubmit(true);
    };


    useEffect(
        () => {
        if (Object.keys(errors).length === 0 && submit === true){
            console.log(errors)
            console.log(values.name)
            const send_request = async () => {
                const res = await fetch(`http://localhost:5200/partners`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username:values.username,
                    name:values.name,
                    description:values.description,
                    address:values.address,
                    phone: values.telephone,
                    email: values.email,
                    password: values.password,
                    category_id: 'id-01'
                })
                
                
            })
            const data = await res;
            console.log(data)
            }
            send_request();
        }
    },
    [errors]
    );
    return { handleChange, values, handleSubmit, errors };
};


export default useForm;