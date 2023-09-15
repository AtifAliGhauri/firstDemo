import React,{useRef,useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import './Navbar.css'


function Navbar() {

    const [toggle, setToggle] =useState(false)

    const handleToggle = () => {
      setToggle(!toggle);
    }

    const [home, setHome] =useState(true)
    const homeHandle = () => {
      setHome(!home);
    }

    const[ourRange, setOurRange] = useState(true)
    const ourRangeHandle = () => {
      setOurRange(!ourRange);
    }

    const [rangeType, setRangeType] = useState(true)
    const rangeTypeHandle = () =>{
      setRangeType(!rangeType);
    }

    const [support, setSupport] = useState(true)
    const supportHandle = () =>{
      setSupport(!support);
    }

    const [menu, setMenu] = useState(false)
    const menuHandle = () =>{
      setMenu(!menu);
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
    <>
      <header className="header" ref={headerRef}>
              <div id='header-wrap'  >
                <div className='container'>
                {  toggle ? (  
                  <div className='header-row'>  
                    <form className='top-search-form'>
                                  <input type='text' className='form-control' placeholder='Enter Your Search' />
                                  <button onClick={handleToggle} style={{border:'none',background:'transparent',fontSize:'1.2rem'}}>
                                          <span className=" nav-link fa fa-close" style={{color:'black'}}></span>
                                        </button>
                    </form>
                  </div>

                  ):(
                    <div className='header-row top-search-parent'>
                        
                        <div id='logo'>
                          <Link className="standard-logo" to='/'>
                              <div className='logo'>
                                  <img src={logo} alt='Logo....'/>
                              </div>                                
                            </Link>
                        </div>
                        <div className='header-misc'>
                          <div id='top-search' className='header-misc-icon'>
                            <Link to='/' id='top-search-trigger'>
                              <i onClick={handleToggle} className='bi bi-search'></i>
                            </Link>
                          </div>
                        </div>

                        <div id="primary-menu-trigger">
                          <Link className='drp-icon'><i class="fa fa-bars" onClick={menuHandle} style={{fontSize:'1rem',color:'#333',display: menu ? 'none': 'block'}}></i></Link>
                          <Link className='drp-icon'><i class="fa fa-close"  onClick={menuHandle}  style={{fontSize:'.75rem',color:'#333', display: menu ? 'block': 'none'}}></i></Link>                        
                        </div>
                      
                        <nav className='primary-menu' style={{display:menu ? 'block':'none'}}>
                          <ul className="menu-container">
                                    <li className="menu-item current sub-menu ">
                                        <Link className="menu-link" to='/'>
                                            <div>HOME</div>
                                        </Link>
                                        <ul className='sub-menu-container display-none'>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/about'><div>About Us</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Our Partners</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>WeatherReady</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Caring for Teak</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Tuscan Ceramic Glass</div></Link>
                                          </li>
                                        </ul>
                                        <Link><span className='sub-menu-trigger'><i onClick={homeHandle} style={{transform:home ? 'initial':'rotate(90deg)', transition:'transform .2s'}} className='fa fa-chevron-right'></i></span></Link>
                                        
                                        <ul className='sub-menu-container' style={{display: home ? 'none': 'block'}}>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/about'><div>About Us</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Our Partners</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>WeatherReady</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Caring for Teak</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Tuscan Ceramic Glass</div></Link>
                                          </li>
                                        </ul>
                                      
                                        
                                    </li>
                                    <li className="menu-item mega-menu sub-menu" >
                                        <Link className="menu-link" to='/'>
                                            <div>Our Range</div>
                                        </Link>
                                        <div className='mega-menu-content display-none mega-menu-style-2 mega-menu-content-1' >
                                          <div className='container'>
                                            <div className='row'>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Cast Aluminium</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Almafi</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Berkeley</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Capri</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Deco</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Rosario</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Weave</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Heritage</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Westbury</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Aluminium</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Aurora</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Cosmopolitan</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Dubai</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Sanza</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Singapore</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Sorrento</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Vienna</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3 border-none' >
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>ZonTex® All-Weather Fabric</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Riviera</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Textiles</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Scatter Cushion</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Shading</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Shading</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <Link><span className='sub-menu-trigger'><i onClick={ourRangeHandle} style={{transform:ourRange ? 'initial':'rotate(90deg)', transition:'transform .2s'}} className='fa fa-chevron-right'></i></span></Link>
                                      
                                        <div className='mega-menu-content mega-menu-style-2' style={{display: ourRange ? 'none':'block'}} >
                                          <div className='container'>
                                            <div className='row'>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Cast Aluminium</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Almafi</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Berkeley</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Capri</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Deco</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Rosario</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Weave</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Heritage</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Westbury</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Aluminium</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Aurora</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Cosmopolitan</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Dubai</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Sanza</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Singapore</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Sorrento</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Vienna</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-3 border-none' >
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>ZonTex® All-Weather Fabric</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Riviera</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Textiles</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Scatter Cushion</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Shading</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Shading</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      
                                    </li>
                                    <li className="menu-item mega-menu mega-menu-small sub-menu" >
                                        <Link className="menu-link" to='/'>
                                            <div>Range By Type</div>
                                        </Link>
                                        <div className='mega-menu-content display-none mega-menu-style-2 mega-menu-content-2'>
                                          <div className='container'>
                                            <div className='row'>
                                              <ul className='sub-menu-container mega-menu-column col-lg-6'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>By Seating</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link' to='/rangeby10'><div>10 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>2 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>3 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>4 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>5 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>6 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>7 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>8 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>9 Seat</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-6 border-none'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Other Stuff</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Accessories</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Bench</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Corner Sets</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Dining</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Fire Pit Sets</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Lounge</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Loungers</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Shading</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Swing Chairs</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <Link><span className='sub-menu-trigger'><i onClick={rangeTypeHandle} style={{transform:rangeType ? 'initial':'rotate(90deg)', transition:'transform .2s'}} className='fa fa-chevron-right'></i></span></Link>
                                        
                                        <div className='mega-menu-content mega-menu-style-2' style={{display: rangeType ? 'none':'block'}}>
                                          <div className='container'>
                                            <div className='row'>
                                              <ul className='sub-menu-container mega-menu-column col-lg-6'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link' to='/rangeby10'><div>By Seating</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>10 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>2 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>3 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>4 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>5 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>6 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>7 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>8 Seat</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>9 Seat</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                              <ul className='sub-menu-container mega-menu-column col-lg-6 border-none'>
                                                <li className='menu-item mega-menu-title sub-menu'>
                                                  <Link className='menu-link'><div>Other Stuff</div></Link>
                                                  <ul className='sub-menu-container'>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Accessories</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Bench</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Corner Sets</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Dining</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Fire Pit Sets</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Lounge</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Loungers</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Shading</div></Link>
                                                    </li>
                                                    <li className='menu-item'>
                                                      <Link className='menu-link'><div>Swing Chairs</div></Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        
                                    </li>
                                    <li className="menu-item sub-menu" >
                                        <Link className="menu-link" to='/'>
                                            <div>Support</div>
                                        </Link>
                                        <ul className='sub-menu-container display-none'>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Spare Parts</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Register Your Guarantee</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Warranty Claim</div></Link>
                                          </li>
                                        </ul>
                                        <Link><span className='sub-menu-trigger'><i onClick={supportHandle} style={{transform:support ? 'initial':'rotate(90deg)', transition:'transform .2s'}} className='fa fa-chevron-right'></i></span></Link>
                                        
                                        <ul className='sub-menu-container' style={{display: support ? 'none':'block'}}>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Spare Parts</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Register Your Guarantee</div></Link>
                                          </li>
                                          <li className='menu-item'>
                                            <Link className='menu-link' to='/'><div>Warranty Claim</div></Link>
                                          </li>
                                        </ul>
                                      
                                    </li>
                                    <li className="menu-item" >
                                        <Link className="menu-link" to='/videos'>
                                            <div>Videos</div>
                                        </Link>
                                    </li>
                                    <li className="menu-item " >
                                        <Link className="menu-link" to='/contact'>
                                            <div>Contact</div>
                                        </Link>
                                    </li>
                            </ul> 
                                
                        </nav>
                        
                      
                </div>
                  )
                }
              </div>

          </div>
      </header>
    
    </>
  )
}

export default Navbar