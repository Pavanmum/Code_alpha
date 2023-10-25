import React from 'react'
import './Highlight.css'
import { BsFillCaretRightFill } from "react-icons/bs";

const Highlight = () => {
  return (
    <>
      <div className="high-container">
        <div className="texts">
            <div className="Rows row ">
                <div className="col-6">
                    <h1>
                    The best part? Everything.
                    </h1>
                    <ol >
                        <li style={{listStyleType: "none"}}>
                            <h6 className='d-flex'>
                                <span className='logo' ><BsFillCaretRightFill/></span>
                            Stick to your budget
                            </h6>
                            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <h6 className='d-flex'>
                                <span className='logo' ><BsFillCaretRightFill/></span>
                                Get quality work done quickly
                            </h6>
                            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <h6 className='d-flex'>
                                <span className='logo' ><BsFillCaretRightFill/></span>
                                Pay when you're happy
                            </h6>
                            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                        </li>
                        <li style={{listStyleType: "none"}}>
                            <h6 className='d-flex'>
                                <span className='logo' ><BsFillCaretRightFill/></span>
                                Count on 24/7 support
                            </h6>
                            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                        </li>
                    </ol>
                    
                </div>
                <div className="col-6">
                <div className="item">
            <video className="video h-100 w-100" src="./img/video.mp4" controls  />
          </div> 
               
                </div>
            </div>
        </div>
        </div>  
    </>
  )
}

export default Highlight