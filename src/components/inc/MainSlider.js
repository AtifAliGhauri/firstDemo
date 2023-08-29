import React from 'react'
import slider1 from '../images/Homepage_Slider_Slide_1.jpg'
import slider2 from '../images/Homepage_Slider_Slide_2.jpg'
import slider3 from '../images/Homepage_Slider_Slide_4.jpg'
import slider4 from '../images/Homepage_Slider_Slide_5.jpg'
import slider5 from '../images/Homepage_Slider_Slide_6.jpg'

function Slider() {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100 izo" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100 izo" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100 izo" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider4} className="d-block w-100 izo" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider5} className="d-block w-100 izo" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider