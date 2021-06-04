import React, {useEffect} from 'react';

export const Categories = (props) => {
    useEffect(
        () => {
            const getData = async () => {
                await fetch(`http://localhost:5200/partners/id-02`)
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                })
            }
            getData()    
            
        }
    )

    return (
        <h2>cualquier cosa</h2>
        )
    }