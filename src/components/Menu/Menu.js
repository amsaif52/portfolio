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
      <a href="/about" tabIndex={tabIndex}>
        About
      </a>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
