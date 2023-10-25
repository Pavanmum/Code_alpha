import React from 'react'
import './PhotoInfo.css'

const PhotoInfo = () => {
  return (
    <div>
         <div className="card-container">
    <div className="heading">
      <h1 className="headings">Popular Service</h1>
    </div>
    <div className="items">
    <div className="card" >
<img src="img/c-1.webp" className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">Social Media</h5>
  <p className="card-text">
  Enhance the features that the AI uses for its decision-making processes. 
  </p>
  <a href="#" className="btn btn-primary">
    For More Details..
  </a>
</div>
</div>

<div className="card" >
<img src="img/c-2.webp" className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">WordPress</h5>
  <p className="card-text">
  Custumise your Size y, making it a top choice for a wide range of websites
  </p>
  <a href="#" className="btn btn-primary">
    For More Details..
  </a>
</div>
</div>
<div className="card" >
<img src="img/c-3.webp" className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title"> SEO </h5>
  <p className="card-text">
 Unlock growth Online with more information and better experience
  </p>
  <a href="#" className="btn btn-primary">
    For More Details..
  </a>
</div>
</div>
<div className="card" >
<img src="img/c-4.webp" className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">Book Cover</h5>
  <p className="card-text">
  Show Case your stories uses for its decision-making processes. 
  </p>
  <a href="#" className="btn btn-primary">
    For More Details..
  </a>
</div>
</div>

    </div>
  </div>
    </div>
  )
}

export default PhotoInfo