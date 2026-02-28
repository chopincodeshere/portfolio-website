import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

function Testimonials() {
  const isSingleTestimonial = Data.length === 1;

  return (
    <section className="testimonial section" id="testimonials">
        <h2 className="section__title">Client Testimonials</h2>
        <span className="section__subtitle">What people I worked with say</span>

        <Swiper className={`testimonial__container container ${isSingleTestimonial ? "testimonial__container--single" : ""}`}
            loop={!isSingleTestimonial}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={28}
            autoplay={
                isSingleTestimonial
                  ? false
                  : {
                      delay: 3800,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
            }
            pagination={{
                clickable: true,
            }}
            breakpoints={
                isSingleTestimonial
                  ? {}
                  : {
                      640: {
                          slidesPerView: 2,
                          centeredSlides: false,
                      },
                      992: {
                          slidesPerView: 2,
                          spaceBetween: 32,
                          centeredSlides: false,
                      },
                    }
            }
            modules={[Pagination, Autoplay]}
        >
            {Data.map(({id, image, title, role, description}) => {
                return (
                  <SwiperSlide className="testimonial__card" key={id}>
                    <div className="testimonial__profile">
                      {image ? (
                        <img
                          src={image}
                          className="testimonial__img"
                          alt={`${title} profile`}
                        />
                      ) : (
                        <AccountCircleIcon className="testimonial__img-icon" />
                      )}
                      <div>
                        <h3 className="testimonial__name">{title}</h3>
                        <span className="testimonial__role">{role}</span>
                      </div>
                    </div>

                    <p className="testimonial__description">{description}</p>
                  </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials
