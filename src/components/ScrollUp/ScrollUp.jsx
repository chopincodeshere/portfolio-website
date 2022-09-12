import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./ScrollUp.css";

function ScrollUp() {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");

    if(window.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#home" className="scrollup">
      <ArrowUpwardIcon className="scrollup__icon" />
    </a>
  );
}

export default ScrollUp;
