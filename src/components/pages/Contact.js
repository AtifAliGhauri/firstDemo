import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'


function Contact() {
  return (
    <>  
      <section className='page-title-mini'>
          <div className='container-fluid px-5 clearfix'>
            <h1>Contact Us</h1>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link>Home</Link></li>
              <li className='breadcrumb-item active'><Link>Contact Us</Link></li>
            </ol>
          </div>
      </section>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='contact-form-overlay col-md-8 offset-md-2 p-5 mb-4'>
              <div className='fancy-title title-border'>
                <h3>Send us an Email</h3>
              </div>
              <div>
                <form className='row mb-0'>
                  <div className='col-md-6 form-group'>
                    <label className='template-contactform-name'>Name<small>*</small></label>
                    <input type='text' className='sm-form-control required'/>
                  </div>
                  <div className='col-md-6 form-group'>
                    <label className='template-contactform-email'>Email<small>*</small></label>
                    <input type='text' className='sm-form-control email required'/>
                  </div>
                    <div className='w-100'></div>
                    <div className='col-md-6 form-group'>
                    <label className='template-contactform-phone'>Phone</label>
                    <input type='text' className='sm-form-control '/>
                  </div>
                  <div className='col-md-6 form-group'>
                    <label className='template-contactform-service'>Select your enquiry type  </label>
                    <select className='sm-form-control'>
                      <option>-select-</option>
                      <option value={'Warranty Clain'}>I wish to make a warranty claim</option>
                      <option value={'Spare part'}>I need a Spare Part</option>
                      <option value={'Where to buy'}>Where can I buy Hartman products?</option>
                      <option value={'Technical enquiry'}>My request is about something else</option>
                    </select>
                  </div>
                    <div className='w-100'></div>
                  <div className='col-md-12 form-group'>
                    <label className='template-contactform-subject'>Subject<small>*</small></label>
                    <input type='text' className='sm-form-control  required'/>
                  </div>
                  <div className='col-md-12 form-group'>
                    <label className='template-contactform-email'>Messsage<small>*</small></label>
                    <textarea className='required sm-form-control' rows={6} cols={30}></textarea>
                  </div>
                  <div className='col-lg-12 bottommargin'>
                    <label>Select Multiple Items:</label>
                    <br />
                    <input type='file' className='file'/>
                  </div>
                  <div className='col-lg-12 form-group'>
                    <button className='button button-3d m-0' type='Submit'> Send Message</button>
                  </div>
                  
                </form>
              </div>

              <div className='line'></div>

              <div className='row col-mb-50'>
                <div className='col-md-4'>
                  <address>
                    <strong>Hartman UK</strong>
                    <br />
                    Hortonwood 7
                    <br />
                    Telford
                    <br />
                    Shrosphire
                    <br />
                    TF1 7GP
                  </address>
                  <abbr>
                  <strong>Phone No: </strong>
                  01952 231231
                  </abbr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact