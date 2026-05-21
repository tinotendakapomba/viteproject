import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css"

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
          <Swiper
            modules={[Autoplay, Pagination]}
            speed={400}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}          // 👈 show 3 slides at a time
            slidesPerGroup={1}         // 👈 move one slide per swipe/auto
            spaceBetween={30}          // 👈 spacing between slides
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 20 },
              480: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 30 },
              640: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 40 },
              992: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 50 },
            }}
            className="clients-slider"
          >
            <SwiperSlide><p>professionalism</p></SwiperSlide>
            <SwiperSlide><p>Adaptability</p></SwiperSlide>
            <SwiperSlide><p>Problem solving skills</p></SwiperSlide>
            <SwiperSlide><p>effective communication</p></SwiperSlide>
            <SwiperSlide><p>Team Player</p></SwiperSlide>
          </Swiper>

      </div>
    </section>
  );
};


const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={600}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1} // 👈 one testimonial at a time
          pagination={{ clickable: true }}
          className="testimonials-slider"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="assets/testimonials/student1.jpg"
                className="testimonial-img"
                alt="Lecturer"
              />
              <h3>Mr. P. Chaka </h3>
              <h4>Chairman: department of computer science</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Tinotenda has shown strong analytical and coding skills in his
                coursework. He is well-prepared to apply these abilities during
                industrial attachment. 

                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="assets/testimonials/student2.jpg"
                className="testimonial-img"
                alt="Peer"
              />
              <h3>Lincy</h3>
              <h4>Project Partner</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Collaborating with Tinotenda has shown me his teamwork and
                leadership qualities. He is eager to learn and contribute,
                making him an excellent candidate for attachment.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="assets/testimonials/student3.jpg"
                className="testimonial-img"
                alt="Supervisor"
              />
              <h3>2. Mr. D Ndumiyana </h3>
              <h4>Industrial Attachment coordinator</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Tinotenda adapted quickly to new technologies during his
                training. His initiative and curiosity will be valuable in an
                industrial setting.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="assets/testimonials/student4.jpg"
                className="testimonial-img"
                alt="Mentor"
              />
              <h3>Wersly</h3>
              <h4>Mentor</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                His passion for continuous learning and problem-solving makes
                him well-suited for industrial attachment opportunities.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 5 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="assets/testimonials/student5.jpg"
                className="testimonial-img"
                alt="Career Advisor"
              />
              <h3>Dr. Nilly</h3>
              <h4>Career Advisor</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Tinotenda’s academic foundation and enthusiasm for technology
                make him a strong candidate for industrial attachment. He is
                ready to contribute and grow in a professional environment.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};



export {Testimonials, Clients}
