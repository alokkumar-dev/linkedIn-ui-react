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
  faEarth,
  faHeart,
  faLightbulb,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Posts_Data } from "../../Data/PostData";
export const Home = () => {
  const Buttons = [
    {
      icon: <FontAwesomeIcon className="fa-solid" icon={faImage} />,
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
              </div>
            </div>
            {/* <hr className="hr" /> */}
            {Posts_Data.map((el) => (
              <>
                <div className="postsMainDiv">
                  <div className="useDetails">
                    <img className="userAvatar" src={el.avatar} alt="" />
                    <div className="avatarDetails">
                      <h4>{el.name}</h4>
                      <p>{el.about_avatar}</p>
                      <div className="postime">
                        <p>3D</p>
                        <div className="dot"></div>
                        <FontAwesomeIcon className="earthIcon" icon={faEarth} />
                      </div>
                    </div>
                    <div className="followbtn">
                      <p>+</p>
                      <h5>Follow</h5>
                    </div>
                  </div>
                  <div className="aboutPost">
                    <p>{el.about_post}</p>
                  </div>
                  <div className="postPicture">
                    <img src={el.post_picture} alt="" />
                  </div>
                  <div className="likes">
                    <div className="likeIcon">
                      <div>
                        <FontAwesomeIcon icon={faThumbsUp} />{" "}
                      </div>
                      <div className="lightIcon">
                        <FontAwesomeIcon icon={faLightbulb} />{" "}
                      </div>
                      <div className="lightIcon">
                        <FontAwesomeIcon icon={faHeart} />{" "}
                      </div>
                    </div>
                    <p>{el.likes}</p>
                  </div>
                  <div className="hr"></div>
                  <div className="viewerReactionMain">
                  {el.icons.map((e) => (
                    
                        <div className="viewerReaction" >
                          <h5>{e.icon}</h5>
                          <p>{e.text}</p>
                        </div>
                    
                    ))}
                    </div>
                </div>
              </>
            ))}
          </div>
          <div className="rightSide"></div>
        </div>
      </div>
    </>
  );
};
