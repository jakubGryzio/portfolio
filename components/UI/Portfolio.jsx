import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import PortfolioItem from "./PortfolioItem";
import classes from "../../styles/Portfolio.module.css";
import portfolio from "../../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Web App");
  const [data, setData] = useState([]);

  useEffect(() => {
    const filtredData = portfolio.filter((item) => item.category === filter);
    setData(filtredData);
  }, [filter]);

  const setFilterHandler = (e) => {
    setFilter(e.target.innerHTML);
  };

  const activate = `${classes.tab__btn__activate}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="My portfolio" />
            <h4 className="mt-4">Some of my projects</h4>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`secondary__btn ${
                  filter === "Web App" ? activate : ""
                }`}
                onClick={setFilterHandler}
              >
                Web App
              </button>
              <button
                className={`secondary__btn ${
                  filter === "Mobile App" ? activate : ""
                }`}
                onClick={setFilterHandler}
              >
                Mobile App
              </button>
              <button
                className={`secondary__btn ${
                  filter === "Desktop App" ? activate : ""
                }`}
                onClick={setFilterHandler}
              >
                Desktop App
              </button>
            </div>
          </Col>
          {data?.map((item, index) => {
            return (
              <Col lg="4" md="4" sm="6" key={item.id}>
                <PortfolioItem item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
