import React from "react";
import "./Services.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import LanguageIcon from '@mui/icons-material/Language';
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Services() {
  const [toggleState, setToggleState] = React.useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <LanguageIcon className="services__icon" />
            <h3 className="services__title">
              Web <br /> Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <EastOutlinedIcon className="services__button-icon" />
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <CloseOutlinedIcon className="services__modal-close" onClick={() => setToggleState(0)} />

              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Providing quality work to clients and companies
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <TaskAltOutlinedIcon className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <TaskAltOutlinedIcon className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop Responsive Websites.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <CodeRoundedIcon className="services__icon" />
            <h3 className="services__title">
              App <br /> Developer
            </h3>
          </div>

          <div>
            <span className="services__button" onClick={() => toggleTab(2)}>
              View More <EastOutlinedIcon className="services__button-icon" />
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <CloseOutlinedIcon className="services__modal-close" onClick={() => setToggleState(0)} />

                <h3 className="services__modal-title">App Developer</h3>
                <p className="services__modal-description">
                  Providing quality work to clients and companies
                </p>

                <ul className="services__modal-services">
                  <li className="services__modal-service">
                    <TaskAltOutlinedIcon className="services__modal-icon" />
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <TaskAltOutlinedIcon className="services__modal-icon" />
                    <p className="services__modal-info">
                      I develop Responsive Websites.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <LaptopWindowsIcon className="services__icon" />
            <h3 className="services__title">
              Python <br /> Developer
            </h3>
          </div>
          <div>
            <span className="services__button" onClick={() => toggleTab(3)}>
              View More <EastOutlinedIcon className="services__button-icon" />
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <CloseOutlinedIcon className="services__modal-close" onClick={() => setToggleState(0)} />

                <h3 className="services__modal-title">Visual designer</h3>
                <p className="services__modal-description">
                  Providing quality work to clients and companies
                </p>

                <ul className="services__modal-services">
                  <li className="services__modal-service">
                    <TaskAltOutlinedIcon className="services__modal-icon" />
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <TaskAltOutlinedIcon className="services__modal-icon" />
                    <p className="services__modal-info">
                      I develop Responsive Websites.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <AssessmentIcon className="services__icon" />
            <h3 className="services__title">
              Data <br /> Analyst
            </h3>
          </div>
          <div>
            <span className="services__button" onClick={() => toggleTab(4)}>
              View More <EastOutlinedIcon className="services__button-icon" />
            </span>

            <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <CloseOutlinedIcon className="services__modal-close" onClick={() => setToggleState(0)} />

                <h3 className="services__modal-title">Data Analyst</h3>
                <p className="services__modal-description">
                  Providing quality work to clients and companies
                </p>

                <ul className="services__modal-services">
                  <li className="services__modal-service">
                    <TaskAltOutlinedIcon className="services__modal-icon" />
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <TaskAltOutlinedIcon className="services__modal-icon" />
                    <p className="services__modal-info">
                      I develop Responsive Websites.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
