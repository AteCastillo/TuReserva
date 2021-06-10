import React, {useEffect, useState} from 'react';
import {ServiceInfo} from "./ServiceInfo"
import {Reservation} from "./Reservation";
//import {CarouselPartner} from "./CarouselPartner";
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';
import "./Partner.css"

export const PartnerMain = (props) => {
    const [services, setServices] = useState([])
    const elems = props.location

    // Comunication with child component
    const [select, setSelect] = useState([])
    const [names, setNames] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const contar = (cant) => setQuantity(quantity + cant)
    const add = (price, id, name) => {
        setTotal(total + price);
        contar(1);
        setSelect(select => [...select, id]);
        setNames(names => [...names, name])
        document.getElementById(id).className = 'services-container checked';
    };
    const del = (price, id) => {
        const temp = [...select];
        const temp2 = [...names];
        const index = select.indexOf(id)
        temp.splice(index, 1);
        temp2.splice(index, 1);
        setTotal(total - price);
        contar(-1);
        setSelect(temp);
        setNames(temp2);
        const div = document.querySelector(id);
        document.getElementById(id).className = 'services-container';

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
        console.log(elems.images)
    return (
        <>
        <div className="partner-container">
            {/*<CarouselPartner images={elems.images}/>*/}
           
           
            {/*<ImageSlider slides={elems.images} />*/}
            <div className="partner-info">
            <h1 className="partner-name">{elems.name}</h1>
            <div className="partner-description">
            <p> {elems.description}</p>
            <p> <i class="fa fa-phone" aria-hidden="true"></i>   {elems.phone}</p>
            <p><i class="fas fa-map-marker-alt"></i>  {elems.address}</p>
            </div>
            </div>
            <div className='category-container'>
            {services.length === 0 ? (
                <h2>cargando</h2>
            ) : (
                services.map((el) => (
                        <ServiceInfo className="service"
                        name={el.name}
                        description={el.description}
                        time={el.time}
                        price={el.price}
                        id={el.id}
                        add={add}
                        del={del}
                        select={select}
                        />
                )) 
            )}
        </div>
  
    </div>
    {total !== 0 && <Reservation className="reservation" 
                        total={total} quantity={quantity}
                        services={select} names={names}/>}
    </>
    )
}
