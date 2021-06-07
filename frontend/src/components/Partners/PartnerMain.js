import React, {useEffect, useState} from 'react';
import {ServiceInfo} from "./ServiceInfo"
import {Reservation} from "./Reservation";

export const PartnerMain = (props) => {
    const [services, setServices] = useState([])
    const elems = props.location

    // Comunication with child component
    const [select, setSelect] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const contar = (cant) => setQuantity(quantity + cant)
    const add = (price, id) => {
        setTotal(total + price);
        contar(1)
        setSelect(select => [...select, id]);
    };
    const del = (price, id) => {
        const temp = [...select];
        const index = select.indexOf(id)
        temp.splice(index, 1);
        setTotal(total - price);
        contar(-1)
        setSelect(temp);
    };


    useEffect(
        () => {
            const getData = async () => {
               const res = await fetch(`http://localhost:5200/services/${elems.id}`);
                const json = await res.json();
                json.elements.forEach(async (el) => {
                    let service = {
                        name: el.name,
                        price: el.price,
                        time: el.time,
                        description: el.description,
                        id: el.id,
                    }
                    setServices((services) => [...services, service]);
                })
            }
            getData()
        }, []);
    return (
        <>
        <h2>Partner {elems.name}</h2>
        <p> address: {elems.address}</p>
        <p> Phone: {elems.phone}</p>
        <p> Description: {elems.description}</p>
        <div className='category-container'>
        {services.length === 0 ? (
            <h2>cargando</h2>
        ) : (
            services.map((el) => (
                <div>
                    <ServiceInfo name={el.name}
                    description={el.description}
                    time={el.time}
                    price={el.price}
                    id={el.id}
                    add={add}
                    del={del}
                    select={select}/>
                </div>
            )) 
        )}
    </div>
    {total !== 0 && <Reservation total={total} quantity={quantity}/>}
    </>
    )
}
