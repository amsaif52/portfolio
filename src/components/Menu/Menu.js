import React from "react";
import { bool } from "prop-types";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <div
      open={open}
      aria-hidden={!isHidden}
      {...props}
      className={open ? "burgerMenu active" : "burgerMenu"}
    >
      <a href="/ux-design" tabIndex={tabIndex}>
        UX Design
      </a>
      <a href="/q-arts" tabIndex={tabIndex}>
        Q-Arts
      </a>
      <a href="/about-me" tabIndex={tabIndex}>
        About me
      </a>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
