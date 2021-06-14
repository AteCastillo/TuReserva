import React from 'react'
import "./Order.css"

export const TimePicker = ({hourPicked}) => {
    const first_hours= ['9:00', '9:30', "10:00", "10:30", "11:00"]
    const second_hours= ['11:30', '12:00', "12:30", "13:00", "13:30"]
    const third_hours= ['14:00', '14:30', "15:00", "15:30", "16:00"]
    const fourth_hours= ['16:30', '17:00', "17:30", "18:00", "18:30"]
    
    return (
        <div className="timepicker-container">
            <div className="timepicker-line">
            {first_hours.map((el) => (
                <>
                <button id={el} onClick={hourPicked}
                className='timepicker-elem'>{el}</button>
                </>
            ))}
            </div>
            <div className="timepicker-line">
            {second_hours.map((el) => (
                <>
                <button id={el} onClick={hourPicked}
                className='timepicker-elem'>{el}</button>
                </>
            ))}
            </div>
            <div className="timepicker-line">
            {third_hours.map((el) => (
                <>
                <button id={el} onClick={hourPicked}
                className='timepicker-elem'>{el}</button>
                </>
            ))}
            </div>
            <div className="timepicker-line">
            {fourth_hours.map((el) => (
                <>
                <button id={el} onClick={hourPicked}
                className='timepicker-elem'>{el}</button>
                </>
            ))}
            </div>
        </div>
    )
}