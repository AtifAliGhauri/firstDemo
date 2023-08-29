import React from 'react'
import { Link } from 'react-router-dom'
import BackToTop from '../BackToTop';
import './footer.css'

function Footer() {
  return (
    <div>

    
        <section className='section footer bg-dark'>
            <div className='container-fluid px-5 clearfix'>
              <div className='footer-widgets-wrap'>
                <div className='row col-mb-50' >
                    <div className='col-sm-6 col-lg-3'>
                    <strong style={{borderBottom: "1px dashed #999"}}>Hartman Outdoor Products Limited:</strong>
                        <br />
                        <br />
                        <div className='px-2'>
                            <h7>Hortonwood 7</h7><br />
                            <h7>Telford</h7><br />
                            <h7>Shropshire</h7><br />
                            <h7>TF1 7GP</h7><br />
                            <h7><span>Phone:</span>01952 231 231</h7><br />
                            <br />
                            <div className='bg-dark text-white'>
                                
                                <Link to='/'>
                                <span><i class="fa fa-facebook"></i></span>
                                </Link>
                                <Link to='/'>
                                <span><i class="fa fa-twitter"></i></span>
                                </Link>
                                <Link to='/'>
                                <span><i class="fa fa-youtube-play"></i></span>
                                </Link>
                                <Link to='/'>
                                <span><i class="fa fa-tumblr"></i></span>
                                </Link>
                                
                                
                                
                                
                            </div>

                        </div>
                    
                    </div>

                    <div className='col-sm-6 col-lg-5'>
                        <h4>Can we help you</h4>
                        <br />
                        <br />
                        <div className='row'>
                            <div className='col-6 widget_links'>
                                <ul style={{listStyleType:'none'}}>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none' style={{color:'rgba(255,255,255,0.8)'}}>  Home</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/about' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  About Hartman</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  Order garden furniture spares</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  Register my warranty</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  Contact Hartman</Link></li>
                                </ul>
                            </div>
                            <div className='col-6 widget_links'>
                                <ul style={{listStyleType:'none'}}>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  Warranty information</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  Privacy & Cookies</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  Our partnerships</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none ' style={{color:'rgba(255,255,255,0.8)'}}>  Weatherready technology</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <div className='widget clearfix text-center'>
                            <h4>Stay Upto Date with Hartman</h4>
                            <br />
                            <br/>
                            <form>
                            <div class="input-group mx-auto" >
                                <span class="input-group-text text-light input-icon" style={{background:"#212529",border: '1px solid #37383a',borderRadius:'0'}} id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='rgb(160, 154, 154)' class="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                                </svg>
                                </span>
                                
                                <input type="email" class="form-control" placeholder="Enter your Email"  />
                                <button style={{borderRadius:'0'}} class="btn btn-success"  type="button">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>



                </div>
              </div>
            </div>

            <div className='copyrights'>
            <div className='container'>
                <div className='w-100 text-center '>
                    <p>Copyrights © 2023 All Rights Reserved by Hartman Outdoor Products Limited.</p>
                </div>
            </div>

            </div>
            
        </section>
        <BackToTop />
    </div>
  )
}

export default Footer