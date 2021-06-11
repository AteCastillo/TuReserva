import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const useForm = (validateInfo) => {
    let history = useHistory();
    const [submit, setSubmit] = useState(false);
    const [values,setValues] = useState({
        username:'',
        name:'',
        description:'',
        address:'',
        telephone:'',
        email: '',
        password: '',
        confirmpassword: '',
        categories: 'id-01'
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
                    category_id: values.categories
                })
            })
            if (res.status === 201){
                //history.push('/service')
                const data = await res.json()
                history.push({pathname: "/service", id:data})
            }
            }
            send_request();
        }
    },
    [errors]
    );
    return { handleChange, values, handleSubmit, errors };
};


export default useForm;