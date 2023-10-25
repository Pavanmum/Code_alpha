// Footer.js

import React from 'react';
import './Footer.css'
import {BsGithub, BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center" >
          <div className="col-5">
            <div className="footer-top-data d-flex align--items-center " style={{gap :" 14px",}}> 
            <img src="img/images.png" alt="newsletter" style={{width:"40px", height:"40px" ,  borderRadius:"50px"}}/>
            <h2 className='mb-0 text-white'>Sign Up for Updates</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                 Subscribe
                </span>
              </div>
              </div>
        </div>
      </div>
    </footer>
        <footer className="footer" style={{backgroundColor: "#232f3e"}}>
            <div className='container py-4'>
                <div className='row '>
                    <div className='col-4'>
                        <h4>Contact</h4>
                        <span className='fs-6'> Room no : 3 shree ganesh Chawl near Samaj mandi Hall,<br/>
                        G.T.B nagar ,sion koliwada<br/>
                        Mumbai 400037
                        </span>
                        <a href="tel:+91 9987018754" class="text-white mb-1 d-block mt-3">+91 9987018754</a>
                        <a href="mailto:pavanprasad035@gmail.com" class="text-white mb-0 d-block mt-2">pavanprasad035@gmail.com</a>
                        <div className='social_icons d-flex align-items-center gap-30 mt-1'>
          <a  className="text-white" href="k">
              <BsLinkedin className="fs-4" />
            </a><a  className="text-white" href="m">
              <BsInstagram className="fs-4" />
            </a><a  className="text-white" href="u">
              <BsGithub className="fs-4" />
            </a><a  className="text-white" href="h">
              <BsYoutube className="fs-4" />
            </a>
          </div>
                    </div>
                    <div className='col-4'>
                    <h4>Information</h4> 
                    <div>

          <div to="/Privacy Policy" className='text-white py-2 mb-1'>Privacy Policy</div>
          <div to="/Refund Policy" className='text-white py-2 mb-1'>More Info</div>
          <div to="/Shipping Policy" className='text-white py-2 mb-1'>Portfolio Policy</div>
          <div to="/Term-Condition" className='text-white py-2 mb-1'>Terms of Services</div>                       
                    </div>
                    </div>
                    <div className='col-4'>
                    <h4>Information</h4> 
                    <div>
                    <div to="/Privacy Policy" className='text-white py-2 mb-1'>About Us</div>
          <div to="/Refund Policy" className='text-white py-2 mb-1'>Faculties Details</div>
          <div to="/Shipping Policy" className='text-white py-2 mb-1'>FAQ</div>
          <div to="/Term-Condition" className='text-white py-2 mb-1'>Contact</div>                       

                    </div>
                  </div>
                </div>
            </div>
        </footer>
        <footer className="footer py-4" style={{backgroundColor: "#232f3e"}}>
            <div className='col-12'>
            <p className='text-center mb-0 text-white'>
            &copy; {new Date().getFullYear()}:Powered by CodeAlpha </p>
            </div>
        </footer>
     
      {/* <div className='wrap-information row-6'>
      <p>Phone no </p>
        <p>Phone no </p>
        <p>Phone no </p>
        <p>Phone no </p>
      </div>
      <div className='wrap-information row-6'>
      <p>Phone no </p>
        <p>Phone no </p>
        <p>Phone no </p>
        <p>Phone no </p> */}
       {/* </div> */}
  
    </>
  );
};

export default Footer;
