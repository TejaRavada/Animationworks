import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

const ImageSlider = ({ images, initialSlide  }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: initialSlide,
  };

  return (
    <Slider {...settings} style={{ height: '100%' }}>
      {images.map((image, index) => (
        <div key={index} style={{ height: '100%' }}>
          <img src={image} alt={`Slider ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', right: '10px' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', left: '10px' }}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
