import "../styles/Home.css";
//  import {alok} from '../'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSquare } from "@fortawesome/free-solid-svg-icons";
export const Home = () => {
  return (
    <>
      <div className="main">
        <div className="homeContainer">
          <div className="leftSide">
            <div className="profileDiv">
              <div className="backGroundDiv">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5616AQHrpEBEcqqr-A/profile-displaybackgroundimage-shrink_350_1400/0/1643298120330?e=1654732800&v=beta&t=8271OQe8iZSbl_2iPFOn76VnE3tu7Z77okferjFi7bg"
                  className="bgImg"
                  alt=""
                />
                <img
                  src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg"
                  alt=""
                  className="avatarImg"
                />
                <h4 className="avatarName">Alok Kumar</h4>
                <p className="avatarAbout">
                  Appearing Full-Stack Developer. Learning from Masai School
                </p>
                <div className="hr"></div>
                <div className="viewes">
                  <h3>Who viewed your profile</h3>
                  <h4>400</h4>
                </div>
                <div className="viewes">
                  <h3>Who viewed your profile</h3>
                  <h4>850</h4>
                </div>
                <div className="hr"></div>
                <div className="premium">
                  <p>Access exclusive tools & insights</p>
                  <h4>
                    <FontAwesomeIcon className="squire" icon={faSquare} /> Try
                    Premium for free
                  </h4>
                </div>
                <div className="hr"></div>
                <div className="items">
                  <h4>
                    <FontAwesomeIcon className="bookmark" icon={faBookmark} />
                    My items
                  </h4>
                </div>
              </div>
            </div>
            <div className="groups">
              <h4 className="h4Color">Groups</h4>
              <div className="events">
                <h4 className="h4Color">Events</h4>
                <h5>+</h5>
              </div>
              <h4 className="h4Color">Followed Hashtags</h4>
              <div className="hr"></div>
              <h4 className="discover">Discover more</h4>
            </div>
          </div>
          <div className="middleSide"></div>
          <div className="rightSide"></div>
        </div>
      </div>
    </>
  );
};
