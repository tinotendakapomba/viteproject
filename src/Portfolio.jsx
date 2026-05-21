import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Swiper from "swiper";
import Isotope from "isotope-layout";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css"


const Cta = () => {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>Call Tino to action</h3>
         <p><h6>
          contact me today to begin this  industrial attachment journey!
          </h6></p>
          <a className="cta-btn" href="tel:+263781326971">
            Call Tino
          </a>
        </div>
      </div>
    </section>
  );
};






const Portfolio = () => {
  useEffect(() => {
    // Portfolio Isotope and Filter
    let portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = document.querySelectorAll("#portfolio-flters li");

      portfolioFilters.forEach((filterEl) => {
        filterEl.addEventListener("click", function (e) {
          e.preventDefault();
          portfolioFilters.forEach((el) =>
            el.classList.remove("filter-active")
          );
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });

          portfolioIsotope.on("arrangeComplete", function () {
            // Refresh AOS animations after filtering
            if (window.AOS) {
              window.AOS.refresh();
            }
          });
        });
      });
    }

    // Initiate portfolio lightbox
    GLightbox({ selector: ".portfolio-lightbox" });

    // Portfolio details slider
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      { <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check my Portfolio</p>
        </div>

        {/* Filters */}
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Items */}
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Item 1 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-1.jpg" className="img-fluid" alt="App 1" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-2.jpg" className="img-fluid" alt="Web 3" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-3.jpg" className="img-fluid" alt="App 2" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-4.jpg" className="img-fluid" alt="Card 2" />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-5.jpg" className="img-fluid" alt="Web 2" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-6.jpg" className="img-fluid" alt="App 3" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 7 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-7.jpg" className="img-fluid" alt="Card 1" />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 8 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/portfolio/portfolio-8.jpg" className="img-fluid" alt="Card 3" />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
              </div>
            </div>
          </div>

          {/* Repeat for other portfolio items */}
          {/* ... copy the same structure for portfolio-2.jpg, portfolio-3.jpg, etc. */}
        </div>
      </div>
    </section>}
    </section>
  );
};



export { Cta, Portfolio };
       