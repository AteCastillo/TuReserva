import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel' 

export class BootstrapCarousel extends Component {  
    
    render() {  
        return (  
            <div>
                 <div class='container-fluid' >  
                 <div className="row title">
                 
                 </div>
                 </div> 
                 <div /*className='container-fluid'*/ >  
                 <Carousel>  
                 <Carousel.Item style={{'height':"300px"}} >  
                 <img style={{'height':"300px"}}  
                className="d-block w-100" 
                src={'https://d2vj71og9gdu4k.cloudfront.net/WEB/banners/1611300239.jpg'}
                  alt= 'offer 1'/>
                </Carousel.Item  >  
                <Carousel.Item style={{'height':"300px"}}> 
                <img style={{'height':"300px"}} 
                className="d-block w-100"  
                src={'https://d2vj71og9gdu4k.cloudfront.net/WEB/banners/1610007148.jpg'} 
                alt= "offer 2"   />
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}}>
                <img style={{'height':"300px"}}
                className="d-block w-100" 
                src={'https://d2vj71og9gdu4k.cloudfront.net/WEB/banners/1581428272.jpg'}
                /* src={'assets/img/3.jpeg'}  */
                alt= "offer 3" />  

                </Carousel.Item>
                </Carousel>
                </div>
                </div>
        )
    }
}
export default BootstrapCarousel 