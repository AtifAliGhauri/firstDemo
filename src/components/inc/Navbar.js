import React,{useRef,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'


function Navbar() {

    const headerRef = useRef(null)

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
          if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
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
            <div className='shadow'  >
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to='/'>
                                <img src={logo} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                <Link className="nav-link active" to='/'>HOME</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='/ourrange'>OUR RANGE</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='/rangebytype'>RANGE BY TYPE</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='/support'>SUPPORT </Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='/videos'>VIDEOS</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='/contact'>CONTACT</Link>
                                </li>
                                <li className="nav-item">
                                <span className=" nav-link bi bi-search"></span>
                                </li>
                            </ul>
                            
                            </div>
                        </div>
        </nav>

                    </div>
                </div>

            </div>

        </div>
    </header>
   
    
  )
}

export default Navbar