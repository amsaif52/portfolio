import { Link } from "react-router-dom";

function Card({ imgSrc, caseName, duration, role, bodyText, link }) {
  return (
    <div className="app-card partial">
      <div className="app-card-image">
        <img src={imgSrc} alt={caseName} />
      </div>
      <div className="app-card-details">
        <div>
          <div>
            <span className="compress">Case Study</span>
            <span>- {caseName}</span>
          </div>
          <div>
            <span className="compress">Duration</span>
            <span>- {duration}</span>
          </div>
          <div>
            <span className="compress">Role</span>
            <span>- {role}</span>
          </div>
          <div>About Case Study - {bodyText}</div>
        </div>
        <div>
          {link && (
            <Link to={link} className="button-detail">
              View Case Study
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
