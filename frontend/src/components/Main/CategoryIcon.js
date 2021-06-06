import React from 'react'
import { Link } from 'react-router-dom';
import './Main.css';

export const CategoryIcon = (props) => {
 
    return(
        <div className='category-icon-container m-1'>
            <Link to={{pathname: "/categories", id: props.id}}>
                <img className='category-icon-img' src={props.img} 
                alt="category icon"/>
                </Link>
            <p className="text-center mt-2">{props.name}</p>
        </div>
    )
};