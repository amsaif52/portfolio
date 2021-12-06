import Linkedin from "../assets/Linkedin";
import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Twitter from "../assets/Twitter";
import Title from "../common/Title";
import DisplayPicture from "../../assets/display_picture.jpg";
import { Fade } from "react-reveal";

function Main() {
  return (
    <div className="main">
      <Fade bottom duration={1000} distance="40px">
        <div className="main-hero-container">
          <div className="main-hero-left">
            <div className="main-hero-title">Hi There!</div>
            <div className="main-hero-title">My name is Yakuta</div>
            <div className="main-hero-text">
              I am an Indian raised in Dubai and settled in Oakville, Canada.
            </div>
            <div className="main-hero-text">
              I am passionate about UX Design, Aviation and have a side hustle
              called Q-Arts.
            </div>
            <div className="main-hero-text">
              Welcome to my space and feel free to reach out to me on any of
              these platforms.
            </div>
            <ul className="main-hero-social">
              <li>
                <a
                  href="https://www.linkedin.com/in/yakutaizzy/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin fill="#4A306D" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/yakuta.merchant.1/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Facebook fill="#4A306D" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/qartsbyyakuta/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Instagram fill="#4A306D" />
                </a>
              </li>
            </ul>
          </div>
          <div className="main-hero-right">
            <img src={DisplayPicture} alt="display" />
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="main-bottom-container">
          <Title title="Thank you for stopping by" />
          <div className="main-bottom-text marginTop">
            Appreciate you taking the time and checking out my portfolio. I’d
            love to hear some feedback in order to improve the same. Also, don’t
            be shy - Say Hi! Would be happy to connect with you!
          </div>
          <div className="main-bottom-text">Thanks Again!</div>
        </div>
      </Fade>
    </div>
  );
}

export default Main;
