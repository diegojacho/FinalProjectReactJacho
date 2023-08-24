import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function HeroCarousel () {
  const carouselImages = ['herocarousel1.webp','herocarousel3.jpg','herocarousel4.png'
  ];

  const carouselItemStyle = {height: "clamp(200px,50vw,500px)"
  };

  const carouselImageStyle = { objectFit:"contain", height: '100%', width: '100%'
  };

  return (
    <>
      <Carousel style={carouselItemStyle}>
        {carouselImages.map((image, index) => (
          <Carousel.Item className="w-100" key={index} style={carouselItemStyle}>
            <img src={image} className="d-flex justify-content-center align-items-center" style={carouselImageStyle} alt={`Carousel ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};


