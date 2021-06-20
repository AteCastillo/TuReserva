import React, {useEffect, useState} from 'react';
import {ServiceInfo} from "./ServiceInfo"
import {Reservation} from "./Reservation";
import "./Partner.css"
import { DiscussionEmbed } from "disqus-react"

export const PartnerMain = (props) => {
    const [services, setServices] = useState([])
    const elems = props.location
    // Comunication with child component
    const [select, setSelect] = useState([])
    const [names, setNames] = useState([])
    const [times, setTimes] = useState([])
    const [prices, setPrices] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)
    //Disqus Config
    const disqusShortname = "comments-react"
    const disqusConfig = {
        identifier:elems.id,
        title: elems.name,
        url: "http://127.0.0.1:3000/partners" +  elems.id,
        language: "es_MX"
    }
    const contar = (cant) => setQuantity(quantity + cant)
    const add = (price, id, name, time) => {
        setTotal(total + price);
        contar(1);
        setSelect(select => [...select, id]);
        setNames(names => [...names, name])
        setPrices(prices => [...prices, price]);
        setTimes(times => [...times, time])
        document.getElementById(id).className = 'services-container checked';
    };
    const del = (price, id) => {
        const temp = [...select];
        const temp2 = [...names];
        const temp3 = [...prices]
        const temp4 = [...times];
        const index = select.indexOf(id)
        temp.splice(index, 1);
        temp2.splice(index, 1);
        temp3.splice(index, 1);
        temp4.splice(index, 1);
        setTotal(total - price);
        contar(-1);
        setSelect(temp);
        setNames(temp2);
        setPrices(temp3);
        setTimes(temp4);


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
        <div className="partner-container">
            <h1 className="partner-name">{elems.name}</h1>
            <div className='container'>
                <img className='imgPartner1' src={`${elems.images[0]}`}/>
                <img className='imgPartner' src={`${elems.images[1]}`}/>
                <img className='imgPartner' src={`${elems.images[2]}`}/>
            </div>
            <div className="partner-info">
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
                        services={select} names={names}
                        times={times} prices={prices} 
                        partner={elems.id}/>}
     <DiscussionEmbed shortname={disqusShortname}
      config={disqusConfig}/>
    </>

    )
}
