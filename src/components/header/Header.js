import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import WhiteBow from "../common/WhiteBow";
import Menu from "../Menu/Menu";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../Hooks/hooks";
import Burger from "../Burger/Burger";

function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <header className="app-header">
      <div className="app-header-container">
        <div ref={node} className="app-menu-burger">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="app-logo">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "app-menu-active bitTop" : "hideBow bitTop"
            }
          >
            <img src={Logo} alt="logo" />
            <span>
              <WhiteBow />
            </span>
          </NavLink>
        </div>
        <ul className="app-menu">
          <li className="app-menu-item">
            <NavLink
              to="/ux-design"
              className={(navData) =>
                navData.isActive
                  ? "app-menu-text app-menu-active"
                  : "app-menu-text hideBow"
              }
            >
              UX Design
              <span>
                <WhiteBow />
              </span>
            </NavLink>
          </li>
          <li className="app-menu-item">
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive
                  ? "app-menu-text app-menu-active"
                  : "app-menu-text hideBow"
              }
            >
              About
              <span>
                <WhiteBow />
              </span>
            </NavLink>
          </li>
          <li className="app-menu-item btn">
            <NavLink
              to="/contact-us"
              className={(navData) =>
                navData.isActive
                  ? "app-menu-text app-menu-active"
                  : "app-menu-text"
              }
            >
              Say Hi!
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
