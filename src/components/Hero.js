// Hero.js
import React from 'react';
import Slider from 'react-slick';
import "../Styles/Hero.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Using image URLs from the internet
  const images = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
    "https://via.placeholder.com/800x400.png?text=Slide+4",
    "https://via.placeholder.com/800x400.png?text=Slide+5",
  ];

  return (
    <div className="hero">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={image} alt={`Slide ${index + 1}`} />
            {index === 0 && (
              <div className="hero-text">
                <h1>Welcome to Kasungu Community Radio</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
