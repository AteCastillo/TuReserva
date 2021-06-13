import React, {useState, useEffect} from 'react';
import "./Order.css"
import { OrderInfo } from './OrderInfo';
import DateTimePicker from "./DateTimePicker";
import { useHistory } from "react-router-dom";


export const OrderMain = (props) => {
    const elems = props.location
    const [hour, setHour] = useState("")
    const [date, setDate] = useState(new Date())
    const [day, setDay] = useState(date.getDate())
    const [month, setMonth] = useState(date.getMonth())
    const [year, setYear] = useState(date.getFullYear())

    let history = useHistory()
    const handleClick = async () =>{
        const res = await fetch(`http://localhost:5200/orders`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount:elems.total / 10,
                    date:`${year}-${month}-${day} ${hour}`,
                    user_id: 'id-01',
                    partner_id: elems.partner,
                    services: elems.services
                })
            })
            if (res.status === 201){

                history.push('/')
            }
    }

    const hourPicked = (e) =>{
        const picked = document.getElementById(e.target.id)
        if (hour !== "")
        {
            const last_picked = document.getElementById(hour)
            last_picked.className = "timepicker-elem"
        }
        setHour(e.target.id)
        picked.className = "timepicker-elem checked-elem"
    } 

    const changeDate = (date) =>  setDate(date)

    useEffect(() => {
        setDay(date.getDate())
        setMonth(date.getMonth() + 1)
        setYear(date.getFullYear())
        console.log(day, month, year)
    }, [date])
    return(
        <div className="order-container">
         <div className="datetime-picker-container">
         <DateTimePicker changeDate={changeDate}
         className="datetime-picker" hourPicked={hourPicked}/>
         </div>
        <OrderInfo className="orderinfo-container" names={elems.names}
        quantity={elems.quantity} total={elems.total}
        prices={elems.prices} times={elems.times} handleClick={handleClick}/>
        </div>
        
        
    );
}