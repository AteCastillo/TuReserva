//import Carousel from "react-multi-carousel";
//import "react-multi-carousel/lib/styles.css";
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import "./Partner.css"

/*
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
export const CarouselPartner = (props) => {
  return (
  <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container-partner"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-partner"
>
  {props.images.map((element) => (        
    <div className="img-carousel-container">
    <img src={element}/>
    </div>
  ))}
</Carousel>
  )
} 
*/
export const CarouselPartner = (props) =>{
const images = props.images.map((element) => ({
    src: `{element}`
  }));

  return (
    <Carousel images={images} />
  );
  };

