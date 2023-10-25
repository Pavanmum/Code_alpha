import React from 'react'
import './Slider.css'
const Slider = () => {
  return (
   <>
  <div class='containers'>
  <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/img1.jpg" class="d-block w-100" alt="..."/>
     
      <div class="carousel-caption d-none d-md-block">
        <h5 className='carousel-H' >Collaboration for transformation</h5>
        <p className='Parg'>Our strategic know-how can help you navigate your enterprise application landscape for success at scale</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/img2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='carousel-H'>Recognize risks, realize rewards</h5>
        <p className='Parg'>Transition from experience- to evidence-based real time decision making</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/img1.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='carousel-H'>Our CSR initiatives empower communities and propel meaningful change</h5>
        <p className='Parg'>Progress with purpose.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

   </>
  )
}

export default Slider;