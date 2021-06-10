import React from 'react';
import { OrderItem } from './OrderItem';
import { useHistory } from "react-router-dom";

export const OrderInfo = ({names, 
    services, total, quantity, times,prices, partner}) =>{
    let history = useHistory()
    const handleClick = async () =>{
        const res = await fetch(`http://localhost:5200/orders`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount:total,
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
        <button className='button-order' onClick={handleClick}>Reserve</button>
        </div>
    )
}