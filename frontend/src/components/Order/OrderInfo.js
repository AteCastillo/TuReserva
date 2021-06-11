import React, { useState } from 'react';
import { OrderItem } from './OrderItem';
import { useHistory } from "react-router-dom";
import 'reactjs-popup/dist/index.css';

export const OrderInfo = ({names, 
    services, total, times,prices, partner}) =>{
    let history = useHistory()
    const handleClick = async () =>{
        const res = await fetch(`http://localhost:5200/orders`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount:total / 10,
                    date:'2020-02-02 10:30:00',
                    user_id: 'id-01',
                    partner_id: partner,
                    services: services
                })
            })
            if (res.status === 201){

                history.push('/')
            }
    }
    return (
        <div className="orderinfo-container">
        <div>
        <h1 className="order-title"> Reservation Information</h1>
        {names.map((el, index) => (
         
            <OrderItem time={times[index]} price={prices[index]} 
            name={el}/>
        ))}
        </div>
        <div className="button-total">
        <p className="total-order">Total ${total / 10}</p>
        <button className='button-order' onClick={handleClick}>Reserve</button>
        </div>
        </div>
    )
}