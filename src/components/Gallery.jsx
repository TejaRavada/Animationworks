import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './styles.css';

// Convert YouTube URLs to embed URLs
const convertToEmbedURL = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

const videos = {
  CharaterAnimation: [

    'https://www.youtube.com/watch?v=asyMQ26ttuI&t=45s',
    'https://www.youtube.com/watch?v=meCXHfkQqvQ',
  ],
  Elearning: [
    'https://www.youtube.com/watch?v=IyoR3p1XauI',
    'https://www.youtube.com/watch?v=0poDagiMn3E',
    'https://www.youtube.com/watch?v=4yfAY_hUJ2E',
    'https://www.youtube.com/watch?v=hS2lEUMJPFg',
    'https://www.youtube.com/watch?v=Yw6GCuxxG6s'
  ],
  Animation: [
    'https://www.youtube.com/watch?v=h6v4A9nn8FY',
    'https://www.youtube.com/watch?v=Z9mtK9yZM5M',
    'https://www.youtube.com/watch?v=StBu4rRLVcQ',
    'https://www.youtube.com/watch?v=lafdbXQFjQc',
    'https://www.youtube.com/watch?v=atPH5QhVyic&t=18s',
    'https://www.youtube.com/watch?v=RCuPk-d8m_A',
    'https://www.youtube.com/watch?v=XowbV_U3-TQ',
  ],
};

const backgrounds = {
  CharaterAnimation: "https://i.ibb.co/55R08rn/background-Design10.jpg",
  Elearning: "https://i.ibb.co/jZDgwR5/background-Design18.jpg",
  Animation: "https://i.ibb.co/7RVzgL0/digital-Painting16.jpg",
};

const descriptions = {
  CharaterAnimation: [
    "Created custom illustrations and animations for various clients, focusing on content drawing, perspective building, face expressions, and animal illustrations.",
    "Developed interior backgrounds for animated projects, ensuring a cohesive and visually appealing environment.",
    "Collaborated with clients to understand their vision and delivered high-quality artwork that met their requirements.",
    "Worked on multiple animation projects, creating detailed and dynamic interior backgrounds.",
    "Utilized expertise in perspective building to enhance the visual appeal and depth of animated scenes.",
    "Developed expressive character animations, capturing a wide range of emotions and movements.",
    "Worked closely with the animation team to ensure characters and backgrounds were cohesive and visually appealing."
  ],
  Elearning: [
    "Innovative and passionate digital painter with a keen eye for color, composition, and detail. Experienced in creating high-quality digital art for various applications, including gaming, film, and advertising. Adept at working collaboratively in a team environment and managing multiple projects to meet tight deadlines. Committed to continuously improving skills and staying updated with the latest industry trends and technologies.",
    "Led a team of digital artists in creating high-quality visual assets for a variety of projects, including video games, animations, and marketing campaigns.",
    "Developed and refined digital painting techniques to improve efficiency and output quality.",
    "Managed all aspects of the freelance business, from client communication to project management."

  ],
  Animation: [
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
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const openModal = (video) => {
    setSelectedVideo(convertToEmbedURL(video));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const displayVideos = videos[type] || [];
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
            {displayVideos.map((video, index) => (
              <div key={index} className="video-thumbnail" onClick={() => openModal(video)}>
                <img
                  src={`https://img.youtube.com/vi/${video.split('v=')[1]?.split('&')[0]}/hqdefault.jpg`}
                  alt={`video-thumbnail-${index}`}
                />
              </div>
            ))}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                top: '52%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                // marginRight: '-50%',
                // transform: 'translate(-50%, -50%)',
                width: '70%',
                height: '80%',  // Ensure the modal is tall enough to fit the video
                padding: 0,
                overflow: 'hidden',
              },
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
              }
            }}
          >
            {selectedVideo && (
              <div className="video-modal">
                <div className="video-container">
                  <iframe
                    src={selectedVideo}
                    title="Selected Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Gallery;
