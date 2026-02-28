import React from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CloseIcon from "@mui/icons-material/Close";
import AppsIcon from "@mui/icons-material/Apps";

function Header() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, showMenu] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <h3>
          <a href="index.html" className="nav__logo">
            Jil
          </a>
        </h3>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#home")}
              >
                <div className="nav__icon">
                  <HomeIcon />
                </div>{" "}
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#about")}>
                <div className="nav__icon">
                  <PersonIcon />
                </div>{" "}
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className={
                  activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#skills")}>
                <div className="nav__icon">
                  <LaptopChromebookIcon />
                </div>{" "}
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className={
                  activeNav === "#services" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#services")}>
                <div className="nav__icon">
                  <WorkIcon />
                </div>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className={
                  activeNav === "#projects" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#projects")}>
                <div className="nav__icon">
                  <AssignmentIcon />
                </div>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#testimonials" className={
                  activeNav === "#testimonials" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#testimonials")}>
                <div className="nav__icon">
                  <RateReviewIcon />
                </div>
                Testimonials
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#contact")}>
                <div className="nav__icon">
                  <QuestionAnswerIcon />
                </div>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav__close">
            <div className="nav__icon" onClick={() => showMenu(!toggle)}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <div className="nav__icon">
            <AppsIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
