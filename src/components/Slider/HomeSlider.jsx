import React from 'react';
import Slider from "react-slick";
import './slider.css'

const HomeSlider = () => {
    const images = [
        "https://i.ibb.co/1Qv0257/Drawing1.jpg",
        "https://i.ibb.co/d0NzqC6/Drawing2.jpg",
        "https://i.ibb.co/njTrL55/background-Design1.jpg",
        "https://i.ibb.co/G2ZyjLf/background-Design2.jpg",
        "https://i.ibb.co/t37XKHW/digital-Painting1.jpg",
        "https://i.ibb.co/411hs65/digital-Painting2.jpg"
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: 2000
    };

    return (
        <>
            <section className="homeSlider">
                <div className="slider-container">
                    <Slider {...settings} className='home_slider_main'>
                        {images.map((image, index) => (
                            <div key={index} className="slide">
                                <img src={image} alt={`Slider ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                    <div className="overlay-text">
                        <form
                            action="https://formspree.io/f/xkndybka"
                            method="POST"
                            className="submit-banner-btn"
                        >
                            <h2 className='banner-heading'>My photoshop works - <br /> Drawing</h2>
                            <p>"My Creative works"</p>
                            <div className="btn-banner">
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSlider