import React from 'react'
import {useHistory} from 'react-router-dom'

export const Steps = ({first, second, button}) =>
{
    let history = useHistory();
    const finish = () =>
    {
        history.push('/')
    }
    return (
        <>
        <div className="steps">
        <p className="elem-step" style={{backgroundColor:first}}>1</p>
        <p className="elem-step" style={{backgroundColor:second}}>2</p>
        </div>
        <div className='btn-step'>
        {button && (<button className="button-step" onClick={finish}> OK</button>)}
         </div>
        </>
    )
}