import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/haaaveyoumetjiiil/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/jil-patel-7722851b5"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/chopincodeshere"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

export default Social;
