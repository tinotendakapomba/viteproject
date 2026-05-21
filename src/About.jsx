import React from "react";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"; 
import "aos/dist/aos.css";
 


const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
        
          {/* Image Column */}
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <br /><br /><br /> 
            <img src= "./assets/team/founder.jpeg" className="img-fluid" alt="Founder" />
          </div>

          {/* Content Column */}
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <br />
            <h2><strong>Why Choose Me?</strong></h2>
            <br />
            <p className="fst-italic">
              I am Tinotenda Kapomba, a Web Developer and Software Engineering student at Bindura University of Science Education, currently seeking an industrial attachment to apply my skills and gain practical experience.
            </p>
            <br />
            <ul>
              <li><i className="ri-check-double-line"></i> Web Development: Building responsive and dynamic applications.</li>
              <li><i className="ri-check-double-line"></i> Cybersecurity: Understanding secure coding and system protection.</li>
              <li><i className="ri-check-double-line"></i> Programming Languages: JavaScript, JSX, Python, C++, C#.</li>
              <li><i className="ri-check-double-line"></i> Frameworks: Experience with modern frameworks for efficient development.</li>
              <li><i className="ri-check-double-line"></i> Databases: Knowledge of relational and non-relational database systems.</li>
              <li><i className="ri-check-double-line"></i> Continuous Learning: Passionate about exploring new technologies and best practices.</li>
              <li><i className="ri-check-double-line"></i> Team Collaboration: Strong communication and problem-solving in group projects.</li>
              <li><i className="ri-check-double-line"></i> Attachment Goal: Seeking industrial attachment to apply skills and gain hands-on experience.</li>
            </ul>

            <p>
              Ready to contribute and grow — contact me today to begin this journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};






const Counts = () => {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div
            className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
            data-aos="fade-right"
            data-aos-delay="100"
          ></div>

          <div
            className="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="content d-flex flex-column justify-content-center">
              <h3>Industrial Attachment Capabilities</h3>
              <p>
                As a Software Engineering student at Bindura University of Science Education, 
                I am seeking industrial attachment to apply my academic knowledge in a practical environment 
                and contribute meaningfully to organizational goals.
              </p>

              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="10"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span>
                    <p>
                      <strong>Technical Skills</strong> Proficient in web development, programming languages 
                      (JavaScript, Python, C++, C#), and database management.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span>
                    <p>
                      <strong>Academic Projects</strong> Completed coursework projects involving responsive 
                      web applications, secure coding practices, and collaborative software development.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1"
                      data-purecounter-duration="4"
                      className="purecounter"
                    ></span>
                    <p>
                      <strong>Years of Experience</strong> One year of hands-on experience through academic 
                      projects and freelance practice, building a foundation for professional growth.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="3"
                      data-purecounter-duration="4"
                      className="purecounter"
                    ></span>
                    <p>
                      <strong>Academic Qualifications</strong> Ordinary Level Certificate, Advanced Level Certificate, 
                      and currently pursuing a Bachelor of Science Honours in Software Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End .content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export{ Counts ,About };
