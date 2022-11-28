import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/Services.module.css";
import ServicesItem from "./ServicesItem";
import {
  appDevelopmentText,
  webDevelopmentText,
  fullStackDevelopmentText,
} from "../../data/services";

const Services = () => {
  const [badge, setBadge] = useState("App Development");

  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={classes.services__container}>
              <div>
                <ServicesItem
                  onHover={() => setBadge("App Development")}
                  active={badge === "App Development"}
                  title="App Development"
                  icon="ri-apps-line"
                />
                <ServicesItem
                  onHover={() => setBadge("Web Development")}
                  active={badge === "Web Development"}
                  title="Web Development"
                  icon="ri-computer-line"
                />
              </div>
              <ServicesItem
                onHover={() => setBadge("Full-Stack Development")}
                active={badge === "Full-Stack Development"}
                title="Full-Stack Development"
                icon="ri-code-box-line"
              />
            </div>
          </Col>
          <Col lg="6" md="6" className={classes.service__title}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Good design</h3>
            <h3 className="mb-4">Useful solution</h3>
            {badge === "App Development" && <p>{appDevelopmentText}</p>}
            {badge === "Web Development" && <p>{webDevelopmentText}</p>}
            {badge === "Full-Stack Development" && (
              <p>{fullStackDevelopmentText}</p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
