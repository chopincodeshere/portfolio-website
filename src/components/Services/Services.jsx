import React from "react";
import "./Services.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";

function Services() {
  const [toggleState, setToggleState] = React.useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const services = [
    {
      id: 1,
      Icon: LanguageIcon,
      title: "Web Development",
      modalTitle: "Web Development",
      description:
        "Building responsive and production-ready web applications with 2.5 years of hands-on experience.",
      points: [
        "Develop modern, reusable UI components using React, Angular and JavaScript.",
        "Build responsive, accessible interfaces optimized for mobile and desktop.",
        "Integrate frontend applications with REST APIs and backend services.",
      ],
    },
    {
      id: 2,
      Icon: CodeRoundedIcon,
      title: "Software Development",
      modalTitle: "Software Development",
      description:
        "Delivering reliable software features end-to-end with a strong focus on clean code and maintainability.",
      points: [
        "Design and implement scalable application logic and business workflows.",
        "Write readable, testable code and improve existing modules through refactoring.",
        "Collaborate with teams to ship features, fix issues, and improve performance.",
      ],
    },
    {
      id: 3,
      Icon: LaptopWindowsIcon,
      title: "GenAI Development",
      modalTitle: "GenAI Development",
      description:
        "Creating practical GenAI-powered solutions that improve user productivity and automation.",
      points: [
        "Build AI-assisted features like chat, summarization, and content generation.",
        "Design prompt workflows and integrate LLM APIs into web applications.",
        "Implement guardrails, evaluation checks, and iterative tuning for better outputs.",
      ],
    },
  ];

  const activeService = services.find((service) => service.id === toggleState);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {services.map((service) => (
          <div className="services__content" key={service.id}>
            <div>
              <service.Icon className="services__icon" />
              <h3 className="services__title">{service.title}</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(service.id)}>
              View More <EastOutlinedIcon className="services__button-icon" />
            </span>
          </div>
        ))}
      </div>

      <div
        className={toggleState > 0 ? "services__modal active-modal" : "services__modal"}
        onClick={() => setToggleState(0)}
      >
        {activeService && (
          <div className="services__modal-content" onClick={(event) => event.stopPropagation()}>
            <CloseOutlinedIcon
              className="services__modal-close"
              onClick={() => setToggleState(0)}
            />

            <h3 className="services__modal-title">{activeService.modalTitle}</h3>
            <p className="services__modal-description">{activeService.description}</p>

            <ul className="services__modal-services">
              {activeService.points.map((point) => (
                <li className="services__modal-service" key={point}>
                  <TaskAltOutlinedIcon className="services__modal-icon" />
                  <p className="services__modal-info">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
