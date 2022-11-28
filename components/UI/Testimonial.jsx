import React from "react";
import classes from "../../styles/Testimonial.module.css";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle.jsx";
import teamwork from "../../public/images/teamwork.svg";
import ehealth from "../../public/images/ehealth.jpeg";
import tomtom from "../../public/images/tomtom.jpg";
import fig from "../../public/images/fig.png";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="5" className={classes.testimonial__img}>
            <Image alt="network-img" src={teamwork} width="200" height="200" />
          </Col>
          <Col lg="6" md="7">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What are my achievements</h4>
            <Slider {...settings}>
              <div className={classes.testimonial__item}>
                <div className={classes.testimonial__client}>
                  <Image
                    alt="eHealth"
                    src={ehealth}
                    width="160"
                    height="90"
                  ></Image>
                  <div>
                    <h6>E-Health Hackathon</h6>
                    <h6>Hackathon</h6>
                  </div>
                </div>
                <p>
                  I have led the quadruple team to 4th place in the health
                  Hackathon. We have created a React-Native app to monitor the
                  health of patients with cardiac diseases.
                </p>
              </div>
              <div className={classes.testimonial__item}>
                <div className={classes.testimonial__client}>
                  <Image
                    alt="TomTom"
                    src={tomtom}
                    width="150"
                    height="80"
                  ></Image>
                  <div>
                    <h6>TomTom n.EXT</h6>
                    <h6>Hackathon</h6>
                  </div>
                </div>
                <p>
                  I have been a part of the team on TomTom Geospatial Hackathon,
                  which was second in their category. We have developed Kotlin
                  mobile app to rate fuel stations while navigating.
                </p>
              </div>
              <div className={classes.testimonial__item}>
                <div className={classes.testimonial__client}>
                  <Image alt="FIG" src={fig} width="160" height="90"></Image>
                  <div>
                    <h6>XXVII FIG Congress</h6>
                    <h6>Paper</h6>
                  </div>
                </div>
                <p>
                  I have made a presentation at FIG Young Surveyor Congress.
                  Together with my teammates, we have prepared a paper about the
                  web-based presentation of multisensorial 3D data on the
                  example of the Church of St. Augustine in Warsaw. I have been
                  responsible for web app development using CesiumJS.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
