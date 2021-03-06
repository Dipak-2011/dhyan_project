import React from 'react';
import img from './img/nature.jpg';
import img2 from './img/nature2.jpg';
import img3 from './img/nature3.jpg';

const Home = () => {
  return(
    <>
  <div className="text-capitalize">
    <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={img} className="d-block w-100" alt="Car_parking"/>
          <div className="carousel-caption  d-md-block ">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={img2} className="d-block w-100" alt="car"/>
          <div className="carousel-caption  d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Day_parking"/>
          <div className="carousel-caption  d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  </div>
    
  </>
  );
  
} ;

export default Home; 
