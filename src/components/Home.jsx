import React from 'react';
import { Link } from 'react-router-dom';

import HomeSlider from './Slider/HomeSlider';

const images = {
  drawing: [
    
    "https://i.ibb.co/1Qv0257/Drawing1.jpg",
    "https://i.ibb.co/d0NzqC6/Drawing2.jpg",
    "https://i.ibb.co/sqdmG5J/Drawing3.jpg",
    "https://i.ibb.co/rGv8ZZh/Drawing4.jpg",
    "https://i.ibb.co/R0FXQqh/Drawing5.jpg",
    "https://i.ibb.co/MgRQQ8W/Drawing6.jpg"
      ],
      digitalPainting: [
    "https://i.ibb.co/njTrL55/background-Design1.jpg",
    "https://i.ibb.co/G2ZyjLf/background-Design2.jpg",
    "https://i.ibb.co/55R08rn/background-Design3.jpg",
    "https://i.ibb.co/1JfyTWh/background-Design4.jpg",
    "https://i.ibb.co/9Wpys7K/background-Design5.jpg",
    "https://i.ibb.co/fGQM2W3/background-Design6.jpg"
      ],
      backgroundDesign: [
    "https://i.ibb.co/t37XKHW/digital-Painting1.jpg",
    "https://i.ibb.co/411hs65/digital-Painting2.jpg",
    "https://i.ibb.co/LtfWq9q/digital-Painting3.jpg",
    "https://i.ibb.co/k1HJ5Tr/digital-Painting4.jpg",
    "https://i.ibb.co/cD6VNYx/digital-Painting5.jpg",
    "https://i.ibb.co/HrXY94x/digital-Painting6.jpg"
      ],
};

const Home = () => {
  return (
    <>
      <HomeSlider />
      <div className='mt-3 container'>
        <h1 className='hding'>Welcome to my Photoshop gallery</h1>
        <div className="gallery-row mt-5 mb-3">

          <h2 className='sub-hd'>Drawing</h2>

          <div className="imgs">
            {images.drawing.slice(0, 6).map((image, index) => (
              <img key={index} src={image} alt={`drawing-${index}`} />
            ))}
          </div>

          <div className="button">
            <Link to="/drawing" className='link_Acc'>Click More</Link>
          </div>

        </div>

        <div className="gallery-row mt-3 mb-3">
          <h2 className='sub-hd'>Digital Painting</h2>

          <div className="imgs">
            {images.digitalPainting.slice(0, 6).map((image, index) => (
              <img key={index} src={image} alt={`digitalPainting-${index}`} />
            ))}
          </div>
          <div className="button">
            <Link to="/digital-painting" className='link_Acc'>Click More</Link>
          </div>

        </div>

        <div className="gallery-row mt-3 mb-3">
          <h2 className='sub-hd'>Background Design</h2>

          <div className="imgs">
            {images.backgroundDesign.slice(0, 6).map((image, index) => (
              <img key={index} src={image} alt={`backgroundDesign-${index}`} />
            ))}
          </div>
          <div className="button">
            <Link to="/background-design" className='link_Acc'>Click More</Link>
          </div>

        </div>
      </div>
    </>

  );
};

export default Home;
