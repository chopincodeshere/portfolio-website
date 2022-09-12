import React from "react";
import "./Qualifications.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Qualifications() {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <SchoolIcon className="qualification__icon" /> Education
          </div>

          <div
            className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <WorkIcon className="qualification__icon" /> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  Sardar Vallabhbhai Patel Institute of Technology, Vasad
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Android Developer</h3>
                <span className="qualification__subtitle">
                  Sardar Vallabhbhai Patel Institute of Technology, Vasad
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python Developer</h3>
                <span className="qualification__subtitle">
                  Sardar Vallabhbhai Patel Institute of Technology, Vasad
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 2021 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Data Analyst</h3>
                <span className="qualification__subtitle">
                  Sardar Vallabhbhai Patel Institute of Technology, Vasad
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 2022 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <h3 className="qualification__title">
                  Web Developer summer intern
                </h3>
                <span className="qualification__subtitle">
                  <a href="https://www.letsgrowmore.in/">LetsGrowMore</a>
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 1st May, 2022 - 1st June, 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;