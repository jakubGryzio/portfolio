import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/Contact.module.css";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle.jsx";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              If you want to contact me to join your team please send a message
              below or visit my socials.
            </p>
            <ul className={classes.contact__info__list}>
              <li className={classes.info__item}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Warsaw - Poland</p>
              </li>
              <li className={classes.info__item}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>jakubgryzio@gmail.com</p>
              </li>
              <li className={classes.info__item}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>501671746</p>
              </li>
            </ul>
            <div className={classes.social__links}>
              <Link href="https://github.com/jakubGryzio">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.facebook.com/kubagryzio/">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/jakub-gryzio/">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
