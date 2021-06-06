import React from 'react'
import "./Main.css"
import {CategoryIcon} from './CategoryIcon' 
import clean from '../../images/clean_icon.png'
import massage from "../../images/masagge_icon.png"
import stetic from '../../images/stetic_icon.png'



export const CategoriesMain = () => {
    return (
        <div className="main-categories">
        <CategoryIcon id="id-01" name="Stetic" img={stetic}/>
        <CategoryIcon id="id-02" name="Massages" img={massage}/>
        <CategoryIcon id="id-3" name="Clean" img={clean}/>
        </div>
    );
};