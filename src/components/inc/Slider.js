import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, marginTop:'-2.5rem', display: "block",color:'white', background: "black", borderRadius:"50%", cursor:"pointer" }}
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
        
  )
}

export default VideoSlider