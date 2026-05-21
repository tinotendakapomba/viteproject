import React from "react";

const MyBio = () => {
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top header-inner-pages">
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <a href="index.html">TINO<span>.</span></a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto" href="index.html#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
              <li><a className="nav-link scrollto" href="index.html#portfolio">Portfolio</a></li>
            
              <li className="dropdown">
                <a href="#"><span>More</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="portfolio-details.html">Portfolio Details</a></li>
                  <li><a href="inner-page.html">My Bio</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="index.html#contact">Contact us</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#about" className="get-started-btn scrollto">Get Started</a>
        </div>
      </header>

      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>My Bio</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Bio</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="inner-page">
          <div className="container">
            <div className="bio-container">
              <h1>Tinotenda Kapomba</h1>
              <p>
                Hello! I'm Tinotenda Kapomba, a 20-year-old web designer born in Zimbabwe. 
                From a young age, I've been passionate about technology, which has shaped my journey into web development.
              </p>

              <p>
                I am currently pursuing a degree in Software Engineering at Bindura University. 
                Over the past two years, I've focused on designing and building websites, mastering React for front-end development, 
                and now expanding into backend technologies with Node.js and Next.js. 
                My goal is to create fully responsive, dynamic websites that deliver seamless user experiences.
              </p>

              <p>
                I understand that learning is a continuous journey, and I am committed to improving my skills every day. 
                Beyond web design, I also enjoy creating 3D games using Unreal Engine, with C++ as my primary programming language.
              </p>

              <div className="skills">
                <h2>Skills</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>React (Mastered)</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>JSX</li>
                  <li>Unreal Engine (C++)</li>
                </ul>
              </div>

              <p>
                I have a solid academic background with 12 passes at O-Level and additional passes at A-Level, 
                equipping me with strong analytical and problem-solving skills for web development.
              </p>

              <p className="contact">Let's connect and create something amazing together!</p>
            </div>
          </div>
        </section>
      </main>

      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>TINO<span>.</span></h3>
                  <p>
                    1653 Waterfalls <br />
                    HARARE, Zimbabwe<br /><br />
                    <strong>Phone:</strong> <a className="cta-btn" href="tel:+263781326971">0781326971
          </a><br />
                <strong>Email:</strong> 
                <a className="cta-btn" href="mailto:tinotendakapomba@gmail.com">
                tinotendakapomba@gmail.com
                </a><br />
                  </p>
                  <div className="social-links mt-3">
                    <br/>
                    <a href="https://www.instagram.com/tino.sigma" className="instagram"><i className="bx bxl-instagram"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Skills</h4>
                <ul>
             
                  <li><i className="bx bx-chevron-right"></i> <a href="index.html#services">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="index.html#services">Cyber Security</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="index.html#services">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyBio;
