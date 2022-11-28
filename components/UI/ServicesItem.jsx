import React from "react";
import classes from "../../styles/ServicesItem.module.css";

const ServicesItem = ({ title, icon, onHover, active }) => {
  return (
    <div
      onMouseOver={onHover}
      className={`${classes.service__item} ${
        active && classes.service__item_activate
      }`}
    >
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServicesItem;
