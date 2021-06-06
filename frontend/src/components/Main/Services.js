import React from 'react'
import BootstrapCarousel from './BootstrapCarousel';
import {CategoriesMain} from './CategoriesMain'
import "./Main.css"

export const Services = () => {
    return (
    <div className="main-services">
        <BootstrapCarousel/>
        <CategoriesMain/>
    </div>
)
}
