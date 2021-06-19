import React, {useState, useEffect} from 'react';
import "./Order.css"
import { OrderInfo } from './OrderInfo';
import DateTimePicker from "./DateTimePicker";
import {useModal} from "../Modals/useModal"
import Modal from "../Modals/Modal"
//import {Login} from "../Login/Login"


export const OrderMain = (props) => {
    const elems = props.location
    const [hour, setHour] = useState("")
    const [date, setDate] = useState(new Date())
    const [day, setDay] = useState(date.getDate())
    const [month, setMonth] = useState(date.getMonth() + 1)
    const [year, setYear] = useState(date.getFullYear())
    // For Modal
    const [isOpenModal, openModal, closeModal] = useModal(false, null)
    /* [isOpenModal2, setIsOpenModal2] = useState(false)
    const openModal2 = () => setIsOpenModal2(true)
    const closeModal2 = () => setIsOpenModal2(false)
    const [isLogged, setIsLogged] = useState(false)

    if (localStorage.getItem('tureserva_token') !== null){
        setIsLogged(true)
    }*/
    
    const handleClick = async () =>{
        console.log(localStorage.getItem("tureserva_user"))
        const res = await fetch(`http://localhost:5200/orders`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount:elems.total / 10,
                    date:`${year}-${month}-${day} ${hour}`,
                    user_id: localStorage.getItem("tureserva_user"),
                    partner_id: elems.partner,
                    services: elems.services
                })
            })
            if (res.status === 201){

                openModal()
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
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Notification</h3>
        <p>Your reservation was made successfully</p>
        </Modal>
        {/*!isLogged && (
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <Login/>
        </Modal>
        )*/}
        </div>
        
        
    );
}