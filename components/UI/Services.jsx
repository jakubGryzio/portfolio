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
            {badge === "App Development" && (
              <>
                <p>
                  I've been developing desktop applications to create new
                  features in a large desktop application. <br />I work on
                  source code created and maintained for many years.
                </p>
                <ul>
                  <p>Technologies</p>
                  <li>C#</li>
                  <li>.NET Framework 4.7.2</li>
                  <li>Windows Forms</li>
                </ul>
                <p>
                  I have developed desktop applications to compute massive
                  datasets or automate processes.
                </p>
                <ul>
                  <p>Technologies</p>
                  <li>Python</li>
                  <li>Pandas</li>
                  <li>Numpy</li>
                </ul>
              </>
            )}
            {badge === "Web Development" && (
              <>
                <p>I really love to create web applications and websites.</p>
                <p>Technologies</p>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML5</li>
                  <li>CSS 3</li>
                  <li>ReactJS</li>
                  <li>Angular</li>
                  <li>NextJS</li>
                </ul>
              </>
            )}
            {badge === "Full-Stack Development" && (
              <>
                <p>
                  I've been developing an full-stack applications by using a few
                  technologies.
                </p>
                <p>Backend</p>
                <ul>
                  <li>C# - ASP.NET 7.0</li>
                  <li>C# - .NET Framework 4.7.2</li>
                  <li>Python - Django</li>
                </ul>
                <p>Frontend</p>
                <ul>
                  <li>Angular</li>
                  <li>Blazor - MVVM</li>
                  <li>React</li>
                </ul>
                <p>I am familiar with relative and NoSQL databases.</p>
                <ul>
                  <li>PostgreSQL</li>
                  <li>Oracle</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Neo4j</li>
                </ul>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
