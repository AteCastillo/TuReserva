import React from 'react';
import { DatetimePicker } from './DatetimePicker2';
import "./Order.css"
import { OrderInfo } from './OrderInfo';

export const OrderMain = (props) => {
    const elems = props.location
    return(
        <div className="order-container">
        <DatetimePicker/>
        <OrderInfo className="orderinfo-container" names={elems.names}
        quantity={elems.quantity} total={elems.total}
        prices={elems.prices} times={elems.times} services={elems.services} 
        partner={elems.partner}/>
        </div>
        
        
    );
}