import Linkedin from "../assets/Linkedin";
import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Twitter from "../assets/Twitter";
import Plane from "../../assets/plane.png";
import { Fade } from "react-reveal";
const About = () => {
  return (
    <>
      <Fade bottom duration={1000} distance="40px">
        <div className="about-container">
          <div className="about-title">Hi! I'm Yakuta</div>
          <div className="about-text">
            So glad you came here to know a little about me. This is the easiest
            way I could organize some key aspects of my life. Feel free to
            select any of the below to know more.
          </div>
          <ul className="about-list">
            <li>New Beginnings with UX Design.</li>
            <li>Passion and love filled side hustle, Q-Arts.</li>
            <li>An Eventful decade with Aviation.</li>
          </ul>
          <div className="about-text">
            I would love to connect with you, so please do say Hi!
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
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-about-header">New Beginnings with UX Design.</div>
        <div className="about-container">
          <div className="about-text">
            While I was looking for multiple different career options, my
            husband Ali, introduced me to UX Design. He not only encouraged me
            to explore the feild but also pushed me towards studying UX Design
            professionally first. After a couple of months or research and
            learning all possible aspects of studying UX Design, I finally
            applied for the Bootcamp Diploma at BrainStation.
          </div>
          <div className="about-text">
            It have been challenaging yet very rewarding to have studied UX
            design through such an intense diploma program and that too
            virtually. But I am very greatful to have completed it successfully.
            I have learnt so much in the last three months and would love to
            explore more in the years to come.
          </div>
          <div className="about-text">
            The different skills I have acquired in the last few months are -
            <br />
            Research & Strategy | Information Architecture | Wireframing &
            Protoyping | Usabilty Testing | Design Thinking | Project Management
          </div>
          <div className="about-text">
            The different platforms I know are -<br /> Figma | Sketch | InVision
            | Photoshop | Canva | Google Workspace | Microsoft Office
          </div>
          <div className="about-text">
            I am currently open for work, so please make sure to check out my UX
            Design section or contact me if you’re interested in working with
            me.
          </div>
          <div className="about-cont-btn">
            <a href="/ux-design" className="about-btn">
              UX Design
            </a>
            <a href="mailto:yakutaizzy@gmail.com" className="about-btn">
              Say Hi
            </a>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-about-header">
          Passion and Love filed side hustle, Q-Arts!
        </div>
        <div className="about-container">
          <div className="about-text">
            It all started as a hobby... As a child I was really interested in
            Calligraphy and would always admire large Arabic Calligraphy
            paintings. I did very small scale projects and would paint only for
            family and friends. Unitl one day, I was given an opportunity to
            commission a few Arabic Calligraphy paintings for a house in Canada.
            I started off by these rare opportunities and slowly turned it into
            a side hustle. I named Q-Arts after my son Qumail’s name as it ony
            successfully took off after he was born and I had a few hours to
            myself.
          </div>
          <div className="about-text">
            I do commissioned Arabic Calligraphy Paintings | Customized Baby
            Milestone Boards and Cards | Customized name boards for bedroom
            decor |<br />
            Customized Printed T-Shirts | Lots more!
          </div>
          <div className="about-text">
            If you wish to see more of my work and would like to connect with
            me, please check out my Q-Arts.
          </div>
          <div className="about-cont-btn">
            <a
              href="https://www.instagram.com/qartsbyyakuta/"
              target="_blank"
              className="about-btn"
              rel="noreferrer"
            >
              Q-Arts
            </a>
            <a href="mailto:yakutaizzy@gmail.com" className="about-btn">
              Say Hi
            </a>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-about-header">
          An Eventful decade with Aviation.
        </div>
        <div className="about-container noBottom">
          <div className="about-text">
            I stared working in the Aviation Industry at the age of eighteen
            years and there was no looking back since.
          </div>
          <div className="about-text">
            I grew in the industry and throughly enjoyed all the exposure I
            gained working through all the different roles I played with
            different Airlines.
          </div>
        </div>
      </Fade>
      <div className="plane-animation">
        <div className="holder">
          <img src={Plane} alt="plane" className="plane" />
          <div>
            <div className="plane-balloon">
              <div className="title">Emirates Airlines</div>
              <div className="sub-title">
                I started my career with Emirates and worked with them as a
                Travel Counsltant. I loved planning travel itnearies for people
                and was awarded employee of the month multiple times for
                achieving high sales and offering exceptional customer service.
              </div>
            </div>
            <div className="plane-balloon">
              <div className="title">Emirates Airlines</div>
              <div className="sub-title">
                I started my career with Emirates and worked with them as a
                Travel Counsltant. I loved planning travel itnearies for people
                and was awarded employee of the month multiple times for
                achieving high sales and offering exceptional customer service.
              </div>
            </div>
            <div className="plane-balloon">
              <div className="title">Emirates Airlines</div>
              <div className="sub-title">
                I started my career with Emirates and worked with them as a
                Travel Counsltant. I loved planning travel itnearies for people
                and was awarded employee of the month multiple times for
                achieving high sales and offering exceptional customer service.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fade bottom duration={1000} distance="40px">
        <div className="about-container noBottom">
          <div className="about-text">
            And that’s all about me for now. Thank you so much for taking the
            time to see my portfolio. As I said before, I would like to connect
            with you, so don’t feel shy and say hi! Would love to catch up,
            personally or virtually!
          </div>
          <div className="about-text highMargin">
            Designed by Yakuta Izzy
            <br />
            Developed by Ali Asgar Merchant.
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
