import EmployeeScape from "../../assets/employeescape.jpg";
import MarketingWebsite from "../../assets/marketingwebsite.jpg";
import PatientFirst from "../../assets/patientfirst.jpg";
import Robinhood from "../../assets/robinhood.jpg";
import Title from "../common/Title";
import Card from "../common/Card";
import WhiteBow from "../common/WhiteBow";
import { Slide } from "react-reveal";
import { useLocation } from "react-router-dom";
import { Fade } from "react-reveal";
const designCards = [
  {
    imgSrc: EmployeeScape,
    caseName: "EmployeeScape",
    duration: "2 Weeks",
    role: "UX / UI Designer.",
    bodyText:
      "EmployeeScape is a solution built for mid to large organizations, who want to give their employees access to all the required resources in a seamless manner.",
    link: "/ux-design/employeescape",
  },
  {
    imgSrc: MarketingWebsite,
    caseName: "Marketing Website",
    duration: "3 Days",
    role: "UX / UI Designer.",
    bodyText:
      "In order to introduce EmployeeScape to our potiential users, a responsive marketing website is designed, with a desktop and mobile layout.",
  },
  {
    imgSrc: Robinhood,
    caseName: "BrainStation x Robinhood",
    duration: "24 Hours",
    role: "UX / UI Designer.",
    bodyText:
      "Our multidisciplinary team had to create a digital solution designed to educate both existing and prospective users so that they have a better understanding of crypotocurriencies and mobile trading.",
  },
  {
    imgSrc: PatientFirst,
    caseName: "Patients First",
    duration: "1 Week",
    role: "UX / UI Designer.",
    bodyText:
      "Patients First is a solution built for the Canadian Healthcare System dealing with the major challenge of accessing healthcare facilities for emering issues which tend to become chronic due to lack of access.",
  },
];
function Design() {
  const location = useLocation();
  return (
    <div className="app-design-container">
      <Fade bottom duration={1000} distance="40px">
        <div className="app-breadcrumbs">
          <a href="#intro">
            Intro |
            {(location?.hash === "#intro" || location?.hash === "") && (
              <span>
                <WhiteBow color="#4A306D" />
              </span>
            )}
          </a>
          <a href="#projects">
            {" "}
            Projects
            {location?.hash === "#projects" && (
              <span>
                <WhiteBow color="#4A306D" />
              </span>
            )}
          </a>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-card" id="intro">
          <div className="app-design-text">How did it all start ?</div>
          <div className="app-design-text">
            Life’s most beautiful phase started in 2019 when I became a mum to
            my lil baby boy. I took a short break from the Aviation Industry to
            settle down in the new shoes of motherhood. Ever since, I have been
            considering different career options that would compliment my
            personal life and give it a good balance.
          </div>
          <div className="app-design-text">
            My passion towards art and my problem solving skills that I have
            acquired from Aviation, guided me towards a career in UX Design. I
            aspire to learn and grow in the Industry, creating effective and
            meaningful solutions through design.
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <Title title="Project" id="projects" />
        {designCards.map((designCard, index) => (
          <Slide left={index % 2 === 1} right={index % 2 === 0} duration={1000}>
            <Card {...designCard} />
          </Slide>
        ))}
      </Fade>
    </div>
  );
}

export default Design;
