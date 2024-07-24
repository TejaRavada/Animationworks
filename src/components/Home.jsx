import React from 'react';
import { Link } from 'react-router-dom';

import HomeSlider from './Slider/HomeSlider';

const convertToThumbnailURL = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0];
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
};

const images = {
  CharaterAnimation: [

    'https://www.youtube.com/watch?v=asyMQ26ttuI&t=45s',
    'https://www.youtube.com/watch?v=meCXHfkQqvQ',
  ],
  Elearning: [
    'https://www.youtube.com/watch?v=IyoR3p1XauI',
    'https://www.youtube.com/watch?v=0poDagiMn3E',
    'https://www.youtube.com/watch?v=hS2lEUMJPFg',
    'https://www.youtube.com/watch?v=Yw6GCuxxG6s'
  ],
  Animation: [
    'https://www.youtube.com/watch?v=h6v4A9nn8FY',
    'https://www.youtube.com/watch?v=Z9mtK9yZM5M',
    'https://www.youtube.com/watch?v=RCuPk-d8m_A',
    'https://www.youtube.com/watch?v=XowbV_U3-TQ',
  ],
};

const Home = () => {
  return (
    <>
      <HomeSlider />
      <div className='mt-3 container'>
        <h1 className='hding'>Welcome to my Photoshop gallery</h1>

        <div className="gallery-row mt-5 mb-3">

          <div className="gallery">
            <h2 className='sub-hd'>CharaterAnimation</h2>
          </div>


          <div className="imgs">
            {images.CharaterAnimation.slice(0, 6).map((image, index) => (
              <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                <img src={convertToThumbnailURL(image)} alt={`CharaterAnimation-${index}`} />
              </a>
            ))}
          </div>

          <div className="button">
            <Link to="/CharaterAnimation" className='link_Acc'>Click More</Link>
          </div>

        </div>

        <div className="gallery-row mt-3 mb-3">

          <div className="gallery">
            <h2 className='sub-hd'>Elearning</h2>
          </div>

          <div className="imgs">
            {images.Elearning.slice(0, 6).map((image, index) => (
              <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                <img src={convertToThumbnailURL(image)} alt={`Elearning-${index}`} />
              </a>
            ))}
          </div>

          <div className="button">
            <Link to="/Elearning" className='link_Acc'>Click More</Link>
          </div>

        </div>

        <div className="gallery-row mt-3 mb-3">

          <h2 className='sub-hd'>Animation</h2>

          <div className="imgs">
            {images.Animation.slice(0, 6).map((image, index) => (
              <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                <img src={convertToThumbnailURL(image)} alt={`Animation-${index}`} />
              </a>
            ))}
          </div>
          <div className="button">
            <Link to="/Animation" className='link_Acc'>Click More</Link>
          </div>

        </div>
      </div>
    </>

  );
};

export default Home;
