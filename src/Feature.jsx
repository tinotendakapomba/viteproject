import React from "react";
import developerImg from "./assets/Developer.png"; 
import "./style.css"

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <h2>Active and Finished Projects.</h2>
        <div className="row">
          {/* Image Column */}
          <div
            className="image col-lg-6"
            style={{ backgroundImage: `url(${developerImg})` }}
            data-aos="fade-right"
          ></div>

          {/* Content Column */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <i className="bx bx-receipt"></i>
              <a href="">
                <h4>Luxe Human Hair Wigs</h4>
              </a>
              <p>
                A wig business owned by Lincy, specializing in Brazilian hair
                extensions
              </p>
            </div>

            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-cube-alt"></i>
              <a href="">
                <h4>Classy Hair Zw</h4>
              </a>
              <p>
                A wig business owned by Wersly, specializing in Brazilian hair
                extensions
              </p>
            </div>

            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-images"></i>
              <h4>1Sigma Software</h4>
              <p>
                A technology SME founded by software engineer Tinotenda Kapomba,
                specializing in innovative software design services
              </p>
            </div>

            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-shield"></i>
              <h4>Hair bling</h4>
              <p>
                A wig business owned by Susan, specializing in Brazilian hair
                extensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
