import WhiteBow from "../common/WhiteBow";
import EmployeeScapeImage from "../../assets/EmployeeScapeImage.png";
import Prototype from "../../assets/Prototype.jpg";
import DesignThinking from "../../assets/DesignThinking.png";
import DidYouKnow from "../../assets/DidYouKnow.jpg";
import KeyPoints from "../../assets/key-interview-points.jpg";
import Miro from "../../assets/miro.jpg";
import Rafael from "../../assets/rafael.jpg";
import Frame from "../../assets/frame.jpg";
import TaskFlow from "../../assets/taskFlow.jpg";
import Sketch from "../../assets/sketch.jpg";
import Sketch1 from "../../assets/sketch1.jpg";
import Sketch2 from "../../assets/sketch2.jpg";
import Prototype1 from "../../assets/prototype1.jpg";
import Prototype2 from "../../assets/prototype2.jpg";
import UserTesting from "../../assets/userTesting.jpg";
import UserTesting1 from "../../assets/userTesting1.jpg";
import UserTesting2 from "../../assets/userTesting2.jpg";
import LeftMock from "../../assets/leftMock.jpg";
import LeftMock1 from "../../assets/leftMock1.jpg";
import Mock1 from "../../assets/mock1.jpg";
import RowGroup from "../../assets/rowGroup.jpg";
import LeftTable from "../../assets/leftTable.jpg";
import RightTable from "../../assets/rightTable.jpg";
import GroupLow from "../../assets/groupLow.jpg";
import Proto1 from "../../assets/proto1.jpg";
import Proto2 from "../../assets/proto2.jpg";
import DesignUnit from "../../assets/designUnit.jpg";
import Sig from "../../assets/sig.jpg";
import ColorInjection from "../../assets/colorInjection.jpg";
import EmployeeScapeImage2 from "../../assets/employeeSign.jpg";
import Family from "../../assets/family.jpg";
import Designv3 from "../../assets/designv3.jpg";
import Desktopv3 from "../../assets/desktopV3.png";
import Mobilev3 from "../../assets/mobileV3.png";
import PrototypeVideo from "../../assets/Prototype.m4v";
import { Player, ControlBar } from "video-react";
import { Fade } from "react-reveal";

function EmployeeScape() {
  return (
    <div className="app-design-details-container">
      <div className="app-breadcrumbs">
        <a href="/ux-design#intro" className="fade">
          Intro |
        </a>
        <a href="/ux-design#projects" className="fade">
          {" "}
          Projects |
        </a>
        <a href onClick={(e) => e.preventDefault()}>
          {" "}
          EmployeeScape
          <span>
            <WhiteBow color="#4A306D" />
          </span>
        </a>
      </div>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design">
          <img src={EmployeeScapeImage} alt="employeescapeapp" />
          <div className="title">EmployeeScape</div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">Project Overview</div>
        <div className="app-design-detail-container">
          <div className="app-design-details">
            <div className="">Project Type:</div>
            <div className="">Academic - Nov-Dec 2021</div>
          </div>
          <div className="app-design-details">
            <div className="">Institution:</div>
            <div className="">BrainStation | Bootcamp Diploma</div>
          </div>
          <div className="app-design-details">
            <div className="">Role:</div>
            <div className="">
              UX Research | Wireframes | UI Design & Branding | Protoype
            </div>
          </div>
          <div className="app-design-details">
            <div className="">Tools:</div>
            <div className="">Figma | Invision | Photoshop</div>
          </div>
          <div className="app-design-details">
            <div className="">About:</div>
            <div className="">
              A potentional Intranet solution for mid to large organizations,
              who want to give their employees access to all the required
              resources and support in a seamless manner.
            </div>
          </div>
          <div className="app-design-details">
            <div className="">Goal:</div>
            <div className="">
              The ultimate goal is to assist new and seasonal employees feel
              comfortable and welcomed in an organization. EmployeeScape aims to
              give company employees a landscape view (clear and organised) of
              their overall company, their schedules, their training plans,
              their time off details and much more. EmployeeScape wants to
              assist employees complete their onboarding process easily and
              instantly feel acquainted to the their team too. Also, help them
              learn about their Benefits and perks and how they can utilise the
              same.
            </div>
          </div>
          <div className="app-prototype">
            <img src={Prototype} alt="prototype" />
            <a
              href="https://www.figma.com/proto/gmLNVQFgouLCiOvrjYUrRN/CAPSTONE-EMPLOYEESCAPE?page-id=0%3A1&node-id=1%3A4433&viewport=241%2C48%2C0.36&scaling=scale-down&starting-point-node-id=1%3A4433"
              className="app-design-detail-btn"
              rel="noreferrer"
              target="_blank"
            >
              View Prototype
            </a>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">Design Thinking</div>
        <div className="app-design-detail-text">What is Design Thinking ?</div>
        <div className="app-design-detail-text">
          In simple words, it is a process for creative problem solving. Design
          thinking has a human centered core and it encourages to focus on the
          needs of the end users. In our case, we are focused on the needs of
          the employees working for mid to large size companies.
        </div>
        <img
          src={DesignThinking}
          alt="Design thinking"
          className="app-design-detail-image"
        />
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">
          <svg
            width="66"
            height="57"
            viewBox="0 0 66 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.3075 0.00209507C16.5427 -0.0563822 10.822 2.14794 6.5376 6.43736C-0.478495 13.4613 -2.16925 24.1776 3.04132 32.9728C4.13065 34.8117 4.24093 36.2186 3.9179 37.7724C3.59489 39.3267 2.75393 41.0164 1.85617 43.0314C1.44517 43.9531 1.3711 44.9829 1.66571 45.9597C1.96032 46.9364 2.57683 47.8499 3.44729 48.7939C6.92476 52.5659 13.5588 56.1881 19.0789 56.9411C20.098 57.0804 21.1021 56.9874 21.9726 56.5028C22.8431 56.0183 23.5014 55.1891 23.9848 54.0998C24.4782 52.9876 24.8853 52.2157 25.2551 51.911C25.6249 51.607 26.0225 51.4683 27.2718 51.8258C28.1467 52.077 29.0467 52.3805 29.9768 52.5203C30.8294 52.6489 31.7572 52.6278 32.6144 52.2062C33.0137 52.405 33.4297 52.5326 33.853 52.5715C35.2759 52.7019 36.5998 52.1917 37.8812 51.8247C39.1309 51.4661 39.5286 51.6058 39.8979 51.9099C40.2677 52.214 40.6748 52.9859 41.1682 54.0987C41.6511 55.188 42.3082 56.0173 43.1782 56.5017C44.0487 56.9862 45.0544 57.0793 46.0737 56.94C51.5945 56.1876 58.2279 52.5648 61.7052 48.7928C62.5757 47.8488 63.1923 46.9343 63.4868 45.9586C63.7814 44.9817 63.7068 43.952 63.2964 43.0303C62.3986 41.0159 61.5566 39.3257 61.2346 37.7712C60.9116 36.2169 61.0219 34.8112 62.1112 32.9717C67.3224 24.1763 65.6315 13.4593 58.6149 6.43625C53.3409 1.15724 45.8927 -0.962944 38.8645 0.404747C38.2791 0.518915 37.6999 0.654248 37.1212 0.817421C35.5641 1.25572 34.041 1.88113 32.5768 2.67698C31.1121 1.88226 29.5889 1.25572 28.0323 0.817421C27.4536 0.654248 26.8761 0.519474 26.2908 0.404747C24.9703 0.149116 23.6377 0.0154541 22.3082 0.00209507H22.3075ZM22.2852 2.00979C23.4937 2.02204 24.7045 2.14401 25.9012 2.3768C26.4337 2.48039 26.9616 2.60848 27.4862 2.75663C28.5249 3.04846 29.5451 3.43551 30.5427 3.90165C27.8917 5.72229 25.2313 8.51356 23.4129 12.055C21.6758 15.4383 20.0736 19.7551 21.3372 24.4187C21.7594 25.9759 22.4734 26.8742 22.8693 27.5219C23.2642 28.1697 23.4557 28.5144 23.2692 29.7435C22.9506 31.847 21.7477 33.299 20.6299 35.7806C20.2757 36.5664 20.2662 37.4519 20.616 38.2043C20.9657 38.9572 21.7482 39.5609 22.6917 39.6511L25.8154 39.9529L25.7046 42.4474C25.6266 44.2117 26.3929 45.1557 28.0821 44.758C28.0119 45.0465 27.8755 45.2999 27.8844 45.6486C27.9067 46.4968 28.4497 47.3199 29.3642 48.0188C30.1717 48.6353 29.9623 48.5663 30.302 49.4463C30.4641 49.8667 30.6596 50.2376 30.8723 50.5729C30.6885 50.5729 30.4936 50.5612 30.2692 50.5278C29.5836 50.4242 28.7459 50.1552 27.8259 49.8918C26.2409 49.4373 24.8932 49.6033 23.9759 50.3574C23.0586 51.1126 22.6398 52.1556 22.1431 53.2768C21.7767 54.1038 21.3907 54.5204 20.9892 54.7443C20.5882 54.9676 20.0898 55.0484 19.3463 54.9476C14.5056 54.2876 7.93774 50.7044 4.91807 47.4292C4.1757 46.6245 3.76469 45.9328 3.5965 45.373C3.42775 44.8133 3.45615 44.3839 3.69508 43.8482C4.56722 41.8901 5.48777 40.109 5.88883 38.1771C6.28981 36.2457 6.08375 34.1533 4.77443 31.9435C0.0227973 23.9238 1.54546 14.2746 7.9572 7.85598C11.8534 3.95749 17.0484 1.95593 22.2857 2.00939L22.2852 2.00979ZM42.864 2.00979C48.0997 1.95633 53.2957 3.95789 57.191 7.85752C63.6029 14.2761 65.1245 23.9254 60.3738 31.945C59.0645 34.1549 58.8584 36.2478 59.2594 38.1787C59.6604 40.1101 60.581 41.8923 61.4532 43.8498C61.6915 44.3855 61.7211 44.8138 61.5518 45.3746C61.383 45.9343 60.9698 46.6265 60.2279 47.4307C57.2083 50.706 50.6428 54.2892 45.8011 54.9491C45.0576 55.0505 44.558 54.9697 44.1565 54.7458C43.7556 54.5225 43.3707 54.1054 43.0043 53.2784C42.5075 52.1573 42.0881 51.1135 41.1715 50.3589C40.2554 49.6037 38.9065 49.4389 37.3215 49.8933C35.9738 50.2793 34.7931 50.6368 34.0329 50.5678C33.2727 50.4987 32.7726 50.2637 32.1806 48.7277C31.8949 47.9881 31.6254 47.2207 30.5811 46.4232C29.8883 45.8936 29.9 45.7827 29.8956 45.5984C29.8911 45.4141 30.0676 44.8755 30.301 44.0062C30.531 43.1424 29.6026 42.429 28.8285 42.875C28.031 43.334 27.6868 43.1635 27.7141 42.5337L27.8322 39.8482C27.8589 39.2495 27.5654 38.5984 27.1321 38.2977C26.6994 37.997 26.3051 37.9764 26.0963 37.9563L22.8823 37.6478C22.258 37.5876 22.2897 37.0703 22.4629 36.6136C23.3306 34.3307 24.8466 32.7201 25.253 30.0453C25.4959 28.4397 25.0843 27.3041 24.5842 26.4827C24.0841 25.6624 23.609 25.106 23.281 23.8957C22.2123 19.9505 23.5522 16.1829 25.2007 12.9735C27.2686 9.706 29.9263 6.37068 33.0772 4.68976C34.5781 3.8889 36.1966 3.18719 37.6618 2.75777C38.187 2.60962 38.7149 2.48209 39.2467 2.37794C40.4447 2.14515 41.6555 2.02262 42.8639 2.01038L42.864 2.00979Z"
              fill="#02005E"
            />
          </svg>
          Empathise
        </div>
        <div className="sub-title">
          Let’s first discover our <span>Problem Space</span>
        </div>
        <div className="app-design-detail-text">
          In large organizations, employees new or old can experience confusion
          and feel intimidated due to lack of knowledge on where and how to seek
          support and get all the required employee resources.
        </div>
        <div className="app-design-detail-text">
          They often feel a sense of awkwardness in seeking help from management
          or superiors or even peers, in understanding company goals, policies
          or benefits.
        </div>
        <div className="app-design-detail-text">
          According to research by Gallup,
          <br /> “88 % of organizations don’t do a great job at onboarding their
          employee resulting in poor employee engagement with the organization
          and low employee retention.”
        </div>
        <div className="app-design-detail-text">
          These factors majorly influence the first 2 months of an employee at a
          new organization. Reworking on the onboarding process and offering a
          solid support are the potential areas for improvement.
        </div>
        <div className="sub-title">
          We dug deeper for our <span>Secondary Research</span>
        </div>
        <div className="app-design-detail-text">
          Most employees feel unprepared and confused right from day one and
          that carries along further. Such sentiments of confusion and not
          knowing one’s whereabouts clearly leads to affect work and
          productivity.
        </div>
        <div className="app-design-detail-text">
          As per research, employee engagement is the key to building a
          successful business. But driving employee engagement doesn't come easy
          - only 15% of employees are engaged with their companies. And employee
          engagement is directly proportional to the employee retention factor.
        </div>
        <div className="app-design-detail-text">
          A negative onboarding experience and no sense of support can result in
          new hires being 2 times more likely to look for other opportunities.
        </div>
        <div className="app-design-detail-text center">
          <div>
            <div className="app-design-detail-text">
              69% of employees are more likely to stay with a company for three
              years if they experienced great onboarding and felt an overall
              sense of belonging at their workplace. (source).
            </div>

            <div className="app-design-detail-text">
              Up to 20% of employee turnover happens in the first 45 days, while
              employees feel comfortable and confident in their workplace
              (source).
            </div>
          </div>
          <img src={DidYouKnow} alt="did you know?" />
          <a
            href="https://docs.google.com/presentation/d/1z7TkI23l2Kkv5ReUnP55SPCLvbTYQfwdqXZRaBnh2LM/edit#slide=id.p"
            className="imageSmall"
            rel="noreferrer"
            target="_blank"
          >
            More details on secondary research linked here.
          </a>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">Design Challenge</div>
        <div className="app-design-detail-text">
          Keeping the Problem Space in my mind and after the findings of my
          secondary research, I was fouced on asking myself a question that
          would guide me towards finding a effective and proactive solution.
        </div>
        <div className="app-design-detail-text">
          I have personally faced this problem in the past while working with
          large organizations and instantly connect to the problem as an end
          user - a company employee.
        </div>
        <div className="app-design-detail-text">So we asked ....</div>
        <div className="app-design-focus-blue">
          <div>
            How Might We.... assist new and seasoned employees to easily access
            the required resources and company related information so that they
            can be self sufficient and feel more confident in the workplace ?{" "}
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.0003 51.9572C16.3407 51.9572 6.04199 41.6585 6.04199 28.9996C6.04199 16.3404 16.3415 6.04199 29.0003 6.04199C41.6599 6.04199 51.9586 16.3412 51.9586 28.9996C51.9586 41.6588 41.6595 51.9572 29.0003 51.9572ZM29.0003 8.45806C17.673 8.45806 8.45813 17.6727 8.45813 28.9996C8.45813 40.3265 17.673 49.5412 29.0003 49.5412C40.3275 49.5412 49.5424 40.3265 49.5424 28.9996C49.5424 17.6727 40.3275 8.45806 29.0003 8.45806Z"
              fill="#02005E"
            />
            <path
              d="M29.0003 44.7087C20.3386 44.7087 13.2915 37.6621 13.2915 29.0004C13.2915 28.3332 13.8327 27.792 14.4999 27.792C15.1671 27.792 15.7083 28.3331 15.7083 29.0004C15.7083 36.3292 21.6711 42.2915 28.9998 42.2915C34.2842 42.2915 39.0671 39.1624 41.1844 34.3201C41.4519 33.7086 42.164 33.4294 42.7755 33.6974C43.387 33.965 43.6658 34.677 43.3982 35.2885C40.8961 41.0107 35.244 44.7081 28.9997 44.7081L29.0003 44.7087Z"
              fill="#02005E"
            />
            <path
              d="M43.5003 30.2081C42.8331 30.2081 42.2919 29.667 42.2919 28.9998C42.2919 21.6709 36.3291 15.7086 29.0003 15.7086C23.8195 15.7086 19.0751 18.7523 16.913 23.4626C16.6347 24.0689 15.9174 24.3351 15.3107 24.0568C14.7039 23.7785 14.4381 23.0612 14.7164 22.4545C17.2716 16.8885 22.8779 13.292 29 13.292C37.6617 13.292 44.7088 20.3386 44.7088 29.0003C44.7088 29.6675 44.1676 30.2087 43.5004 30.2087L43.5003 30.2081Z"
              fill="#02005E"
            />
            <path
              d="M29.0003 38.667C23.6702 38.667 19.3335 34.3304 19.3335 29.0005C19.3335 23.6705 23.6702 19.334 29.0003 19.334C34.3303 19.334 38.667 23.6705 38.667 29.0005C38.667 34.3304 34.3303 38.667 29.0003 38.667ZM29.0003 21.7512C25.0023 21.7512 21.7502 25.0033 21.7502 29.001C21.7502 32.9987 25.0024 36.2509 29.0003 36.2509C32.9981 36.2509 36.2503 32.9987 36.2503 29.001C36.2503 25.0033 32.9981 21.7512 29.0003 21.7512Z"
              fill="#02005E"
            />
            <path
              d="M29.0004 27.7915C28.3332 27.7915 27.792 27.2504 27.792 26.5832V1.20837C27.792 0.541201 28.3332 0 29.0004 0C29.6676 0 30.2088 0.541146 30.2088 1.20837V26.5832C30.2088 27.2503 29.6676 27.7915 29.0004 27.7915Z"
              fill="#02005E"
            />
            <path
              d="M29.0004 57.9999C28.3332 57.9999 27.792 57.4588 27.792 56.7916V32.6254C27.792 31.9582 28.3332 31.417 29.0004 31.417C29.6676 31.417 30.2088 31.9581 30.2088 32.6254V56.7916C30.2088 57.4587 29.6676 57.9999 29.0004 57.9999Z"
              fill="#02005E"
            />
            <path
              d="M56.7915 30.2087H31.4159C30.7487 30.2087 30.2075 29.6676 30.2075 29.0004C30.2075 28.3331 30.7487 27.792 31.4159 27.792H56.7915C57.4586 27.792 57.9998 28.3331 57.9998 29.0004C57.9998 29.6676 57.4587 30.2087 56.7915 30.2087Z"
              fill="#02005E"
            />
            <path
              d="M25.3753 30.2087H1.2084C0.541218 30.2087 0 29.6676 0 29.0004C0 28.3331 0.541162 27.792 1.2084 27.792H25.3753C26.0425 27.792 26.5837 28.3331 26.5837 29.0004C26.5837 29.6676 26.0425 30.2087 25.3753 30.2087Z"
              fill="#02005E"
            />
          </svg>
          Define
        </div>
        <div className="sub-title">
          Next it was important to conduct some <span>Primary Research</span>
        </div>
        <div className="app-design-detail-text">
          At this stage, I have gathered some intertesing facts through
          secondary research. However the 101 rule of User Experiecne is
          listening to users. Hence, I need to do some primary research by
          hosting Interviews with the end users - which are employees working
          for large organizations. Understanding their thoughts, feelings and
          perspective would draw me closer to finding a effective solution.
        </div>
        <div className="app-design-detail-text">
          I interiwed six professionals working for large organizations to
          better understand the problem space. And this is what they had to say.
        </div>
        <div className="app-define-container">
          <img src={Miro} alt="miro" />
          <div className="app-define-testimonials">
            <div>
              <div className="app-define-text">
                “A little more hand holding and more guidance when i joined
                would be great. Allowing me the time to soak in the organization
                and focus on my training program and follow a training schedule.
                Rather than putting me in a fire baptised method.”
              </div>
              <div className="app-define-quote">
                ~ Zohar Campwala | Head of Operations | MSB Pvt School.
              </div>
            </div>
            <div>
              <div className="app-define-text">
                “Whenever i join a new company the first week is extremely slow
                and the HR usually takes long to respond to you and it’s a waste
                of time. If the onboarding goes well and is on point i feel more
                confident about the company. However, a bad onboarding
                experience leave me with a very unsatisfied feeling to the
                decision i have made to join this particular company. I feel
                demotivated and left out.”
              </div>
              <div className="app-define-quote">
                ~ Ali Merchant | Tech Lead | Atimi
              </div>
            </div>
            <div>
              <div className="app-define-text">
                “The fact that it was virtual and didn't have any guidance
                regarding my first day. Also jittery about having my first call
                directly upfront with the whole team and not knowing the team at
                all. I would have really liked a prep call prior with my
                manager.”
              </div>
              <div className="app-define-quote">
                ~ Salima Venkani | Sr. Technical Learning Architect | Air
                Canada.
              </div>
            </div>
          </div>
        </div>
        <img
          src={KeyPoints}
          alt="Key Interview Points"
          className="img-key-points"
        />
        <div className="sub-title">
          Let’s look at the <span>Key Insights and Findings</span>
        </div>
        <ul className="list-container">
          <li>
            <div className="list-text">1. Anxious about the company</div>
            <div className="list-content">
              It is natural to feel nervous and clueless before the first day at
              work. However, employees feel very confident if they know more
              details about their first day before hand, It helps them prepare
              for the same. The excitement level increases or decreases
              depending on their first day experience.
            </div>
          </li>
          <li>
            <div className="list-text">
              2. Wants to know more about the team.
            </div>
            <div className="list-content">
              It helps employees to know and meet the team before they are
              expected to work independently. A good introduction and rapport
              with team mates is very motivating.
            </div>
          </li>
          <li>
            <div className="list-text">3. Wants to feel motivated.</div>
            <div className="list-content">
              Employees feel like they work best and engage better with an
              organization when there is a great onboarding and On job training.
            </div>
          </li>
        </ul>
        <div className="sub-title">
          <span>Persona Development </span>
        </div>
        <div className="app-design-detail-text">
          After analyzing my research, synthesized data and key insights, I have
          created my persona. Also for story telling purpose, I have created a
          fake airline - Just to establish the fact that my persona works for a
          large organization. And also because I understand the working of an
          Airline better than a normal organization. However, I am focused on a
          broad solution, which will work amongst all different kinds of
          organizations and is not limited to an Airline.
        </div>
        <div className="app-design-detail-text">
          Let me introduce you to Rafael Merchant - He is Aircraft Dispatcher
          who has been working in the Aviation Industry for more than a decade.
          He absolutely enjoys working in Flight Operations and is now hired by
          a reputed airline on a new position.
        </div>
        <img src={Rafael} alt="rafael" className="img-key-points" />
        <div className="sub-title">
          The next step is to create a <span>Experience Map</span>
        </div>
        <div className="app-design-detail-text">
          Using my persona - Rafael, I develped an experience map to help
          understand the aniexty and anixousness a employee goes through before
          joining a new company. And what is the typical process they are
          expected to go through.
        </div>
        <img src={Frame} alt="frame" className="img-key-points" />
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">
          <svg
            width="58"
            height="68"
            viewBox="0 0 58 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.9997 7.80768C29.2954 7.80768 29.5793 7.69017 29.7884 7.48103C29.9975 7.2719 30.115 6.98807 30.115 6.6923V1.11538C30.115 0.499437 29.6156 0 28.9997 0C28.3837 0 27.8843 0.499437 27.8843 1.11538V6.6923C27.8843 6.98807 28.0018 7.2719 28.2109 7.48103C28.4201 7.69017 28.7039 7.80768 28.9997 7.80768Z"
              fill="#02005E"
            />
            <path
              d="M12.4376 14.0161C12.6457 14.2312 12.931 14.3537 13.2303 14.3562C13.5296 14.3592 13.8174 14.2412 14.0285 14.0296C14.2401 13.8185 14.3581 13.5306 14.3551 13.2314C14.3527 12.9321 14.2302 12.6468 14.015 12.4387L10.0709 8.49493C9.86329 8.27932 9.57747 8.15683 9.2782 8.15434C8.97893 8.15185 8.69162 8.26936 8.48001 8.48098C8.26838 8.69261 8.15087 8.97992 8.15336 9.27918C8.15585 9.57844 8.27834 9.86425 8.49395 10.0719L12.4376 14.0161Z"
              fill="#02005E"
            />
            <path
              d="M1.11538 30.1136H6.6923C7.30825 30.1136 7.80768 29.6141 7.80768 28.9982C7.80768 28.3822 7.30825 27.8828 6.6923 27.8828H1.11538C0.499437 27.8828 0 28.3822 0 28.9982C0 29.6141 0.499437 30.1136 1.11538 30.1136Z"
              fill="#02005E"
            />
            <path
              d="M9.28264 49.8329C9.57842 49.8329 9.86225 49.7154 10.0714 49.5062L14.0155 45.5621V45.5626C14.4378 45.1249 14.4318 44.4288 14.0016 43.9985C13.5713 43.5682 12.8757 43.5623 12.438 43.9851L8.49424 47.9292C8.17506 48.2479 8.07996 48.7279 8.25225 49.1447C8.42504 49.5615 8.83135 49.8328 9.28248 49.8328L9.28264 49.8329Z"
              fill="#02005E"
            />
            <path
              d="M48.7175 49.831C49.1687 49.831 49.575 49.5596 49.7478 49.1428C49.9201 48.726 49.825 48.246 49.5058 47.9273L45.5617 43.9832H45.5622C45.354 43.7681 45.0687 43.6456 44.7694 43.6426C44.4702 43.6401 44.1824 43.7581 43.9712 43.9693C43.7596 44.1809 43.6416 44.4687 43.6446 44.768C43.6471 45.0672 43.7696 45.3525 43.9847 45.5607L47.9288 49.5048V49.5043C48.1379 49.7134 48.4218 49.831 48.7175 49.831V49.831Z"
              fill="#02005E"
            />
            <path
              d="M51.3078 30.1136H56.8847C57.5006 30.1136 58.0001 29.6141 58.0001 28.9982C58.0001 28.3822 57.5006 27.8828 56.8847 27.8828H51.3078C50.6918 27.8828 50.1924 28.3822 50.1924 28.9982C50.1924 29.6141 50.6918 30.1136 51.3078 30.1136Z"
              fill="#02005E"
            />
            <path
              d="M44.7734 14.3427C45.0692 14.3427 45.353 14.2252 45.5622 14.016L49.5063 10.0719H49.5058C49.7214 9.86426 49.8439 9.57844 49.8464 9.27918C49.8489 8.97991 49.7314 8.6926 49.5197 8.48098C49.3081 8.26935 49.0208 8.15185 48.7216 8.15434C48.4223 8.15683 48.1365 8.27932 47.9288 8.49493L43.9847 12.4391V12.4386C43.666 12.7577 43.5704 13.2372 43.7432 13.654C43.916 14.0708 44.3223 14.3427 44.7734 14.3427Z"
              fill="#02005E"
            />
            <path
              d="M21.387 46.4013L20.7457 50.2918C20.6924 50.615 20.784 50.9451 20.9961 51.1945C21.2082 51.444 21.519 51.5879 21.8466 51.5879H22.0328L22.2938 54.1199H21.8476C21.2317 54.1199 20.7322 54.6193 20.7322 55.2353V60.009C20.7322 60.3048 20.8497 60.5886 21.0589 60.7977C21.268 61.0069 21.5518 61.1244 21.8476 61.1244H23.0153L23.1188 62.1452H23.1193C23.1587 63.5374 23.8204 64.839 24.9228 65.6909C26.081 66.6091 27.5211 67.1001 28.9994 67.0806C32.216 67.0806 34.8372 64.8723 34.8775 62.145L34.9811 61.1243H36.1488C36.4445 61.1243 36.7284 61.0067 36.9375 60.7976C37.1466 60.5885 37.2641 60.3046 37.2641 60.0089V55.2352C37.2641 54.9394 37.1466 54.6556 36.9375 54.4464C36.7284 54.2373 36.4445 54.1198 36.1488 54.1198H35.7026L35.9635 51.5878H36.1503C36.4774 51.5878 36.7886 51.4439 37.0002 51.1944C37.2124 50.945 37.304 50.6148 37.2512 50.2917L36.6119 46.4012C41.9777 44.0524 45.9591 39.3578 47.3997 33.6804C48.8408 28.0023 47.58 21.9778 43.9833 17.355C40.3867 12.7315 34.8571 10.0273 28.999 10.0273C23.1408 10.0273 17.6116 12.7317 14.0146 17.355C10.4179 21.9784 9.15724 28.0029 10.5982 33.6804C12.0388 39.3578 16.0202 44.0524 21.386 46.4012L21.387 46.4013ZM35.0329 56.3507V58.8936H22.9649V56.3507H35.0329ZM32.6503 61.9699V62.0815C32.6503 63.6072 31.0141 64.8475 29.003 64.8475H29.0035C28.0414 64.8619 27.1028 64.5497 26.3409 63.9621C25.7444 63.517 25.3824 62.8253 25.356 62.0814V61.9699L25.2679 61.1244H32.7475L32.6503 61.9699ZM33.4605 54.1199H24.5374L24.2775 51.5879H33.7159L33.4605 54.1199ZM25.6528 33.463H23.422C22.8305 33.463 22.2628 33.228 21.8446 32.8097C21.4263 32.3915 21.1913 31.8238 21.1913 31.2322C21.1913 30.6407 21.4263 30.073 21.8446 29.6548C22.2628 29.2365 22.8305 29.0015 23.422 29.0015C24.0136 29.0015 24.5812 29.2365 24.9995 29.6548C25.4178 30.073 25.6528 30.6407 25.6528 31.2322V33.463ZM28.999 12.2707C34.2627 12.2682 39.2211 14.741 42.3874 18.9461C45.5528 23.1516 46.5571 28.6011 45.0987 33.6589C43.6403 38.7165 39.8888 42.7941 34.9701 44.6683C34.4732 44.8576 34.1794 45.3709 34.2675 45.8953L34.8352 49.3619H32.3455V45.7324C32.3455 45.1164 31.8461 44.617 31.2301 44.617C30.6142 44.617 30.1148 45.1164 30.1148 45.7324V49.3574H27.884V35.6937H30.1148V36.809C30.1148 37.425 30.6142 37.9244 31.2301 37.9244C31.8461 37.9244 32.3455 37.425 32.3455 36.809V35.6937H34.5763C35.7594 35.6937 36.8943 35.2236 37.7312 34.3871C38.5678 33.55 39.0378 32.4152 39.0378 31.2321C39.0378 30.049 38.5678 28.9142 37.7312 28.0772C36.8942 27.2406 35.7594 26.7706 34.5763 26.7706C33.3932 26.7706 32.2583 27.2406 31.4214 28.0772C30.5848 28.9142 30.1148 30.049 30.1148 31.2321V33.4629H27.884V31.2321C27.884 30.049 27.4139 28.9142 26.5774 28.0772C25.7404 27.2406 24.6055 26.7706 23.4225 26.7706C22.2394 26.7706 21.1045 27.2406 20.2675 28.0772C19.431 28.9142 18.9609 30.049 18.9609 31.2321C18.9609 32.4152 19.431 33.5501 20.2675 34.3871C21.1046 35.2236 22.2394 35.6937 23.4225 35.6937H25.6532V49.3574H23.1636L23.7312 45.8908C23.8194 45.3665 23.5256 44.8531 23.0286 44.6639C18.1139 42.7871 14.367 38.71 12.9105 33.6545C11.454 28.5994 12.4579 23.1534 15.6208 18.9493C18.7837 14.7456 23.7388 12.2724 28.9991 12.2709L28.999 12.2707ZM32.3451 33.463V31.2322C32.3451 30.6407 32.5801 30.073 32.9984 29.6548C33.4167 29.2365 33.9843 29.0015 34.5759 29.0015C35.1674 29.0015 35.7351 29.2365 36.1533 29.6548C36.5716 30.073 36.8066 30.6407 36.8066 31.2322C36.8066 31.8238 36.5716 32.3915 36.1533 32.8097C35.7351 33.228 35.1674 33.463 34.5759 33.463H32.3451Z"
              fill="#02005E"
            />
            <path
              d="M28.9997 16.7308C32.2591 16.7348 35.3837 18.0309 37.6882 20.3358C39.9931 22.6403 41.2898 25.7654 41.2932 29.0243C41.2932 29.6403 41.7927 30.1397 42.4086 30.1397C43.0246 30.1397 43.524 29.6403 43.524 29.0243C43.5195 25.1738 41.9878 21.482 39.2651 18.7589C36.5425 16.0362 32.8502 14.5045 28.9997 14.5C28.3837 14.5 27.8843 14.9994 27.8843 15.6154C27.8843 16.2313 28.3837 16.7308 28.9997 16.7308Z"
              fill="#02005E"
            />
            <path
              d="M25.6536 16.7306C25.6536 17.3466 25.1542 17.846 24.5382 17.846C23.9223 17.846 23.4229 17.3466 23.4229 16.7306C23.4229 16.1147 23.9223 15.6152 24.5382 15.6152C25.1542 15.6152 25.6536 16.1147 25.6536 16.7306Z"
              fill="#02005E"
            />
            <path
              d="M32.346 41.2697C32.346 41.8856 31.8466 42.3851 31.2306 42.3851C30.6147 42.3851 30.1152 41.8856 30.1152 41.2697C30.1152 40.6537 30.6147 40.1543 31.2306 40.1543C31.8466 40.1543 32.346 40.6537 32.346 41.2697Z"
              fill="#02005E"
            />
          </svg>
          Ideate
        </div>
        <div className="sub-title">
          <span>User Stories</span>
        </div>
        <div className="app-design-detail-text">
          To start with the ideating process, I first need to determine the
          functionality and tasks that my digital solution will have. And in
          order to determine these features, I first created 32 user stories
          with multiple epics. And then shortlisted one epic to determine my
          primary task flow.
        </div>
        <div className="app-design-detail-text">
          Epic - <span>Checking my Schedule</span>
        </div>
        <div className="app-design-detail-text">
          Providing employees with their schedule over intranet gives them an
          opportunity to plan for day, week or month accordingly. Which directly
          results in efficiency and preparedness in an employee.
        </div>
        <div className="app-design-detail-text">
          Below are the user stories created for the epic - Checking my
          schedule.
        </div>
        <table className="first">
          <tr>
            <th>As a</th>
            <th>I want to</th>
            <th>So that</th>
          </tr>
          <tr>
            <td>new employee</td>
            <td>be able to check my schedule for my first day</td>
            <td>I can be prepared for the same.</td>
          </tr>
          <tr>
            <td>new employee</td>
            <td>be able to check my schedule for my first day</td>
            <td>
              I am able to figure out who I'm supposed to report to in my team.
            </td>
          </tr>
          <tr>
            <td>new employee </td>
            <td>be able to check my schedule for my first day</td>
            <td>
              I can figure out the location I need to reach and to be on time.
            </td>
          </tr>
        </table>
        <div className="app-design-detail-text">
          Epic - <span>Messaging colleagues</span>
        </div>
        <div className="app-design-detail-text">
          Providing employees a platform to instantly connect with their
          colleagues. I am aiming towards a digital solution that enables
          employees to learn more about their colleagues and they can connect
          with them as well.
        </div>
        <div className="app-design-detail-text">
          Below are the user stories created for the epic - messaging colleagues
        </div>
        <table className="second">
          <tr>
            <th>As a</th>
            <th>I want to</th>
            <th>So that</th>
          </tr>
          <tr>
            <td>new employee</td>
            <td>be able to message my boss</td>
            <td>I can connect with him proactively.</td>
          </tr>
          <tr>
            <td>employee</td>
            <td>be able to message my peers</td>
            <td>I am able to instantly conversate with them.</td>
          </tr>
          <tr>
            <td>new employee</td>
            <td>be able to message my boss</td>
            <td>
              I can reach out to him easily if there are any issues I face on
              the first day.
            </td>
          </tr>
        </table>
        <div className="sub-title">
          Based on the above user stories, we created our <span>Task Flow</span>
        </div>
        <img
          src={TaskFlow}
          alt="frame"
          className="img-key-points"
          style={{ maxWidth: "989px" }}
        />
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.1003 35.0995V8.69969C55.0973 7.84482 54.8108 7.01541 54.286 6.34053C53.7612 5.66604 53.028 5.18399 52.2003 4.97044V3.86657C52.2003 2.84124 51.7929 1.85772 51.0679 1.13235C50.3425 0.407371 49.3589 0 48.3336 0H3.86669C2.84133 0 1.85778 0.407371 1.13239 1.13235C0.407383 1.85776 0 2.84127 0 3.86657V45.4322C0 46.4575 0.407383 47.441 1.13239 48.1664C1.85782 48.8914 2.84135 49.2988 3.86669 49.2988H4.83336C4.83336 50.3241 5.24074 51.3076 5.96575 52.033C6.69118 52.758 7.67471 53.1653 8.70005 53.1653H41.5183C42.6878 55.5267 44.8654 57.23 47.4387 57.7966C50.0125 58.3632 52.7041 57.7319 54.757 56.0799C56.8098 54.428 58.0027 51.9338 58 49.2988V41.5656C57.9983 39.0955 56.9436 36.7437 55.1 35.0999L55.1003 35.0995ZM53.167 8.69969V12.5663H6.76672V8.69969C6.76672 8.18703 6.97041 7.69507 7.33291 7.33258C7.69541 6.9701 8.18738 6.76641 8.70006 6.76641H51.2336C51.7463 6.76641 52.2383 6.9701 52.6008 7.33258C52.9633 7.69507 53.167 8.18703 53.167 8.69969ZM3.8667 47.3654C3.35402 47.3654 2.86205 47.1617 2.49955 46.7992C2.13705 46.4367 1.93336 45.9448 1.93336 45.4321V3.86648C1.93336 3.35382 2.13705 2.86186 2.49955 2.49937C2.86205 2.13689 3.35402 1.9332 3.8667 1.9332H48.3336C48.8463 1.9332 49.3383 2.13689 49.7008 2.49937C50.0633 2.86186 50.267 3.35382 50.267 3.86648V4.83312H8.70006C7.6747 4.83312 6.69115 5.24049 5.96576 5.96548C5.24076 6.69089 4.83337 7.67439 4.83337 8.69969V47.3654H3.8667ZM8.70006 51.232C8.18738 51.232 7.69541 51.0283 7.33291 50.6658C6.97041 50.3033 6.76672 49.8113 6.76672 49.2987V14.4995H53.167V33.7838C51.9673 33.1809 50.6432 32.8663 49.3003 32.8655C46.9936 32.8681 44.7823 33.7855 43.1511 35.4163C41.5203 37.0476 40.6029 39.2587 40.6002 41.5653V49.2984C40.6024 49.9491 40.6775 50.5978 40.8246 51.2317L8.70006 51.232ZM56.067 49.2987C56.067 51.7162 54.7771 53.9498 52.6836 55.1585C50.5902 56.3672 48.0104 56.3672 45.9169 55.1585C43.8235 53.9498 42.5336 51.7162 42.5336 49.2987V47.721C43.385 48.1517 43.9909 48.9496 44.1769 49.8856C44.4225 51.1086 45.1108 52.1983 46.1103 52.9447L46.263 53.06C47.1421 53.7137 48.2084 54.0667 49.3041 54.0667C50.3998 54.0667 51.4662 53.7137 52.3452 53.06L52.498 52.946C53.4949 52.1973 54.1802 51.1076 54.4236 49.8856C54.6096 48.9496 55.2155 48.1517 56.067 47.721L56.067 49.2987ZM56.067 45.6553C55.1806 45.9107 54.3813 46.4048 53.7569 47.0841C53.1325 47.7629 52.707 48.6009 52.527 49.5055C52.3751 50.2628 51.9487 50.9369 51.3303 51.3995L51.1784 51.5135C50.6346 51.9174 49.9752 52.1357 49.2977 52.1357C48.6206 52.1357 47.9608 51.9174 47.4171 51.5135L47.2643 51.3982H47.2648C46.6472 50.9356 46.2226 50.262 46.0706 49.5055C45.8911 48.6014 45.466 47.7638 44.842 47.0846C44.2184 46.4053 43.4196 45.9112 42.5336 45.6553V41.5656C42.5336 39.1481 43.8235 36.9144 45.917 35.7057C48.0104 34.497 50.5902 34.497 52.6837 35.7057C54.7771 36.9144 56.067 39.1481 56.067 41.5656L56.067 45.6553Z"
              fill="#02005E"
            />
            <path
              d="M49.3004 37.6992C48.5313 37.6992 47.7933 38.0047 47.2497 38.5485C46.706 39.0922 46.4004 39.8302 46.4004 40.5991V43.499C46.4004 44.5351 46.9532 45.4923 47.8504 46.0105C48.7476 46.5284 49.8532 46.5284 50.7504 46.0105C51.6476 45.4922 52.2004 44.5351 52.2004 43.499V40.5991C52.2004 39.8301 51.8949 39.0921 51.3511 38.5485C50.8074 38.0048 50.0694 37.6992 49.3005 37.6992H49.3004ZM50.267 43.4991C50.267 44.0329 49.8342 44.4657 49.3004 44.4657C48.7665 44.4657 48.3337 44.0329 48.3337 43.4991V40.5991C48.3337 40.0653 48.7665 39.6325 49.3004 39.6325C49.8342 39.6325 50.267 40.0653 50.267 40.5991V43.4991Z"
              fill="#02005E"
            />
            <path
              d="M10.6337 34.8H29.9671C30.2234 34.8 30.4694 34.6981 30.6507 34.5169C30.8319 34.3356 30.9338 34.0896 30.9338 33.8333V18.367C30.9338 18.1107 30.8319 17.8647 30.6507 17.6835C30.4694 17.5022 30.2234 17.4004 29.9671 17.4004H10.6337C10.0998 17.4004 9.66699 17.8332 9.66699 18.367V33.8333C9.66699 34.0896 9.76884 34.3356 9.95009 34.5169C10.1313 34.6981 10.3773 34.8 10.6337 34.8ZM11.6003 19.3337H29.0004V32.8667H11.6003V19.3337Z"
              fill="#02005E"
            />
            <path
              d="M26.4593 25.2012L16.7926 21.3346C16.4948 21.2155 16.1573 21.2522 15.8915 21.4322C15.6261 21.6121 15.4673 21.912 15.4673 22.2327V29.9658C15.4673 30.2221 15.5691 30.4681 15.7504 30.6494C15.9316 30.8306 16.1776 30.9324 16.434 30.9324C16.557 30.9329 16.6786 30.9096 16.7926 30.8638L26.4593 26.9973C26.827 26.851 27.0682 26.4949 27.0682 26.0992C27.0682 25.7035 26.827 25.3475 26.4593 25.2012L26.4593 25.2012ZM17.4006 28.5383V23.6602L23.4984 26.0992L17.4006 28.5383Z"
              fill="#02005E"
            />
            <path
              d="M33.8335 21.2656H50.2669V23.1989H33.8335V21.2656Z"
              fill="#02005E"
            />
            <path
              d="M33.8335 25.1328H50.2669V27.0661H33.8335V25.1328Z"
              fill="#02005E"
            />
            <path
              d="M33.8335 28.998H45.4336V30.9313H33.8335V28.998Z"
              fill="#02005E"
            />
            <path
              d="M40.6001 17.4004H50.2668V19.3337H40.6001V17.4004Z"
              fill="#02005E"
            />
            <path
              d="M36.7334 17.4004H38.6667V19.3337H36.7334V17.4004Z"
              fill="#02005E"
            />
            <path
              d="M9.66699 42.5332H37.7005V44.4665H9.66699V42.5332Z"
              fill="#02005E"
            />
            <path
              d="M9.66699 46.3984H37.7005V48.3317H9.66699V46.3984Z"
              fill="#02005E"
            />
            <path
              d="M16.4336 38.666H37.7004V40.5993H16.4336V38.666Z"
              fill="#02005E"
            />
            <path
              d="M12.5669 38.666H14.5002V40.5993H12.5669V38.666Z"
              fill="#02005E"
            />
            <path
              d="M8.7002 8.69922H10.6335V10.6325H8.7002V8.69922Z"
              fill="#02005E"
            />
            <path
              d="M12.5669 8.69922H14.5002V10.6325H12.5669V8.69922Z"
              fill="#02005E"
            />
            <path
              d="M16.4336 8.69922H18.3669V10.6325H16.4336V8.69922Z"
              fill="#02005E"
            />
          </svg>
          Prototype
        </div>
        <div className="sub-title">
          <span>UI Inspiration Board</span>
        </div>
        <div className="app-design-detail-text">
          In order to start designing a digital solution, I need to brainstorm
          my ideas and look for UI Inspiration. Based on which, I first
          developed a UI Inspiration Board on InVision. I organized my UI
          Inspiration board as per my task flow and collected inspiration for
          the different aspects of the app.
        </div>
        <div className="app-design-detail-text">
          <a
            href="https://projects.invisionapp.com/boards/HT434TMFV24/"
            rel="noreferrer"
            target="_blank"
          >
            Click here to view the UI Inspiration Board.
          </a>
        </div>
        <div className="sub-title">
          After gathering Inspiration, I started <span>Sketching</span>
        </div>
        <div className="app-design-detail-text">
          Creating the UI Inspiration board first helps to sketch a variety of
          different ideas that have been inspired from other digital content.
          <br />
          And I really enjoy sketching out crazy 8’s or crazy 4’s for each of my
          screens so that I can analyze the different kind of ideas. The process
          of going back to the basic idea of sketching helps me in
          conceptualising the different layouts that can be introduced.
        </div>
        <div className="app-design-detail-text">
          Below are few of the explanatory sketches I did for the above task
          flow.
        </div>
        <img
          src={Sketch}
          alt="frame"
          className="img-key-points"
          style={{ maxWidth: "1048px" }}
        />
        <div className="sub-title">
          And after sketching many more layouts, we decided on the below{" "}
          <span>Solution Sketches</span>
        </div>
        <img
          src={Sketch1}
          alt="frame"
          className="img-key-points"
          style={{ maxWidth: "870px" }}
        />
        <img
          src={Sketch2}
          alt="frame"
          className="img-key-points"
          style={{ maxWidth: "570px" }}
        />
        <div className="sub-title">
          Once I had my solution sketches in place, I had to translate them into{" "}
          <span>Lo-Fi Prototype</span>
        </div>
        <div className="app-design-detail-text">
          Considering the User Stories and Task flow built, Prototype V1 was
          created. Below you can view the same for a quick glance.
        </div>
        <img
          src={Prototype1}
          alt="frame"
          className="img-key-points"
          style={{ maxWidth: "890px" }}
        />
        <img
          src={Prototype2}
          alt="frame"
          className="img-key-points"
          style={{ maxWidth: "890px" }}
        />
        <a
          href="https://www.figma.com/proto/pIPC8B5NxS25JeZ9puJAK5/EmployeeScape-V1?page-id=0%3A1&node-id=2%3A1534&viewport=241%2C48%2C0.32&scaling=scale-down&starting-point-node-id=2%3A1534"
          className="app-design-detail-btn general"
          rel="noreferrer"
          target="_blank"
        >
          View Prototype V1
        </a>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">
          <svg
            width="53"
            height="70"
            viewBox="0 0 53 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.8822 11.4322H43.1277C42.2666 11.4322 41.5685 10.7341 41.5685 9.87368C41.5685 9.01252 42.2666 8.31445 43.1277 8.31445H51.4408C52.3019 8.31445 53 9.01252 53 9.87368V68.0688C53 68.93 52.3019 69.628 51.4408 69.628H1.55922C0.698063 69.628 0 68.93 0 68.0688V9.87368C0 9.01252 0.698063 8.31445 1.55922 8.31445H9.87226C10.7334 8.31445 11.4315 9.01252 11.4315 9.87368C11.4315 10.7341 10.7334 11.4322 9.87226 11.4322H3.11784V66.5097H49.8818L49.8822 11.4322Z"
              fill="#02005E"
            />
            <path
              d="M43.6473 17.6666H43.1283C42.2671 17.6666 41.569 16.9685 41.569 16.1073C41.569 15.2469 42.2671 14.5488 43.1283 14.5488H45.2065C46.0669 14.5488 46.765 15.2469 46.765 16.1073V61.8321C46.765 62.6925 46.0669 63.3906 45.2065 63.3906H7.79532C6.93488 63.3906 6.23682 62.6925 6.23682 61.8321V16.1073C6.23682 15.2469 6.93488 14.5488 7.79532 14.5488H9.87353C10.7347 14.5488 11.4328 15.2469 11.4328 16.1073C11.4328 16.9685 10.7347 17.6666 9.87353 17.6666H9.3545V60.2737H43.6481L43.6473 17.6666Z"
              fill="#02005E"
            />
            <path
              d="M37.4118 10.392H33.7742C32.9138 10.392 32.2157 9.69393 32.2157 8.83276C32.2157 5.67657 29.6569 3.11698 26.4999 3.11698C23.343 3.11698 20.7842 5.67657 20.7842 8.83276C20.7842 9.69393 20.0861 10.392 19.2257 10.392H15.5881V16.6268H37.4113L37.4118 10.392ZM26.5 0C30.8465 0 34.4601 3.13875 35.1957 7.27421H38.9702C39.8314 7.27421 40.5294 7.97227 40.5294 8.83271V18.1859C40.5294 19.0463 39.8314 19.7444 38.9702 19.7444H14.0294C13.1683 19.7444 12.4702 19.0463 12.4702 18.1859V8.83271C12.4702 7.97227 13.1683 7.27421 14.0294 7.27421H17.804C18.5397 3.13875 22.1534 0 26.4996 0H26.5Z"
              fill="#02005E"
            />
            <path
              d="M28.5783 7.79575C28.5783 8.94325 27.6483 9.87396 26.5001 9.87396C25.3519 9.87396 24.4219 8.94321 24.4219 7.79575C24.4219 6.64753 25.3519 5.7168 26.5001 5.7168C27.6483 5.7168 28.5783 6.64755 28.5783 7.79575Z"
              fill="#02005E"
            />
            <path
              d="M19.6823 23.8389C20.2905 23.2308 21.2778 23.2308 21.8867 23.8389C22.4956 24.4478 22.4956 25.4352 21.8867 26.0441L17.7295 30.2005C17.1213 30.8094 16.134 30.8094 15.5251 30.2005L13.4469 28.1223C12.838 27.5134 12.838 26.5261 13.4469 25.9179C14.0558 25.309 15.0424 25.309 15.6513 25.9179L16.6277 26.8936L19.6823 23.8389Z"
              fill="#02005E"
            />
            <path
              d="M27.0197 28.5787C26.1585 28.5787 25.4604 27.8806 25.4604 27.0194C25.4604 26.159 26.1585 25.4609 27.0197 25.4609H37.6306C38.4918 25.4609 39.1899 26.159 39.1899 27.0194C39.1899 27.8806 38.4918 28.5787 37.6306 28.5787H27.0197Z"
              fill="#02005E"
            />
            <path
              d="M19.6823 36.3082C20.2905 35.6993 21.2778 35.6993 21.8867 36.3082C22.4956 36.9164 22.4956 37.9037 21.8867 38.5126L17.7295 42.6691C17.1213 43.278 16.134 43.278 15.5251 42.6691L13.4469 40.5908C12.838 39.982 12.838 38.9954 13.4469 38.3864C14.0558 37.7775 15.0424 37.7776 15.6513 38.3864L16.6277 39.3621L19.6823 36.3082Z"
              fill="#02005E"
            />
            <path
              d="M27.0197 41.0474C26.1585 41.0474 25.4604 40.3494 25.4604 39.4882C25.4604 38.6278 26.1585 37.9297 27.0197 37.9297H37.6306C38.4918 37.9297 39.1899 38.6278 39.1899 39.4882C39.1899 40.3494 38.4918 41.0474 37.6306 41.0474H27.0197Z"
              fill="#02005E"
            />
            <path
              d="M19.6823 48.7809C20.2905 48.172 21.2778 48.172 21.8867 48.7809C22.4956 49.3898 22.4956 50.3764 21.8867 50.9853L17.7295 55.1417C17.1213 55.7506 16.134 55.7506 15.5251 55.1417L13.4469 53.0635C12.838 52.4546 12.838 51.468 13.4469 50.8591C14.0558 50.2502 15.0424 50.2502 15.6513 50.8591L16.6277 51.8355L19.6823 48.7809Z"
              fill="#02005E"
            />
            <path
              d="M27.0197 53.5181C26.1585 53.5181 25.4604 52.8201 25.4604 51.9596C25.4604 51.0985 26.1585 50.4004 27.0197 50.4004H37.6306C38.4918 50.4004 39.1899 51.0985 39.1899 51.9596C39.1899 52.8201 38.4918 53.5181 37.6306 53.5181H27.0197Z"
              fill="#02005E"
            />
          </svg>
          User Testing
        </div>
        <div className="sub-title">
          <span>User Testing</span>
        </div>
        <div className="app-design-detail-text">
          Once I was done with creating a initial prototype V1, it was time to
          test the design and overall usability experience. I conducted two
          rounds of user testing with a total of five participants in each
          round. Hosting user testings helped me to obtain real time feedback
          and insights that can help me in improve my final digital solution.
        </div>
        <div className="app-design-detail-text">
          User Testing Methodology - I can conducted in-person as well as
          virtual user testing sessions.
        </div>
        <div className="app-design-detail-text">
          User Test Prompts and Matrix table - <br />
          The following were the task prompts given by me to all my users. I
          would iterate a little bit based on their feedback. I also made a user
          testing matrix table that would give me a clear understanding of the
          user test results.
        </div>
        <div className="app-design-detail-text">
          <span>User Testing Matrix 1</span>
        </div>
        <img
          src={UserTesting}
          alt="frame"
          className="img-key-points left-align"
        />
        <div className="app-design-detail-text">
          The above tasks were marked wrong as users didn’t feel intuitive
          towards doing that particular task. However, once requested to carry
          out the task, irrespectively, they were able to accomplish the
          assigned tasks successfully.
        </div>
        <img
          src={UserTesting1}
          alt="frame"
          className="img-key-points left-align"
        />
        <div className="app-design-detail-text">
          Further we build a simple table to organize all the constructive
          feedback we have received just so we are able to organize them and
          impliment them accordingly.
        </div>
        <img
          src={UserTesting2}
          alt="frame"
          className="img-key-points left-align"
        />
        <div className="app-design-detail-text">
          <span>Design Prioritization Matrix 1</span>
        </div>
        <div className="app-design-cont">
          <div className="app-design-cont-left">
            <div>
              Based on the User Testing results, I made a design prioritization
              matrix that would aid me in organizing and prioritizing all the
              changes that needs to be done to the prototype.
            </div>
            <div>
              As per the matrix, the top right quadrant reflects the changes
              that are high user value and are low effort. Hence, I started off
              by making those first and then moved to the top left quadrant and
              lastly to the bottom right side.
            </div>
          </div>
          <img src={Mock1} alt="mock1" className="app-design-cont-right" />
        </div>
        <div className="app-design-detail-text">
          After implimenting the required changes, we had created our{" "}
          <span className="big">Prototype V2</span>
        </div>
        <div className="app-design-detail-text">
          Below is a secondary task flow which has been developed based on User
          testing round 1.
        </div>
        <img src={LeftMock} alt="frame" className="img-key-points" />
        <div className="app-design-cont-left-image  flexed">
          <img src={LeftMock1} alt="mock1" className="app-design-cont-left" />
          <div className="app-design-cont-right">
            <div>
              In the above user testing, four out of five testees wanted to know
              more about the team first and then about their schedule for the
              first day. Hence, we built the greyscale wireframes for the same.
            </div>
          </div>
        </div>
        <div className="app-design-detail-text">
          Below are the changes made as per each screen.
        </div>
        <img src={RowGroup} alt="frame" className="img-key-points" />
        <div className="app-design-detail-text">
          <span>User Testing Round two</span>
        </div>
        <div className="app-design-detail-text">
          It was time to conduct the second round of user testing so that we
          could asses the prototype v2 and work on improving the design further.
        </div>
        <div className="app-design-detail-text">
          I again conducted both in person and virtual testing sessions with
          five different users. This time I let them select the task flow as per
          their initution and the following were the results for the same.
        </div>
        <div className="app-design-cont-left-image  flexed">
          <img src={LeftTable} alt="mock1" className="app-design-cont-left" />
          <div className="app-design-cont-right">
            <div>
              The user testing well quite well, however even this time, my
              testees wanted to see different aspects of the application first
              rather than the schedule or the team.
            </div>
            <div>
              However, I managed to get some constructive feedback out of this
              user testing as well.
            </div>
          </div>
        </div>
        <div className="app-design-cont  flexed">
          <div className="app-design-cont-left">
            <div>
              I followed the same method and built a constructive feedback table
              to organize all our critques and then plotted them on a design
              prioritization matrix as below.
            </div>
          </div>
          <img src={RightTable} alt="mock1" className="app-design-cont-right" />
        </div>
        <div className="app-design-cont-left-image">
          <img src={GroupLow} alt="mock1" className="app-design-cont-left" />
          <div className="app-design-cont-right">
            <div>
              As per the process done earlier, I first worked my way through the
              top righ quadrant, then the top left one. Following the design
              prioritization matrix made it easy for me to make the changes and
              create my prototype v3.
            </div>
          </div>
        </div>
        <div className="app-design-detail-text">
          As a result of user testing round two, we now have our{" "}
          <span className="big">Prototype V3</span>
        </div>
        <div className="app-design-detail-text">
          In prototype V3, we made changes as per the design prioritization
          matrix and the same are annoted as below.
        </div>
        <img src={Proto1} alt="frame" className="img-key-points" />
        <img src={Proto2} alt="frame" className="img-key-points" />
        <a
          href
          className="app-design-detail-btn general"
          rel="noreferrer"
          target="_blank"
        >
          View Prototype V3
        </a>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="app-design-header">
          <svg
            width="59"
            height="53"
            viewBox="0 0 59 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53 3.6543H37.4656C36.9601 3.6543 36.5518 4.06387 36.5518 4.56809V27.4129C36.5518 27.9171 36.9601 28.3267 37.4656 28.3267H53C53.5055 28.3267 53.9138 27.9171 53.9138 27.4129V4.56809C53.9138 4.06387 53.5055 3.6543 53 3.6543ZM38.3793 5.48188H52.0862V8.22326H38.3793V5.48188ZM52.0862 26.4991H38.3793V10.0508H52.0862V26.4991Z"
              fill="#02005E"
            />
            <path
              d="M40.207 11.8789H42.0346V13.7065H40.207V11.8789Z"
              fill="#02005E"
            />
            <path
              d="M43.8623 11.8789H50.2589V13.7065H43.8623V11.8789Z"
              fill="#02005E"
            />
            <path
              d="M40.207 15.5352H42.0346V17.3627H40.207V15.5352Z"
              fill="#02005E"
            />
            <path
              d="M43.8623 15.5352H50.2589V17.3627H43.8623V15.5352Z"
              fill="#02005E"
            />
            <path
              d="M40.207 19.1895H42.0346V21.017H40.207V19.1895Z"
              fill="#02005E"
            />
            <path
              d="M43.8623 19.1895H50.2589V21.017H43.8623V19.1895Z"
              fill="#02005E"
            />
            <path
              d="M40.207 22.8457H42.0346V24.6733H40.207V22.8457Z"
              fill="#02005E"
            />
            <path
              d="M43.8623 22.8457H50.2589V24.6733H43.8623V22.8457Z"
              fill="#02005E"
            />
            <path
              d="M33.8102 12.7922H26.4999V9.13706H27.4137C27.9191 9.13706 28.3275 8.72748 28.3275 8.22326V4.56809C28.3275 4.06387 27.9191 3.6543 27.4137 3.6543H23.7585C23.2531 3.6543 22.8447 4.06387 22.8447 4.56809V5.48188H10.0516V4.56809C10.0516 4.06387 9.64325 3.6543 9.13781 3.6543H5.48264C4.9772 3.6543 4.56885 4.06387 4.56885 4.56809V8.22326C4.56885 8.72748 4.9772 9.13706 5.48264 9.13706H6.39643V22.844H5.48264C4.9772 22.844 4.56885 23.2535 4.56885 23.7577V27.4129C4.56885 27.9171 4.9772 28.3267 5.48264 28.3267H9.13781C9.64325 28.3267 10.0516 27.9171 10.0516 27.4129V26.4991H22.8447V27.4129C22.8447 27.9171 23.2531 28.3267 23.7585 28.3267H27.4137C27.9191 28.3267 28.3275 27.9171 28.3275 27.4129V23.7577C28.3275 23.2535 27.9191 22.844 27.4137 22.844H26.4999V20.1026H33.8102C34.3157 20.1026 34.724 19.693 34.724 19.1888V13.706C34.724 13.2018 34.3157 12.7922 33.8102 12.7922ZM24.6723 5.48188H26.4999V7.30947H24.6723V5.48188ZM6.39643 5.48188H8.22402V7.30947H6.39643V5.48188ZM8.22402 26.4991H6.39643V24.6715H8.22402V26.4991ZM26.4999 26.4991H24.6723V24.6715H26.4999V26.4991ZM24.6723 22.844H23.7585C23.2531 22.844 22.8447 23.2535 22.8447 23.7577V24.6715H10.0516V23.7577C10.0516 23.2535 9.64325 22.844 9.13781 22.844H8.22402V9.13706H9.13781C9.64325 9.13706 10.0516 8.72748 10.0516 8.22326V7.30947H22.8447V8.22326C22.8447 8.72748 23.2531 9.13706 23.7585 9.13706H24.6723V12.7922H13.7068C13.2013 12.7922 12.793 13.2018 12.793 13.706V19.1888C12.793 19.693 13.2013 20.1026 13.7068 20.1026H24.6723V22.844ZM32.8964 18.275H14.6206V14.6198H15.5344V15.5336H17.362V14.6198H19.1895V16.4474H21.0171V14.6198H22.8447V15.5336H24.6723V14.6198H26.4999V16.4474H28.3275V14.6198H30.1551V15.5336H31.9826V14.6198H32.8964V18.275Z"
              fill="#02005E"
            />
            <path
              d="M56.6552 0H1.82759C0.819563 0 0 0.819563 0 1.82759V37.4655C0 38.4735 0.819563 39.2931 1.82759 39.2931H23.5779L22.0829 47.5172H19.1902C18.947 47.5172 18.7149 47.6131 18.544 47.7849L16.7164 49.6124C16.5447 49.7834 16.4488 50.0163 16.4488 50.2586V52.0862C16.4488 52.5904 16.8572 53 17.3626 53H41.1212C41.6267 53 42.035 52.5904 42.035 52.0862V50.2586C42.035 50.0163 41.9391 49.7834 41.7674 49.6124L39.9398 47.7849C39.7689 47.6131 39.5368 47.5172 39.2936 47.5172H36.4005L34.9054 39.2931H56.6558C57.6638 39.2931 58.4834 38.4735 58.4834 37.4655V1.82759C58.4834 0.819563 57.6638 0 56.6558 0H56.6552ZM1.82759 1.82759H56.6552V30.1552H1.82759V1.82759ZM40.2069 50.6367V51.1723H18.2759V50.6367L19.5678 49.3447H38.9152L40.2069 50.6367ZM34.543 47.5171H23.9399L25.4358 39.293H28.3289L28.3277 42.9482H27.4139V44.7758H31.0691V42.9482H30.1553L30.1561 39.293H33.0473L34.543 47.5171ZM56.6548 37.4654H1.82717V31.9827H56.6548V37.4654Z"
              fill="#02005E"
            />
            <path
              d="M26.5 33.8105H31.9828V35.6381H26.5V33.8105Z"
              fill="#02005E"
            />
          </svg>
          Design
        </div>
        <div className="sub-title">
          Next I worked on <span>Branding</span> my application.
        </div>
        <div className="app-design-detail-text">
          While I did my user testing I also tested out some of the potentional
          application names. While I proposed these names, I would describe the
          application using the following adjectives.
        </div>
        <div className="app-design-detail-text">
          Calm | Confident | Responsible | Connected | Team Spirit | Open |
          Evolving | Approachable | Welcoming
        </div>
        <div className="app-design-detail-text">
          And out of all the options presented the highest voted name was
          EmployeeScape.
        </div>
        <div className="app-design-cont-left-image">
          <img
            src={DesignUnit}
            alt="mock1"
            className="app-design-cont-left small"
          />
          <div className="app-design-cont-right">
            <div>
              The thought behond EmployeeScape was that it would represent an
              Employee Landscape. A Landscape would ususally represent clear
              visibilty, calmness, and often be considered in terms of their
              aesthetic appeal. And those were the exact vibes I was aiming for
              - Openess | clarity | calming | welcoming | approachable.
            </div>
            <div>
              And since majority of our users connected to EmployeeScape, I
              decided to go ahead with the same as the name for the applicaiton.{" "}
            </div>
          </div>
        </div>
        <div className="app-design-detail-text">
          Next we created a Moodboard which was based on characterstic a large
          organization should have. And the vibes it should typically give.
        </div>
        <div className="app-design-detail-text">
          Creating the moodboard helped me explore my color palette and
          typograpy as I could see the visuals and get inspired for the same.
        </div>
        <div className="app-design-cont">
          <div className="app-design-cont-left">
            <div>Click here to view the moodboard.</div>
            <div>
              Next we sketched out mutliple ideas for the wordmark. And finally
              decided to go with a clear and simplistic look. We used the font
              Mullish for the wordmark and highlighted the name by adding more
              weight on the letter E and S.
            </div>
            <img src={EmployeeScapeImage2} alt="frame" className="imgCenter" />
          </div>
          <img
            src={Sig}
            alt="signtaure"
            className="app-design-cont-right small"
          />
        </div>
        <div className="app-design-detail-text">
          Now was the fun yet challenging part -
          <span className="big">Color Injection & Ambience.</span>
        </div>
        <div className="app-design-cont">
          <div className="app-design-cont-left">
            <div>
              After passing all the previous tests, edits and design
              refinements, we decided on our primary brand color.{" "}
            </div>
            <div>
              We relied on the psychology of colors to make the final selection.
              As per research the color blue associated with the following
              adjectives, which are very similar to our brand adjectives.
            </div>
            <div>
              They are : Calm | Comfort | Dignified Duty | Efficiency |
              Intelligence | Successful | Trust | Security | Tranquility{" "}
            </div>
            <div>
              Hence, that was a no brainer. However, deciding this particular
              shade was the tough part for me.
            </div>
            <div>
              We ultimately ended up deciding on Navy Blue, #02005E. It is dark
              to be used in most high key situations and completely fits with
              the brand image and feel.
            </div>
            <div>
              As I selected our Primary brand color as Navy blue, I wanted the
              secondary color to be a lighter shade and an accent color that
              would compliment both primary and secondary color. Hence, the
              finalised shades were #CBF0F8 - Light blue and #FF9179 - Coralistc
              shade.{" "}
            </div>
          </div>
          <img
            src={ColorInjection}
            alt="signtaure"
            className="app-design-cont-right small"
          />
        </div>
        <div className="app-design-cont">
          <div className="app-design-cont-left">
            <div>
              Next we looked at the <span className="big">Typography</span>{" "}
              aspect of the application.
            </div>
            <div>
              We explored a variety of different fonts but finally decided to go
              with Mullish as it is a minimalist Sans Serif typeface, designed
              for both display and text typography.
            </div>
            <div>
              I decided to go ahead with Mulish as the typography for multiple
              reasons -<br />
              <ul>
                <li>It’s simplistic look and design.</li>
                <li>It’s easy to read.</li>
                <li>A familiar and recognizable font.</li>
                <li>It’s eligible for both - screen and print use. </li>
              </ul>
            </div>
          </div>
          <img
            src={Family}
            alt="signtaure"
            className="app-design-cont-right small"
          />
        </div>
        <div className="app-design-detail-text">
          And lastly, I developed{" "}
          <span className="big">the Hi-Fi Prototype.</span>
        </div>
        <div className="app-prototype marginBtm">
          <div>
            <Player autoPlay src={PrototypeVideo}>
              <ControlBar autoHide={false} disableDefaultControls={true} />
            </Player>
          </div>
          <a
            href="https://www.figma.com/proto/gmLNVQFgouLCiOvrjYUrRN/CAPSTONE-EMPLOYEESCAPE?page-id=0%3A1&node-id=1%3A4433&viewport=241%2C48%2C0.36&scaling=scale-down&starting-point-node-id=1%3A4433"
            className="app-design-detail-btn"
            rel="noreferrer"
            target="_blank"
          >
            View Prototype
          </a>
        </div>
        <div className="sub-title">
          <span>Key features</span> that EmployeeScape has to offer as per the
          Hi-Fi Prototype.
        </div>
        <div className="app-design-detail-text">
          <ul>
            <li>
              Users can log into EmployeeScape only once they are hired by the
              organization.
            </li>
            <li>
              Users can get an overall understanding of the organization right
              from the Home Screen.
            </li>
            <li>
              The home screen is designed in such a way that the day to day
              functions are on the second half of the arc which makes accessing
              those prime feature very easy, like Schedule, Training, Time Off,
              Benefits and Directory.
            </li>
            <li>
              Next with EmployeeScape, user can easily see their work schedule
              and plan their time effeciently
            </li>
            <li>
              It also helps user prepare for the meetings and analyize the
              important documents attached to that particular meeting.
            </li>
            <li>
              EmployeeScape can help them get to know the team better. They can
              view each colleagues profile and understand their journey. This
              aspect will help them easily conversate with the colleagues the
              next time they meet them.
            </li>
            <li>
              Also helps in understanding team hierarchy and encourages an open
              platform which is very approachable.
            </li>
          </ul>
        </div>
        <img src={Designv3} alt="frame" className="img-key-points" />
        <div className="app-design-detail-text">
          After which I developed the{" "}
          <span>Product Marketing Responsive Web Challenge</span>
        </div>
        <div className="app-design-detail-text">
          To further promote and market EmployeeScape to potential clients, I
          developed a product marketing responsive webpage for both desktop and
          mobile viewports. The goal of the website was to educate potential
          organziations about EmployeeScape and its functionalities. The website
          outlines benefits of the application by showcasing current users,
          testimonials and top features.
        </div>
        <div className="app-design-detail-text">
          EmployeeScape is not an app anyone can just download and sign up. It
          needs to be bought by an organization and then deloyed to their
          employees accordingly.
          <br />
          Hence, the CTA on the website is to Request a demo or download the
          application for a quick tour.
        </div>
        <div className="app-design-detail-text">
          The website is designed keeping the professional tone in mind. It is
          kept to the point and inviting organizations to request a demo to
          learn more.
        </div>
        <ul className="app-design-distribution">
          <li>
            <img src={Desktopv3} alt="desktop" />
            <a
              href
              rel="noreferrer"
              target="_blank"
              className="app-design-detail-btn general"
            >
              View Desktop
            </a>
          </li>
          <li className="marginLeft">
            <img src={Mobilev3} alt="mobile" className="mobile" />
            <a
              href
              rel="noreferrer"
              target="_blank"
              className="app-design-detail-btn general"
            >
              View Mobile
            </a>
          </li>
        </ul>
      </Fade>
    </div>
  );
}

export default EmployeeScape;
