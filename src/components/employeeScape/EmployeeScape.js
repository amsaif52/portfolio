import WhiteBow from "../common/WhiteBow";
import EmployeeScapeImage from "../../assets/EmployeeScapeImage.png";
import Prototype from "../../assets/Prototype.jpg";
import DesignThinking from "../../assets/DesignThinking.png";
import DidYouKnow from "../../assets/DidYouKnow.jpg";
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
            <a href className="app-design-detail-btn">
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
    </div>
  );
}

export default EmployeeScape;
