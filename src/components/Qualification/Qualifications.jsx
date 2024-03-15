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
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <SchoolIcon className="qualification__icon" /> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
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
                <h3 className="qualification__title">SSC</h3>
                <span className="qualification__subtitle">
                  Shree Ambe Vidyalaya, Vadodara
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 2017
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
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                  Shree Ambe Vidyalaya, Vadodara
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">College (Graduation)</h3>
                <span className="qualification__subtitle">
                  Sardar Vallabhbhai Patel Institute of Technology, Vasad
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> 2019 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
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

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Java Software Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  <a href="https://tecunique.com/">Tecunique Pvt. Ltd.</a>
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> Jan, 2023 - Jul, 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">PHP Laravel Developer</h3>
                <span className="qualification__subtitle">
                  <a href="https://kodecreators.com/">
                    Kode Creators Pvt. Lts.
                  </a>{" "}
                </span>
                <div className="qualification__calender">
                  <CalendarMonthIcon /> Nov, 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
