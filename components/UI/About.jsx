import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Slider from "react-slick";
import Image from "next/image";
import classes from "../../styles/About.module.css";
import django from "../../public/images/django.svg";
import react from "../../public/images/reactjs.svg";
import javascript from "../../public/images/javascript.svg";
import typescript from "../../public/images/typescript.svg";
import next from "../../public/images/nextjs.svg";
import python from "../../public/images/python.svg";
import postgres from "../../public/images/pgsql.svg";
import oracle from "../../public/images/oracle.svg";
import redis from "../../public/images/redis.svg";

const About = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={classes.about__content}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              I always solve programming problems willingly. So, I would really
              like to join a team, <br /> where I have got a place to develop my
              skills and add some value to the team.
            </p>

            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search a Lot
                </h6>
              </div>
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>
              <button className="secondary__btn">
                <Link download href="cv/JakubGryzio_ENG.pdf">
                  Download CV
                </Link>
              </button>
            </div>
          </Col>
          <Col lg="6">
            <Slider {...settings}>
              <div className="d-flex flex-colum gap-4 mb-3 mt-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image
                    alt="django"
                    src={django}
                    width={"100"}
                    height={"100"}
                  />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image alt="react" src={react} width={"100"} height={"100"} />
                </div>
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image
                    alt="python"
                    src={python}
                    width={"100"}
                    height={"100"}
                  />
                </div>
              </div>

              <div className="d-flex flex-colum gap-4 mb-3 mt-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image
                    alt="javascript"
                    src={javascript}
                    width={"100"}
                    height={"100"}
                  />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image alt="next" src={next} width={"100"} height={"100"} />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image
                    alt="typescript"
                    src={typescript}
                    width={"100"}
                    height={"100"}
                  />
                </div>
              </div>

              <div className="d-flex flex-colum gap-4 mb-3 mt-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image
                    alt="oracle"
                    src={oracle}
                    width={"100"}
                    height={"100"}
                  />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image
                    alt="postgres"
                    src={postgres}
                    width={"100"}
                    height={"100"}
                  />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image alt="redis" src={redis} width={"100"} height={"100"} />
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
