import "./style.css"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Home = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-6 col-lg-8">
            <h1>
              TINO SKILLS PORTFOLIO<span>.</span>
            </h1>
            <h2>
              An accomplished Software Engineering student seaking self actualisation
            </h2>
          </div>
        </div>

        <br />
        <br />
        <br />

        <h2><b>Sample of skills l have learned </b></h2>

        <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line"></i>
              <h3><a href="inner-page.html">Web Development</a></h3>
            </div>
          </div>

          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"></i>
              <h3><a href="portfolio-details.html">Cyber security</a></h3>
            </div>
          </div>

          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-calendar-todo-line"></i>
              <h3><a href="inner-page.html">JavaScript ,Jsx</a></h3>
            </div>
          </div>

          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-calendar-todo-line"></i>
              <h3><a href="portfolio-details.html">Python,C++,C#</a></h3>
            </div>
          </div>

          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-paint-brush-line"></i>
              <h3><a href="#">Frameworks</a></h3>
            </div>
          </div>

          <div className="col-xl-2 col-md-4">
            <div className="icon-box"> 
              <i className="ri-database-2-line"></i>
              <h3><a href="#">Databases</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
