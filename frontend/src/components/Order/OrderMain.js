import React from 'react';
import { DateTimePicker } from './DateTimePicker';
import "./Order.css"
import { OrderInfo } from './OrderInfo';

export const OrderMain = (props) => {
    const elems = props.location
    return(
        <div className="order-container">
        <DateTimePicker className="datetime-container"/>
        <OrderInfo className="orderinfo-container" names={elems.names}
        quantity={elems.quantity} total={elems.total}
        prices={elems.prices} times={elems.times} services={elems.services} 
        partner={elems.partner}/>
        </div>
        
        
    );
}