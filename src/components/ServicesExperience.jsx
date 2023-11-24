import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-cloud",
      title: "Cloud Infrastructure Management",
      desc: "Manage and optime the use of cloud-based infrastructure, such as Amazon Web Services(AWS), Microsoft Azure, or Google Cloud Performance(GCP).",
      active: false,
    },
    {
      icon: "fa-wrench spanner",
      title: "Continous Integration and Deployment (CI/CD)",
      desc: "Automate the building,testing, and deployment of software, using tools like Jenkins, Travis CI, and CircleCI.",
      active: true,
    },
    {
      icon: "fa-gear",
      title: "Monitoring and Logging",
      desc: "Monitor the performance and health of your applications and infrastructure, and to collect and analyze log data to troubleshoot issues.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>12+</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>122+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
