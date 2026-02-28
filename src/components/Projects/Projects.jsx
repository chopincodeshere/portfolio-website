import React from "react";
import "./Projects.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { projectsData } from "./Data";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Selected work and builds</span>

      <Swiper
        className="projects__container container"
        loop={projectsData.length > 1}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={24}
        autoplay={
          projectsData.length > 1
            ? {
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id}>
            <article className="projects__card">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="projects__img"
              />

              <div className="projects__data">
                <span className="projects__category">{project.category}</span>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                <div className="projects__actions">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__button"
                  >
                    Live Demo <EastOutlinedIcon className="projects__button-icon" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__button projects__button--ghost"
                  >
                    Source <CodeRoundedIcon className="projects__button-icon" />
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
