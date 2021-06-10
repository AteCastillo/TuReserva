import React from 'react'

export const OrderItem = ({time, price, name}) => {
    return (
        <div className='order-item'>
            <div className='name-time-order'>
            <p>{name}</p>
            <p className='time-order'><i class="far fa-clock"></i> {time}</p>
            </div>
            <p className='price-order'>$ {price}</p>
        </div>
    )
}