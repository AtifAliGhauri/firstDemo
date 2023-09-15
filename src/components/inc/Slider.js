import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, marginTop:'0.5rem', display: "block",color:'white', background: "black", borderRadius:"50%", cursor:"pointer" }}
      onClick={onClick}
    />
  );
}




function VideoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
      prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
  <>
    <div className='container' style={{maxWidth:'max-content'}}>
      <div className='' data-margin="20" data-pagi="true" data-autoplay="5000" data-items-xs="1" data-items-sm="2"
          data-items-md="3" data-items-lg="4" data-loop="true">
        <Slider {...settings}>
          <div className='card border border-0 px-1' >
              <iframe className='w-100' src="https://www.youtube.com/embed/AMeKi_198HU?si=Q91DhFi1dVu_xdek">
             </iframe>
            <div className='card-body'>
              <p>Singapore assembly guide</p>
            </div>
          </div>
          <div  className='card border border-0 px-1' >
            <iframe className='w-100' src="https://www.youtube.com/embed/qj0wX3Xs3u0?si=wdDk2XqffMIupsys" title="YouTube video player">
            </iframe>
            <div className='card-body'>
              <p> Berkeley Assembly</p>
            </div>
          </div>
          <div  className='card border border-0 px-1'>
            <iframe className='w-100' src="https://www.youtube.com/embed/sncYRjvnx6k?si=ZIn-3dh2i5IgLfAT" title="YouTube video player"></iframe>
            <div className='card-body'>
              <p> Vienna dining</p>
            </div>
          </div>
          <div  className='card border border-0 px-1'>
          <iframe className='w-100' src="https://www.youtube.com/embed/tmFmL1BXqWI?si=ZkBc6oKnTd61gaP_" title="YouTube video player"></iframe>
              <div className='card-body'>
                  <p> Almalfi 4 Seat Round Set</p>
                </div>
          </div>
          <div  className='card border border-0 px-1'>
          <iframe className='w-100' src="https://www.youtube.com/embed/3fM4VpJdXGo?si=p_BlrUo4TfMTAFa2" title="YouTube video player"></iframe>
          <div className='card-body'>
                  <p> Caring for your cast aluminium garden furniture</p>
                </div>
          </div>
          <div  className='card border border-0 px-1'>
          <iframe className='w-100' src="https://www.youtube.com/embed/12tTN1FDfC0?si=6rsmYCtF2Qiwf0DG" title="YouTube video player"></iframe>
          <div className='card-body'>
                  <p> Caribbean Cantilever </p>
                </div>
          </div>
        </Slider>
      </div>
    </div>
  </>     
  )
}

export default VideoSlider