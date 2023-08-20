import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons';
import BackToTop from '../BackToTop';

function Footer() {
  return (
    <div>

    
        <section className='section footer bg-dark text-white'>
            <div className='container'>
                <div className='row col-mb-50' >
                    <div className='col-sm-6 col-lg-4'>
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
                                <span className="bi bi-facebook" style={{fontSize: '20px', border: '1px solid rgb(255, 255, 255)', borderRadius: '50%', color: 'rgb(128, 128, 128)', padding: '9px',backgroundColor: 'rgb(84, 84, 84);'}}></span>
                                </Link>
                                <Link to='/'>
                                <span class="bi bi-youtube" style={{fontSize: '20px', border: '1px solid rgb(255, 255, 255)', borderRadius: '50%', color: 'rgb(128, 128, 128)', padding: '9px',backgroundColor: 'rgb(84, 84, 84);'}}></span>
                                </Link>
                                <Link to='/'>
                                <span class="bi bi-twitter" style={{fontSize: '20px', border: '1px solid rgb(255, 255, 255)', borderRadius: '50%', color: 'rgb(128, 128, 128)', padding: '9px',backgroundColor: 'rgb(84, 84, 84);'}}></span>
                                </Link>
                                <Link to='/'>
                                <span id="boot-icon" class="bi bi-tiktok" style={{fontSize: '20px', border: '1px solid rgb(255, 255, 255)', borderRadius: '50%', color: 'rgb(128, 128, 128)', padding: '9px',backgroundColor: 'rgb(84, 84, 84);'}}></span>
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
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Home</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  About Hartman</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Order garden furniture spares</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Register my warranty</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Contact Hartman</Link></li>
                                </ul>
                            </div>
                            <div className='col-6 widget_links'>
                                <ul style={{listStyleType:'none'}}>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Warranty information</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Privacy & Cookies</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Our partnerships</Link></li>
                                    <li><span class="bi bi-chevron-right"></span><Link to='/' className='text-decoration-none text-white'>  Weatherready technology</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-3'>
                    <h6>Stay Upto Date with Hartman</h6>
                    <br />
                    <br/>
                    <form>
                    <div class="input-group mb-5">
                        <span class="input-group-text text-light bg-dark" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                        </svg>
                        </span>
                        
                        <input type="text" class="form-control text-white " style={{backgroundColor:'#979597'}} placeholder="Enter your Email"  />
                        <button class="btn btn-success" type="button" id="button-addon2">Button</button>
                    </div>
                    </form>
                    </div>



                </div>
            </div>
            <div className='container'>
                <div className='w-100 text-center mt-4 mb-0'>
                    <p>Copyrights © 2023 All Rights Reserved by Hartman Outdoor Products Limited.</p>
                </div>
            </div>
        </section>
        <BackToTop />
    </div>
  )
}

export default Footer