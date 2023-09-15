import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

function About() {
  return (
    <>
        <section className='page-title-mini'>
          <div className='container-fluid px-5 clearfix'>
            <h1>Hartman Stockist</h1>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link>Home</Link></li>
              <li className='breadcrumb-item active'><Link>About Us</Link></li>
            </ol>
          </div>
        </section>

      <div style={{marginTop:'0'}}>
        <img alt='' src='https://hartmanuk.co.uk/assets/base/img/content/1920x1080/about_us_header_1920x540.jpg' style={{maxWidth:'100%'}} />
      </div>

      <div className='c-content-box c-bg-white' style={{minHeight:'10px'}}>
        <div className='container'>
            <div className=' box'  style={{minHeight:'40px'}}>
                <h1 className='c-line-height-30 h1'>Hartman Garden Furniture is based in Telford, Shropshire.</h1>
            </div>
        </div>
      </div>

      <div className='c-content-box c-size-sm'>
        <div className='container'>
            <div className='c-content-bar-2 c-opt-1'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p className='c-font-gray-3'>
                            
								Enjoy the summer with Hartman! Beautiful weather outside invites us to live life to its fullest, to get out in the great outdoors and enjoy a party or two. Everyone can recall special outdoor moments. Our gardens are a place for social gatherings with family, loved ones or friends, with snacks, drinks and a nice chat. That is why at Hartman we believe our furniture brings atmosphere into your garden; creating pleasure and guaranteeing the ultimate garden experience.
							
                        </p>

                        <p className='c-font-gray-3'>
                            
								
                                Established over 50 years ago, Hartman is experienced in producing beautiful garden furniture for exceptional garden spaces. Globally headquartered in Enschede, The Netherlands with sales offices here in the UK as well as Belgium, Germany, Czech Republic, Hartman is committed to produce products that provide comfort, design and quality.
							
                        </p>
                        <div className=' box'  style={{minHeight:'40px'}}>
                            <h1 className='c-line-height-30 h1'>Comfort</h1>
                        </div>
                        <p className='c-font-gray-3'>
                            
							Enjoying your outdoor space should not come at the expense of comfort. Here at Hartman we ensure comfort is at the forefront of all new product development. Whether it's a dining set for your al fresco moments or casual dining for catching up with friends with a glass of wine, you can be sure to feel comfortable all day long with your Hartman Furniture.
							
                        </p>

                        <h1 className='c-font-bold'>Design</h1>
                        <p className='c-font-gray-3'>
                            

                        Innovation is a crucial element to Hartman furniture, developing original garden furniture with stunning design features. From gas fire pits for the chillier evenings, to multi-function dining sets for your parties. Hartman leads with exciting design features for your outdoor spaces.
														
                        </p>
                        <div className=' box'  style={{minHeight:'40px'}}>
                            <h1 className='c-line-height-30 h1'>Quality</h1>
                        </div>
                        
                        <p className='c-font-gray-3'>
                 
                        With over 50 years' experience, Hartman knows better than anyone how to make beautiful garden furniture that is durable and at the highest quality. Developing unique pieces that are durable and weather resistant, from the framework to the fabric, your Hartman furniture will remain stunning for years to come.
																					
                        </p>

                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='c-content-box c-bg-white'>
        <div className='container'>
              <div className=' box'  style={{minHeight:'40px'}}>
                  <h1 className='c-line-height-30 h1'>Hartman globally is headquartered in Enschede (the Netherlands) with sales offices here in the UK as well as Belgium, Germany and the Czech Republic.</h1>
              </div>
        </div>
      </div>



    </>
  )
}

export default About