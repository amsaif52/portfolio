import Linkedin from "../assets/Linkedin";
import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Plane from "../../assets/plane.png";
import Stories from "../../assets/stories.png";
import CarouselOne from "../../assets/carousel/carousel-one.png";
import CarouselTwo from "../../assets/carousel/carousel-two.png";
import CarouselThree from "../../assets/carousel/carousel-three.png";
import CarouselFour from "../../assets/carousel/carousel-four.png";
import CarouselFive from "../../assets/carousel/carousel-five.png";
import { Fade } from "react-reveal";
import { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const About = () => {
  const [isScorllPlane, setIsScrollPlane] = useState(false);
  const [startScroll, setStartScroll] = useState(null);
  const inputRef = useRef();
  const inputPlaneRef = useRef();
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  useEffect(() => {
    const handleScroll = () => {
      const planeOffsetTop = inputRef?.current?.offsetTop;
      const planeOffsetTopHeight = inputRef?.current?.offsetHeight;
      if (window.pageYOffset > planeOffsetTop) {
        setIsScrollPlane(true);
        setStartScroll(null);
        if (
          window.pageYOffset >
          planeOffsetTop +
            planeOffsetTopHeight -
            inputPlaneRef?.current?.offsetHeight
        ) {
          setStartScroll({
            position: "absolute",
            top: planeOffsetTopHeight - inputPlaneRef?.current?.offsetHeight,
          });
          return;
        }
      } else {
        setIsScrollPlane(false);
        setStartScroll(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
            <li>
              <a href="#one">New Beginnings with UX Design.</a>
            </li>
            <li>
              <a href="#two">Passion and love filled side hustle, Q-Arts.</a>
            </li>
            <li>
              <a href="#three">An Eventful decade with Aviation.</a>
            </li>
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
        <div className="app-about-header" id="one">
          New Beginnings with UX Design.
        </div>
        <div className="about-container">
          <div className="about-text">
            While I was looking for different career options, my husband Ali,
            introduced me to UX Design. He not only encouraged me to explore the
            feild but also pushed me towards studying UX Design professionally.
            <br />
            After a couple of months of research and learning the various
            aspects of studying UX Design, I applied for the Bootcamp Diploma at
            BrainStation.
          </div>
          <div className="about-twin-container">
            <div className="about-twin-left-container">
              <div className="about-text">
                It has been quite challenging yet very rewarding to have studied
                UX design through such an intense diploma program and that too
                virtually. But I am very grateful to have completed it
                successfully. With a mix of experience and knowledge, I begin
                this new journey as a UX Designer.
              </div>
              <div className="about-text">
                The different skills I have acquired in the last few months are
                -
              </div>
              <ul className="about-list">
                <li>Research & Strategy</li>
                <li>Information Architecture</li>
                <li>Wireframing & Prototyping</li>
                <li>Usability Testing</li>
                <li>Design Thinking</li>
                <li>Project Management</li>
              </ul>
              <div className="about-text">
                The different platforms I know are -
              </div>
              <ul className="about-list">
                <li>Figma</li>
                <li>Sketch</li>
                <li>InVision</li>
                <li>Photoshop</li>
                <li>Canva</li>
                <li>Google Workspace</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
            <div className="about-twin-right-container">
              <img src={Stories} alt="Stories" className="Stories" />
            </div>
          </div>
          <div className="about-text">
            I am currently open for work, so please make sure to check out my UX
            Design section. You can also contact me if you’re interested in
            working with me.
          </div>
          <div className="about-cont-btn">
            <a href="/ux-design" className="about-btn">
              UX Design
            </a>
            <a
              href="mailto:yakutaizzy@gmail.com"
              className="about-btn"
              target="_blank"
              rel="noreferrer"
            >
              Say Hi
            </a>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-about-header" id="two">
          Passion and Love filed side hustle, Q-Arts!
        </div>
        <div className="about-container">
          <div className="about-text">
            It all started as a hobby... As a child I was really interested in
            Calligraphy and would always admire large Arabic Calligraphy
            paintings. I did very small scale projects and would paint only for
            family and friends. Until one day, I was given an opportunity to
            commission a few Arabic Calligraphy paintings for a house in Canada.
            I started off by these rare opportunities and slowly turned it into
            a side hustle. I named Q-Arts after my son Qumail’s name as it ony
            successfully took off after he was born and I had a few hours to
            myself.
          </div>
          <Slider {...settings} className="about-carousel">
            <div className="about-item">
              <img src={CarouselOne} alt="carousel one" />
            </div>
            <div className="about-item">
              <img src={CarouselTwo} alt="carousel two" />
            </div>
            <div className="about-item">
              <img src={CarouselThree} alt="carousel three" />
            </div>
            <div className="about-item">
              <img src={CarouselFour} alt="carousel four" />
            </div>
            <div className="about-item">
              <img src={CarouselFive} alt="carousel five" />
            </div>
          </Slider>
          <div className="about-text">I do commissioned -</div>
          <ul className="about-list">
            <li>Arabic Calligraphy Paintings</li>
            <li>Customized Baby Milestone Boards and Cards</li>
            <li>Customized name boards for bedroom decor</li>
            <li>Customized Printed T-Shirts and lots more!</li>
          </ul>
          <div className="about-text">
            If you wish to see more of my work and would like to connect with
            me, please check out my Q-Arts.
          </div>
          <div className="about-cont-btn">
            <a
              href="https://www.instagram.com/qartsbyyakuta/"
              className="about-btn"
              target="_blank"
              rel="noreferrer"
            >
              Q-Arts
            </a>
            <a
              href="mailto:yakutaizzy@gmail.com"
              className="about-btn"
              target="_blank"
              rel="noreferrer"
            >
              Say Hi
            </a>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-about-header" id="three">
          An Eventful decade with Aviation.
        </div>
        <div className="about-container noBottom">
          <div className="about-text">
            I stared working in the Aviation Industry at the age of eighteen
            years and there was no looking back since.
          </div>
          <div className="about-text">
            I grew in the industry and thoroughly enjoyed all the exposure I
            gained working through all the different roles I played with
            different Airlines.
          </div>
        </div>
      </Fade>
      <div
        className={isScorllPlane ? "plane-animation active" : "plane-animation"}
        ref={inputRef}
      >
        <div className="holder">
          <div className="planeContainer" style={startScroll}>
            <img
              src={Plane}
              alt="plane"
              className="plane"
              ref={inputPlaneRef}
            />
          </div>
          <div>
            <div className="plane-balloon">
              <div className="title">Emirates Airlines</div>
              <div className="sub-title">
                I started my career with Emirates and worked with them as a
                Travel Consultant. I loved planning travel itineraries for
                people and was awarded employee of the month multiple times for
                achieving high sales and offering exceptional customer service.
              </div>
            </div>
            <div className="plane-balloon">
              <div className="title">National Airlines </div>
              <div className="sub-title">
                Next I joined National as a Flights Coordinator and slowly
                worked my way up to an Aircraft Dispatcher. I worked multiple
                different roles with this small airline. And gather rich
                experience of working in an adhoc operational set up. I also
                found and managed the Cost Control Department of the airline and
                had achieved over 5% reduction in overall flight operation
                costs.
              </div>
            </div>
            <div className="plane-balloon">
              <div className="title">Air Canada</div>
              <div className="sub-title">
                And my last employer was Air Canada and I worked there as a
                Training Associate. I planned and organized initial pilot
                training and also managed training plans for all pilots on B787
                as well as for Embraer fleet. I absolutely enjoyed my work here
                and was exposed to a completely new aspect of the airline.
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
          <div
            className="about-text highMargin"
            style={{ textAlign: "center" }}
          >
            Designed by Yakuta Izzy
            <br />
            Developed by Ali Asgar Merchant
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
