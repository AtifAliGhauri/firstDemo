import React,{useRef,useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import './Navbar.css'


function Navbar() {

    const [toggle, setToggle] =useState(false)

    const handleToggle = () => {
      setToggle(!toggle);
    }

    const headerRef = useRef(null)

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
          if(document.body.scrollTop > 70 || document.documentElement.scrollTop >70){
            headerRef.current.classList.add('sticky__header')
          }else{
            headerRef.current.classList.remove('sticky__header')
          }
        })
      }

      useEffect(()=>{
        stickyHeaderFunc()
    
        return window.removeEventListener('scroll', stickyHeaderFunc)
      })

  return (
    <header className="header" ref={headerRef}>
            <div className='nav-margin'  >

              
                     

            <div className='container-xxl'>
                <div className='row'>

                          { toggle ? (

                          <div className='col-md-12' style={{padding:'6.5rem 0 0rem 0'}}>
                            <form className='top-search-form'>
                              <input type='text' className='form-control' placeholder='Enter Your Search' />
                              <button onClick={handleToggle} style={{border:'none',background:'transparent',fontSize:'1.2rem'}}>
                                      <span className=" nav-link fa fa-close" style={{color:'black'}}></span>
                                    </button>
                            </form>
                          </div>
                          ):(

                          

                        <div className='col-md-12 '>

                        <nav className="navbar navbar-expand-lg"> 
                            <div className="container-fluid">
                                <Link className="navbar-brand" to='/'>
                                  <div className='logo'>
                                      <img src={logo} alt='Logo....'/>
                                  </div>                                
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item dropdown">
                                    <Link className="nav-link active dropbtn" to='/' onMouseEnter={(e) => {                          
                                          e.target.style.color = '#1abc9c';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'black'; 
                                              }}>HOME</Link>
                                        <div className='dropdown-content'>
                                              <Link className='aa' to='/about'>About Us</Link>
                                              <Link className='aa'>Our Partners</Link>
                                              <Link className='aa'>WeatherReady</Link>
                                              <Link className='aa'>Caring for Teak</Link>
                                              <Link className='aa'>Tuscan Ceramic Glass</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <Link className="nav-link dropbtn" to='/' onMouseEnter={(e) => {
                              
                                            e.target.style.color = '#1abc9c';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'black'; 
                                    }}>OUR RANGE</Link>
                                        <div className='dropdown-content' style={{width:'1289px',left:'-41rem'}}>
                                          <div className='container mega-menu'>
                                            <div className='row'>
                                              <ul className='mega-menu-column col-lg-3'>
                                                <li className='sub-menu'>
                                                  <Link className='menu-link'>Cast Aluminium</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>About Us</Link>
                                                    <Link className='aa'>Our Partners</Link>
                                                    <Link className='aa'>WeatherReady</Link>
                                                    <Link className='aa'>Caring for Teak</Link>
                                                    <Link className='aa'>Tuscan Ceramic Glass</Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>

                                              <ul className='mega-menu-column col-lg-3'>
                                                <li className='sub-menu'>
                                                  <Link className='menu-link'>Weave</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>Heritage</Link>
                                                    <Link className='aa'>Westbury</Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>

                                              <ul className='mega-menu-column col-lg-3'>
                                                <li className='sub-menu'>
                                                  <Link className='menu-link'>Aluminium</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>Aurora</Link>
                                                    <Link className='aa'>Cosmopolitan</Link>
                                                    <Link className='aa'>Dubai</Link>
                                                    <Link className='aa'>Sanza</Link>
                                                    <Link className='aa'>Singapore</Link>
                                                    <Link className='aa'>Sorrento</Link>
                                                    <Link className='aa'>Vienna</Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>

                                              <ul className='mega-menu-column col-lg-3'>
                                                <li className='sub-menu'>
                                                  <Link className='menu-link'>ZonTex® All-Weather Fabric</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>Riviera</Link>
                                                    </li>
                                                  </ul>
                                                </li>

                                                <li className='sub-menu'>
                                                  <Link className='menu-link'>ZonTex® All-Weather Fabric</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>Riviera</Link>
                                                    </li>
                                                  </ul>
                                                </li>

                                                <li className='sub-menu'>
                                                  <Link className='menu-link'>Textiles</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>Scatter Cushion</Link>
                                                    </li>
                                                  </ul>
                                                </li>

                                                <li className='sub-menu'>
                                                  <Link className='menu-link'>Shading</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>Shading</Link>
                                                    </li>
                                                  </ul>
                                                </li>

                                              
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <Link className="nav-link dropbtn" to='/'onMouseEnter={(e) => {                          
                                          e.target.style.color = '#1abc9c';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'black'; 
                                              }}>RANGE BY TYPE</Link>
                                        <div className='dropdown-content' style={{minWidth:'320px'}}>
                                          <div className='container mega-menu'>
                                            <div className='row'>
                                              <ul className='mega-menu-column col-lg-3'>
                                                <li className='sub-menu' style={{marginLeft:'0rem'}}>
                                                  <Link className='menu-link'>By Sitting</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>10 Seats</Link>
                                                    <Link className='aa'>9 Seats</Link>
                                                    <Link className='aa'>8 Seats</Link>
                                                    <Link className='aa'>7 Seats</Link>
                                                    <Link className='aa'>6 Seats</Link>
                                                    <Link className='aa'>5 Seats</Link>
                                                    <Link className='aa'>4 Seats</Link>
                                                    <Link className='aa'>3 Seats</Link>
                                                    <Link className='aa'>2 Seats</Link>
                                                    <Link className='aa'>1 Seats</Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>

                                              <ul className='mega-menu-column col-lg-3'>
                                                <li className='sub-menu' style={{marginLeft:'0rem'}}>
                                                  <Link className='menu-link'>Other Stuff</Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item '>
                                                    <Link className='aa'>Accessories</Link>
                                                    <Link className='aa'>Bench</Link>
                                                    <Link className='aa'>Corner Sets</Link>
                                                    <Link className='aa'>Dining</Link>
                                                    <Link className='aa'>Fire Pits Set</Link>
                                                    <Link className='aa'>Lounge</Link>
                                                    <Link className='aa'>Loungers</Link>
                                                    <Link className='aa'>Shading</Link>
                                                    <Link className='aa'>SwingChairs</Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <Link className="nav-link dropbtn" to='/support' onMouseEnter={(e) => {                          
                                          e.target.style.color = '#1abc9c';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'black'; 
                                              }}>SUPPORT </Link>
                                        <div className='dropdown-content'>
                                              <Link className='aa'>Spare Parts</Link>
                                              <Link className='aa'>Register your Guarantee</Link>
                                              <Link className='aa'>Warranty Clain</Link>
                                            
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to='/videos' onMouseEnter={(e) => {                          
                                          e.target.style.color = '#1abc9c';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'black'; 
                                              }}>VIDEOS</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to='/contact' onMouseEnter={(e) => {                          
                                          e.target.style.color = '#1abc9c';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'black'; 
                                              }}>CONTACT</Link>
                                    </li>
                                    
                                </ul>
                                <li className="nav-item search">
                                    <button onClick={handleToggle} style={{border:'none',background:'transparent',fontSize:'1.2rem'}}>
                                      <span className=" nav-link bi bi-search"></span>
                                    </button>
                                </li> 
                                
                                </div>

                                
                            </div>
                        </nav>

                        </div>

                          )

                          }
                </div>

            </div>

        </div>
    </header>
   
    
  )
}

export default Navbar