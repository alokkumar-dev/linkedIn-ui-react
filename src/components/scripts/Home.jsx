import "../styles/Home.css";
//  import {alok} from '../'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faSquare,
  faImage,
  faVideo,
  faCalendar,
  faArrowAltCircleLeft,

} from "@fortawesome/free-solid-svg-icons";
export const Home = () => {
  const Buttons = [
    {
      icon: <FontAwesomeIcon className="fa-solid" icon={faImage} />,
      // icon: <FontAwesomeIcon className="fa-solid" icon={faPaperPlane} />,
      text: "Photo",
    },
    {
      icon: <FontAwesomeIcon className="fa-solid" icon={faVideo} />,
      text: "Video",
    },
    {
      icon: <FontAwesomeIcon className="fa-solid" icon={faCalendar} />,
      text: "Event",
    },
    {
      icon: (
        <FontAwesomeIcon className="fa-solid" icon={faArrowAltCircleLeft} />
      ),
      text: "Write aritcle",
    },
  ];
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
          <div className="middleSide">
            <div className="top">
              <div className="searchDiv">
                <img src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg" alt="" />
                <input
                  className="postInput"
                  type="text"
                  placeholder="Start a post"
                />
              </div>
              <div className="buttons">
                {Buttons.map((el) => (
                  <div className="btnicon">
                    <span>{el.icon}</span>
                    <span className="icontext">{el.text}</span>
                  </div>
                ))}
                {/* <div className="video">Video</div>
                <div className="event">Event</div>
                <div className="artical">Write article</div> */}
              </div>
            </div>
          </div>
          <div className="rightSide"></div>
        </div>
      </div>
    </>
  );
};
