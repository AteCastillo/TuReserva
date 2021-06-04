import React, {useState, useEffect} from 'react';
import { PartnerInfo } from './PartnerInfo';

export const Categories = (props) => {
    const [partners, setPartners] = useState([])

    useEffect(
        () => {
            const getData = async () => {
               const res = await fetch(`http://localhost:5200/categories/id-01`);
                const json = await res.json();

                json.elements.forEach(async (el) => {
                    console.log(el);
                    let partner = {
                        name: el.name,
                        address: el.address,
                        phone: el.phone
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
        <>
        {partners.length === 0 ? (
            <h2>cargando</h2>
        ) : (
            partners.map((el) => (
                <PartnerInfo name={el.name} address={el.address} phone={el.phone}/>
            )) 
           
        )}
   
        
    </>
  );
}