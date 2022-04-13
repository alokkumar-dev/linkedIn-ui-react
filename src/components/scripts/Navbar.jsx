import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faGraduationCap,
  faHouseChimney,
  faSortDown,
  faToolbox,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <div className="navLeftSide">
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                alt="linkedin logo"
              />
            </div>
            <input className="inputField" type="text" placeholder="Search" />
          </div>
          <div className="navMiddleSide">
            <Link to={"/"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faHouseChimney} />
              <h4 className="text">Home</h4>
            </Link>

            <Link to={"/mynetwork"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faUserGroup} />
              <h4 className="text">My Network</h4>
            </Link>
            <Link to={"/jobs"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faToolbox} />
              <h4 className="text">Jobs</h4>
            </Link>
            <Link to={"/messaging"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faCommentDots} />
              <h4 className="text">Messaging</h4>
            </Link>
            <Link to={"/notification"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faBell} />
              <h4 className="text">Notification</h4>
            </Link>
            <div>
              {/* <FontAwesomeIcon icon="fa-solid fa-user-large" /> */}
              {/* <FontAwesomeIcon className="fa-icon" icon={faUserLarge} /> */}

              <img
                className="avatar"
                src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg"
                alt="alok kumar"
              />
              <h4 className="avatar-text text">
                Me <FontAwesomeIcon className="fa-icon" icon={faSortDown} />
              </h4>
            </div>
          </div>
          <div className="navRightSide">
            <div>
              <FontAwesomeIcon className="fa-icon" icon={faGraduationCap} />
              <h4 className="text">Works</h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
