import React from "react";
import "./style.css"

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        {/* Section Title */}
        <div className="section-title">
          <h2>Contact</h2>
          <p>Reach Out for Attachment Opportunities</p>
        </div>

        {/* Social Cards */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
          <div className="col">
            <a href="https://wa.me/263781326971" target="_blank" rel="noreferrer" className="card-link">
              <div className="card">
                <img src="assets/icons/whatsapp.jpg" className="card-img-top" alt="WhatsApp" />
                <div className="card-body">
                  <h5 className="card-title">WhatsApp</h5>
                  <p className="card-text">Message me directly to discuss industrial attachment opportunities.</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col">
            <a href="https://www.instagram.com/tino.sigma" target="_blank" rel="noreferrer" className="card-link">
              <div className="card">
                <img src="assets/icons/instagram.jpg" className="card-img-top" alt="Instagram" />
                <div className="card-body">
                  <h5 className="card-title">Instagram</h5>
                  <p className="card-text">Follow my journey as a Software Engineering student seeking attachment.</p>
                </div>
              </div>
            </a>
          </div>


  
        </div>

        {/* Contact Info & Form */}
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>1653 Waterfalls <br /> HARARE, Zimbabwe</p>
              </div>

              <div className="email">
            <a href="mailto:tinotendakapomba@gmail.com">
              <i className="bi bi-envelope"></i>
            </a>
            <h4>Email:</h4>
            <p>
              <a href="mailto:tinotendakapomba@gmail.com">tinotendakapomba@gmail.com</a>
            </p>
          </div>

          <div className="phone">
            <a href="tel:+263781326971">
              <i className="bi bi-phone"></i>
            </a>
            <h4>Dial:</h4>
            <p>
              <a href="tel:+263781326971">+263781326971</a>
            </p>
          </div>

            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message about attachment opportunities" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Footer Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>TINO<span>.</span></h3>
                <p>
                  1653 Waterfalls <br />
                  HARARE, Zimbabwe<br /><br />
                  </p>
                  <strong>Phone:</strong> <a className="cta-btn" href="tel:+263781326971">0781326971
          </a><br />
                <strong>Email:</strong> 
                <a className="cta-btn" href="mailto:tinotendakapomba@gmail.com">
                tinotendakapomba@gmail.com
                </a><br />

      
                <div className="social-links mt-3">
                 
                  <a href="https://www.instagram.com/tino.sigma" className="instagram"><i className="bx bxl-instagram"></i></a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Attachment Skills & Focus Areas</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development & Responsive Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Cybersecurity Awareness</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Programming Languages (JS, Python, C++)</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Database Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Team Collaboration</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Continuous Learning</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Stay Updated</h4>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Enter your email for attachment updates" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">Seeking Industrial Attachment — Tinotenda Kapomba</div>
    </footer>
  );
};

export { ContactSection, Footer };
