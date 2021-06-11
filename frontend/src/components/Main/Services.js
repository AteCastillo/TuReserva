import React from 'react'
import {CategoriesMain} from './CategoriesMain'
import BootstrapCarousel from './BootstrapCarousel' 

import "./Main.css"

export const Services = () => {
    return (
    <div className="main-services">
        <BootstrapCarousel/>
        <CategoriesMain/>

    </div>
)
}
