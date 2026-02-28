import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Jil</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/haaaveyoumetjiiil//"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jil-patel-7722851b5"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/chopincodeshere"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>

        <span className="footer__copy">&#169; Jil Patel. All rigths reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
