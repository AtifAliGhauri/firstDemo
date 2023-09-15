import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import data from '../../assets/data'

function RangeBySeating10() {

    const loadData= data;

  return (
    <>
        <section className='page-title-mini'>
          <div className='container-fluid px-5 clearfix'>
            <h1>The Hartman Range</h1>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link>Home</Link></li>
              <li className='breadcrumb-item active'><Link>Our Range</Link></li>
              <li className='breadcrumb-item active'><Link>10 Seats</Link></li>
            </ol>
          </div>
        </section>

        <section id='content'>
            <div className='content-wrap'>
                <div className='container-fluid px-5 clearfix'>
                    <div className='grid-filter-wrap'>
                        <ul className='grid-filter' data-container="#portfolio">
                            <li className='activeFilter'><Link>All 10 Seats items</Link></li>
                            <li><Link>Matt Xerix</Link></li>
                            <li><Link>Ash</Link></li>
                            <li><Link>Beech</Link></li>
                        </ul>
                        <div style={{display:'flex'}}>
                            <div className='grid-shuffle rounded' style={{marginRight:'5px !important'}}>
                                <i className='fa fa-random' style={{fontSize:'0.75rem', fontWeight:'bold'}}></i>
                            </div>
                            <div className='grid-shuffle rounded'>
                                <i className='fa fa-sort-alpha-asc' style={{fontSize:'0.75rem', fontWeight:'bold'}}></i>
                            </div>
                        </div>
                    </div>


                    <div id='portfolio' className='portfolio row grid-container gutter-20 has-init-isotope' style={{overflow:'visible',position:'relative',height:'550.656px'}}>
                      
                      {
                        loadData.map(item => (
                        <article className='portfolio-item col-lg-3 col-md-4 col-sm-6 col-12 pf-media Matt_Xerix' >
                            <div className='grid-inner'>
                                <div className='product-image'>
                                    <Link><img src={item.photo} alt='' /></Link>
                                </div>
                                <div className='product-desc'>
                                    <div className='product-title center cut-text'>
                                    {item.detail}
                                    </div>
                                </div>
                            </div>
                        </article>
                        ))
                      }
                     
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default RangeBySeating10