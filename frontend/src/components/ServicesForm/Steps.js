import React from 'react'

export const Steps = ({first, second, button}) =>
{
    return (
        <>
        <div className="steps">
        <p className="elem-step" style={{backgroundColor:first}}>1</p>
        <p className="elem-step" style={{backgroundColor:second}}>2</p>
        </div>
       
        </>
    )
}