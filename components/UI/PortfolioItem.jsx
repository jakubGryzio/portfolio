import React from "react";
import classes from "../../styles/PortfolioItem.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, description, url, technologies } = props.item;
  return (
    <div className={classes.portfolio__item}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        <div className={classes.portfolio__technologies}>
          {technologies.map((item, index) => {
            return (
              <span className={classes.portfolio__technology} key={index}>
                {item}
              </span>
            );
          })}
        </div>
        <div className={classes.portfolio__description}>
          <p>{description}</p>
        </div>
      </div>

      <div className={classes.portfolio__url}>
        <button className="primary__btn">
          <Link href={url}>Open project</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
