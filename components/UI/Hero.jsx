import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/images/avatar.jpg";
import classes from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={classes.hero__content}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Jakub Gryzio</h2>
              <h5 className="mb-4">FullStack Developer</h5>
              <p>
                Hardworking, inventive and independent Geoinformatics student
                and Junior Software Developer. <br /> I am currently working on
                web and GIS solutions for a large transport company. In the
                future, <br /> I would like to fulfill myself as a Full Stack
                Developer. I appreciate working in an environment that will
                allow me to develop my skills.
              </p>
              <div>
                <button className="primary__btn">
                  <Link download href="cv/Jakub_GryzioENG.pdf">
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.hero__img}`}>
              <Image alt="avatar" src={avatar} width="300" height="400" />

              <div className={classes.hero__skills}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">3 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
