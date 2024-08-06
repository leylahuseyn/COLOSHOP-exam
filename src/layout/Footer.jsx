import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faSkype, faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
      <footer>
        <div className='footer'>
        <div className="container ">
          <div className="d-flex justify-content-between top">
          <div className='news'>
            <h3>Newsletter</h3>
            <span>Subscribe to our newsletter and get 20% off your first purchase</span>
          
          </div>   
         <div>
            <input type="Email" className='p-4' placeholder='Your email'/>
            <button className=''>SUBSCRIBE</button>
          </div>

          </div>
        </div>

        </div>

        <div className="container">
          <div className="mt-5 d-flex justify-content-between text-secondary">
          <div className=''>
           <span className='me-5'>Blog</span>
           <span className='me-5'>FAQs</span>
           <span className='me-5'>Contact us</span>
          
          </div>   
         <div>
         <FontAwesomeIcon className='me-5 icon' icon={faFacebookF} />
         <FontAwesomeIcon className='me-5 icon' icon={faTwitter} />
         <FontAwesomeIcon className='me-5 icon' icon={faInstagram} />
         <FontAwesomeIcon className='me-5 icon' icon={faSkype} />
         <FontAwesomeIcon className='icon' icon={faPinterest} />
          </div>

          </div>
        </div>
        <div className='container  "'>
          <div className='last text-secondary'>

          <p>All Rights Reserverd. This template is made with <FontAwesomeIcon className='text-danger' icon={faHeart} />  by <span className='text-danger'>Colorlib</span> </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer