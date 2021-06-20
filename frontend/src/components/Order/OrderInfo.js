import React, { useState } from 'react';
import { OrderItem } from './OrderItem';
import 'reactjs-popup/dist/index.css';

export const OrderInfo = ({names, handleClick,
    total, times,prices}) =>{

    return (
        <div className="orderinfo-container">
        <div>
            <br/>
            <br/>
        <h4 className="order-title"> Your reservations:</h4>
        {names.map((el, index) => (
         
            <OrderItem time={times[index]} price={prices[index]} 
            name={el}/>
        ))}
        </div>
        <div className="button-total">
        <p className="total-order">Total ${total / 10}</p>
        <button className='button-order' onClick={handleClick}>CONFIRM</button>
        </div>
        </div>
    )
}