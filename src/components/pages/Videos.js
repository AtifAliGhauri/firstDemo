import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
function Videos() {
  return (
    <>
         <section className='page-title-mini'>
          <div className='container-fluid px-5 clearfix'>
            <h1>To get the best from your Hartman Furniture investment we have put together a
						collection of videos showing you how keep them in tip top condition.</h1>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link>Home</Link></li>
              <li className='breadcrumb-item active'><Link>Videos</Link></li>
            </ol>
          </div>
         </section>

         <div className='c-content-box c-size-md'>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5'>
                <div className='fluid-width-video-wrapper' style={{paddingTop: '56.25%'}}>
                  <iframe className='imgFrame' src='//www.youtube.com/embed/LoLcCj7IXyA?rel=0' frameborder="0"></iframe>
                </div>
                <div className='product-title cut-text' >  
					          	Caring for your cast aluminium garden furniture with David Domoney
                  </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5'>
                <div className='fluid-width-video-wrapper' style={{paddingTop: '56.25%'}}>
                  <iframe className='imgFrame' src='//www.youtube.com/embed/LoLcCj7IXyA?rel=0'></iframe>   
                </div>
                <div className='product-title cut-text'>  
				          		Caring for wooden garden furniture with David Domoney
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5'>
                <div className='fluid-width-video-wrapper' style={{paddingTop: '56.25%'}}>
                  <iframe className='imgFrame' src='//www.youtube.com/embed/LoLcCj7IXyA?rel=0'></iframe>
                </div>
                <div className='product-title cut-text'>  
				          		Caring for wooden garden furniture with David Domoney
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5'>
                <div className='fluid-width-video-wrapper' style={{paddingTop: '56.25%'}}>
                  <iframe className='imgFrame' src='//www.youtube.com/embed/LoLcCj7IXyA?rel=0'></iframe>
                </div>
                <div className='product-title cut-text'>  
				          		Caring for wooden garden furniture with David Domoney
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5'>
                <div className='fluid-width-video-wrapper' style={{paddingTop: '56.25%'}}>
                  <iframe className='imgFrame' src='//www.youtube.com/embed/LoLcCj7IXyA?rel=0'></iframe>
                </div>
                <div className='product-title cut-text'>  
				          		Caring for wooden garden furniture with David Domoney
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5'>
                <div className='fluid-width-video-wrapper' style={{paddingTop: '56.25%'}}>
                  <iframe className='imgFrame' src='//www.youtube.com/embed/LoLcCj7IXyA?rel=0'></iframe>
                </div>
                <div className='product-title cut-text'>  
				          		Caring for wooden garden furniture with David Domoney
                </div>
              </div>
            </div>
          </div>
         </div>
        
    </>
  )
}

export default Videos