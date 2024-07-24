import React, { useState } from 'react';
import Modal from 'react-modal';
import ImageSlider from './ImageSlider';
import './styles.css';

const images = {

  drawing: [
    
"https://i.ibb.co/1Qv0257/Drawing1.jpg",
"https://i.ibb.co/d0NzqC6/Drawing2.jpg",
"https://i.ibb.co/sqdmG5J/Drawing3.jpg",
"https://i.ibb.co/rGv8ZZh/Drawing4.jpg",
"https://i.ibb.co/R0FXQqh/Drawing5.jpg",
"https://i.ibb.co/MgRQQ8W/Drawing6.jpg",
"https://i.ibb.co/vjgsBGk/Drawing7.jpg",
"https://i.ibb.co/jvkMnYL/Drawing8.jpg",
"https://i.ibb.co/8xPmv5s/Drawing9.jpg",
"https://i.ibb.co/XpZM4gW/Drawing10.jpg",
"https://i.ibb.co/gdBYp1b/Drawing11.jpg",
"https://i.ibb.co/rsLD6cK/Drawing12.jpg",
"https://i.ibb.co/LpH2g4G/Drawing13.jpg",
"https://i.ibb.co/jgPs7Vt/Drawing14.jpg",
"https://i.ibb.co/88C73y3/Drawing15.jpg",
"https://i.ibb.co/4F8Ln2w/Drawing16.jpg",
"https://i.ibb.co/cytxwRj/Drawing17.jpg",
"https://i.ibb.co/hRfg422/Drawing18.jpg"
  ],
  digitalPainting: [
"https://i.ibb.co/njTrL55/background-Design1.jpg",
"https://i.ibb.co/G2ZyjLf/background-Design2.jpg",
"https://i.ibb.co/55R08rn/background-Design3.jpg",
"https://i.ibb.co/1JfyTWh/background-Design4.jpg",
"https://i.ibb.co/9Wpys7K/background-Design5.jpg",
"https://i.ibb.co/fGQM2W3/background-Design6.jpg",
"https://i.ibb.co/JddJ17P/background-Design7.jpg",
"https://i.ibb.co/9TSzc2c/background-Design8.jpg",
"https://i.ibb.co/XFnmJb3/background-Design9.jpg",
"https://i.ibb.co/3WBzKHq/background-Design10.jpg",
"https://i.ibb.co/jZDgwR5/background-Design11.jpg",
"https://i.ibb.co/Wc7TFLt/background-Design12.jpg",
"https://i.ibb.co/rHLSj8F/background-Design13.jpg",
"https://i.ibb.co/H7ZDV62/background-Design14.jpg",
"https://i.ibb.co/XCwG6Df/background-Design15.jpg",
"https://i.ibb.co/ZgJhV5x/background-Design16.jpg",
"https://i.ibb.co/JBRv7kc/background-Design17.jpg"
  ],
  backgroundDesign: [
"https://i.ibb.co/t37XKHW/digital-Painting1.jpg",
"https://i.ibb.co/411hs65/digital-Painting2.jpg",
"https://i.ibb.co/LtfWq9q/digital-Painting3.jpg",
"https://i.ibb.co/k1HJ5Tr/digital-Painting4.jpg",
"https://i.ibb.co/cD6VNYx/digital-Painting5.jpg",
"https://i.ibb.co/HrXY94x/digital-Painting6.jpg",
"https://i.ibb.co/RHdS5VR/digital-Painting7.jpg",
"https://i.ibb.co/jMNX3Q9/digital-Painting8.jpg",
"https://i.ibb.co/Tk3pLLC/digital-Painting9.jpg",
"https://i.ibb.co/kJFGtvg/digital-Painting10.jpg",
"https://i.ibb.co/TWnJcpP/digital-Painting11.jpg",
"https://i.ibb.co/wLLN261/digital-Painting12.jpg",
"https://i.ibb.co/1RhvnWJ/digital-Painting13.jpg",
"https://i.ibb.co/LdMxLfQ/digital-Painting14.jpg",
"https://i.ibb.co/ZSVWy9p/digital-Painting15.jpg",
"https://i.ibb.co/VqgpVQ5/digital-Painting16.jpg",
"https://i.ibb.co/12FVXpq/digital-Painting17.jpg",
"https://i.ibb.co/bWsF2T9/digital-Painting18.jpg",
"https://i.ibb.co/5Krk7BT/digital-Painting19.jpg",
"https://i.ibb.co/6NHrvbt/digital-Painting20.jpg",
"https://i.ibb.co/pLHh1gh/digital-Painting21.jpg",
"https://i.ibb.co/k3hNpvT/digital-Painting22.jpg",
"https://i.ibb.co/rm6WBhv/digital-Painting23.jpg",
"https://i.ibb.co/0ffxV1K/digital-Painting24.jpg",
"https://i.ibb.co/GPpK7sB/digital-Painting25.jpg",
"https://i.ibb.co/LnHykvm/digital-Painting26.jpg",
"https://i.ibb.co/db0jvzF/digital-Painting27.jpg",
"https://i.ibb.co/7RVzgL0/digital-Painting28.jpg",
"https://i.ibb.co/D5bkKpc/digital-Painting29.jpg",
"https://i.ibb.co/1sx3bSf/digital-Painting30.jpg"
  ],
};

const backgrounds = {
  drawing: "https://i.ibb.co/55R08rn/background-Design3.jpg",
  digitalPainting: "https://i.ibb.co/GPpK7sB/digital-Painting25.jpg",
  backgroundDesign: "https://i.ibb.co/7RVzgL0/digital-Painting28.jpg",
};

const descriptions = {
  drawing: [
    "Created custom illustrations and animations for various clients, focusing on content drawing, perspective building, face expressions, and animal illustrations.",
    "Developed interior backgrounds for animated projects, ensuring a cohesive and visually appealing environment.",
    "Collaborated with clients to understand their vision and delivered high-quality artwork that met their requirements.",
    "Worked on multiple animation projects, creating detailed and dynamic interior backgrounds.",
    "Utilized expertise in perspective building to enhance the visual appeal and depth of animated scenes.",
    "Developed expressive character animations, capturing a wide range of emotions and movements.",
    "Worked closely with the animation team to ensure characters and backgrounds were cohesive and visually appealing."
  ],
  digitalPainting: [
    "Innovative and passionate digital painter with a keen eye for color, composition, and detail. Experienced in creating high-quality digital art for various applications, including gaming, film, and advertising. Adept at working collaboratively in a team environment and managing multiple projects to meet tight deadlines. Committed to continuously improving skills and staying updated with the latest industry trends and technologies.",
    "Led a team of digital artists in creating high-quality visual assets for a variety of projects, including video games, animations, and marketing campaigns.",
    "Developed and refined digital painting techniques to improve efficiency and output quality.",
    "Managed all aspects of the freelance business, from client communication to project management."

  ],
  backgroundDesign: [
    "Creative and detail-oriented background designer with extensive experience in creating visually compelling environments for animations, games, and other media. Skilled in using various digital tools and techniques to produce high-quality background designs that enhance storytelling and immersive experiences. Strong ability to collaborate with teams and bring imaginative worlds to life.",
    "Expertise in designing and creating detailed and immersive background art for animations, games, and other visual media.",
    "Skilled in using digital painting tools to create high-resolution background designs.",
    "Exceptional attention to detail, ensuring high-quality and polished final backgrounds.",
    "Adobe Photoshop, Corel Painter, Autodesk SketchBook, Procreate, and other digital illustration tools.",
    "Strong ability to conceptualize and illustrate background scenes that support the narrative and visual style of a project."
  ]
};

const formatTitle = (title) => {
  return title.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
};

const Gallery = ({ type }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setInitialSlide(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const displayImages = images[type] || [];
  const backgroundImage = backgrounds[type] || '';
  const description = descriptions[type] || '';

  return (
    <>
      <div className="image" style={{ '--background-image': `url(${backgroundImage})` }}>
        <p className='banner-heading'>My Works</p>
        <div className="image-btn"><button className='outline-btn'>{formatTitle(type)}</button></div>
      </div>

      <div className="container">
        <div className='modenimages'>

          <h2 className='sub-hd'>{formatTitle(type)}</h2>
          <div className="text">
            <ul>
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          <h2 className='sub-hd'>Gallery</h2>
          <div className="gallery-row gallery">
            {displayImages.map((image, index) => (
              <img key={index} src={image} alt={`${type}-${index}`} onClick={() => openModal(image, index)} />
            ))}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '70%',
                padding: 0,
                overflow: 'hidden',
              },
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
              }
            }}
          >
            {selectedImage && <ImageSlider selectedImage={selectedImage} images={displayImages} initialSlide={initialSlide} />}
          </Modal>
        </div>
      </div>
    </>

  );
};

export default Gallery;
