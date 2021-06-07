import React, {useState} from 'react';


export const ServiceInfo = ({name, description, time,
    add, del, select, price, id}) => {
    /*const [select, setSelect] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const contar = (cant) => setQuantity(quantity + cant)
    const add = (price, id) => {
        setTotal(total + price);
        contar(1)
        setSelect(select => [...select, id]);
    };
    const del = (price, id) => {
        const temp = [...select];
        temp.splice(id, 1);
        setTotal(total - price);
        contar(-1)
        setSelect(temp);
    };*/
    console.log(select)
    return(
        <>
            <h2>{name}</h2>
            <p> {description}</p>
            <p>{time}</p>
            <p>{price}</p>
        
         {select.includes(id) && select.length > 0 ? (
            <button onClick={(e) => del(price, id)}> - </button>
        ) : (
            
            <button onClick={(e) => add(price, id)}> + </button>
        )}
        
        </>
    )
}