import React, {useState, useEffect} from 'react';
import { PartnerInfo } from './PartnerInfo';
import './Categories.css';

export const Categories = (props) => {
    const [partners, setPartners] = useState([])
    const id = props.location.id

    useEffect(
        () => {
            const getData = async () => {
               const res = await fetch(`http://localhost:5200/categories/${id}`);
               console.log(`http://localhost:5200/categories/${id}`)
                const json = await res.json();

                json.elements.forEach(async (el) => {
                     console.log(el)
                    let partner = {
                        name: el.name,
                        address: el.address,
                        phone: el.phone,
                        description: el.description,
                        id: el.id
                    };
                    setPartners((partners) => [...partners, partner]);
                })
               
            }
            getData()
        }, []);
        if (partners.length !== 0) {
            console.log(partners)
        }
    return (
    <div className='category-container'>
        {partners.length === 0 ? (
            <h2>cargando</h2>
        ) : (
            partners.map((el) => (
                <PartnerInfo name={el.name} 
                address={el.address} 
                phone={el.phone} 
                key={el.id}
                description={el.description}/>
            )) 
           
        )}
   </div>
  );
}