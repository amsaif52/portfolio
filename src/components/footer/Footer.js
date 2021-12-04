import Linkedin from "../assets/Linkedin";
import Facebook from "../assets/Facebook";
import Twitter from "../assets/Twitter";
import Instagram from "../assets/Instagram";

function Footer() {
  return (
    <footer className="app-footer">
      <div>
        <div className="app-footer-copyright">
          Copyright 2021 | Yakuta Izzy |{" "}
          <a href="mailto:yakuta.izzy@gmail.com">yakuta.izzy@gmail.com</a>
        </div>
        <ul className="app-footer-social">
          <li>
            <a href="mailto:yakuta.izzy@gmail.com">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="mailto:yakuta.izzy@gmail.com">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="mailto:yakuta.izzy@gmail.com">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="mailto:yakuta.izzy@gmail.com">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
