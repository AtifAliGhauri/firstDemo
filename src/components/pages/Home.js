import React from 'react'
import MainSlider from '../inc/MainSlider'
import slider1 from '../images/Homepage_Slider_Slide_1.jpg'
import slider2 from '../images/Homepage_Slider_Slide_2.jpg'
import slider3 from '../images/Homepage_Slider_Slide_4.jpg'
import slider4 from '../images/Homepage_Slider_Slide_5.jpg'
import slider5 from '../images/Homepage_Slider_Slide_6.jpg'
import Slider from '../inc/Slider'

function Home() {
  return (
    <div>
        <MainSlider />

        <section className='section bg-c-light'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 text-center'>
                    <span id="boot-icon" className="bi bi-key" style={{color: 'rgb(0, 0, 0)',fontSize: '30px', opacity: '0.3', border: 'solid rgb(255, 255, 255)',  borderRadius: '50%', backgroundColor: 'rgb(128, 128, 128)',padding: '10px'}}></span>
                    <br />
                    <br />
                    <h6>50+ YEARS OF GARDEN FURNITURE EXPERTISE</h6>
                    <p>Our reputation is built on our experience</p>
                </div>
                <div className='col-md-3 text-center'>
                <span id="boot-icon" className="bi bi-geo-alt" style={{color: 'rgb(0, 0, 0)',fontSize: '30px', opacity: '0.3', border: 'solid rgb(255, 255, 255)',  borderRadius: '50%', backgroundColor: 'rgb(128, 128, 128)',padding: '10px'}}></span>
                    <br />
                    <br />
                    <h6>NATIONWIDE AVAILABILITY</h6>
                    <p>Hartman is stocked in over 250 stores</p>
                </div>
                <div className='col-md-3 text-center'>
                <span id="boot-icon" className="bi bi-heart" style={{color: 'rgb(0, 0, 0)',fontSize: '30px', opacity: '0.3', border: 'solid rgb(255, 255, 255)',  borderRadius: '50%', backgroundColor: 'rgb(128, 128, 128)',padding: '10px'}}></span>
                    <br />
                    <br />
                    <h6>COMFORT. DESIGN. QUALITY.</h6>
                    <p>Built into all we do</p>
                </div>
                <div className='col-md-3 text-center'>
                <span id="boot-icon" className="bi bi-hand-thumbs-up" style={{color: 'rgb(0, 0, 0)',fontSize: '30px', opacity: '0.3', border: 'solid rgb(255, 255, 255)',  borderRadius: '50%', backgroundColor: 'rgb(128, 128, 128)',padding: '10px'}}></span>
                    <br />
                    <br />
                    <h6>TRUSTED BY YOU</h6>
                    <p>Guaranteed Quality</p>
                </div>
            </div>
        </div>
    </section>

     <section className='section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='main-heading'>Welcome to Hartman Outdoor Products</h3>
                    <p>
                    The 2023 collection of Hartman Garden Furniture has been mindfully developed with Comfort, Design and Quality at its heart.
                    Our outdoor spaces have become ever more important to us, to share special moments with our friends and family.
                    Hartman garden furniture collection offers a choice to suit all garden types. From rattan weave, contemporary aluminium furniture, or a cantilever parasol to provide shade during the summer months, there is something for everyone.
                    </p>
                </div>
            </div>
        </div>
     </section>

    {/* videos Section */}
    <section className='section'>
        <div className='container'>
            <div className='row'>
                <h3 className='main-heading'> Related Videos</h3>
            </div>
            <div className='col-md-12'>
                <Slider />
                
            </div>
        </div>
    </section>

    </div>
  )
}

export default Home