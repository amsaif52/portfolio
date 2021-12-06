import Linkedin from "../assets/Linkedin";
import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";

function Footer() {
  return (
    <footer className="app-footer">
      <div>
        <div className="app-footer-copyright">
          Copyright 2021 | Yakuta Izzy |{" "}
          <a
            href="mailto:yakuta.izzy@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            yakuta.izzy@gmail.com
          </a>
        </div>
        <ul className="app-footer-social">
          <li>
            <a
              href="https://www.linkedin.com/in/yakutaizzy/"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/yakuta.merchant.1/"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/qartsbyyakuta/"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
