import {useState, useEffect} from 'react';

const useForm2 = (partner_id, validateInfo, setButton) => {
    const [submit, setSubmit] = useState(false)
    const [values,setValues] = useState({
        name:'',
        description:'',
        price:'',
        duration:'',
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
        if (Object.keys(errors).length === 0 && submit){
            const send_data = async () => {
            const res = await fetch(`http://localhost:5200/services`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:values.name,
                description:values.description,
                price:values.price,
                time: values.duration,
                partner_id: partner_id,
            })
        })
            }
            send_data();

        }
        document.getElementById('service-name').value = ""
        document.getElementById('service-duration').value = ""
        document.getElementById('service-price').value = ""
        document.getElementById('service-description').value = ""
        setButton(true)
    },
    [errors]
    );
    return { handleChange, values, handleSubmit, errors };
};


export default useForm2;