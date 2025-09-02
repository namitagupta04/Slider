import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const [slider, setSlider] = useState(
    [
    {img: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {img: 'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {img: 'https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {img: 'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {img: 'https://images.pexels.com/photos/2599247/pexels-photo-2599247.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {img: 'https://images.pexels.com/photos/2187419/pexels-photo-2187419.jpeg?auto=compress&cs=tinysrgb&h=350'},
    
  ])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: "linear"
  };
  return (
    <div className="slider-container" style={{width: "90%",margin: "auto", marginTop:"200px"}}>
      <Slider {...settings}>
        {slider.map((slide)=> <div key={slide}>
          <img src={slide.img} alt="" style={{height:"250px",width: '300px', margin:'auto', border: "3px solid yellow", borderRadius: "10px"}} />
        </div>)}
      </Slider>
    </div>
  );
}

export default AutoPlay;
