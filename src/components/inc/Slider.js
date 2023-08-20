import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slider1 from '../images/Homepage_Slider_Slide_1.jpg'
import slider2 from '../images/Homepage_Slider_Slide_2.jpg'
import slider3 from '../images/Homepage_Slider_Slide_4.jpg'
import slider4 from '../images/Homepage_Slider_Slide_5.jpg'
import slider5 from '../images/Homepage_Slider_Slide_6.jpg'

import video1 from '../images/hero-video.mp4'



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius:"50%", cursor:"pointer" }}
      onClick={onClick}
    />
  );
}




function VideoSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
      prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='container'>
      <Slider {...settings}>
          <div className='card border border-0 px-1' >
              <img src={slider1} className='w-100' />
            <div className='card-body'>
              <p> Almalfi 4 Seat Round Set</p>
            </div>
          </div>
          <div  className='card border border-0 px-1' >
            <img src={slider2} className='w-100' />
            <div className='card-body'>
              <p> Almalfi 4 Seat Round Set</p>
            </div>
          </div>
          <div  className='card border border-0 px-1'>
            <video src={video1} className='w-100' />
            <div className='card-body'>
              <p> Almalfi 4 Seat Round Set</p>
            </div>
          </div>
          <div  className='card border border-0 px-1'>
           <img src={slider3} className='w-100' />
              <div className='card-body'>
                  <p> Almalfi 4 Seat Round Set</p>
                </div>
          </div>
          <div  className='card border border-0 px-1'>
          <img src={slider4} className='w-100' />
          <div className='card-body'>
                  <p> Almalfi 4 Seat Round Set</p>
                </div>
          </div>
          <div  className='card border border-0 px-1'>
          <img src={slider5} className='w-100' />
          <div className='card-body'>
                  <p> Almalfi 4 Seat Round Set</p>
                </div>
          </div>
        </Slider>

    </div>
        
  )
}

export default VideoSlider