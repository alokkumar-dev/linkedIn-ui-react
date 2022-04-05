import {
  faArrowTurnRight,
  faCommentDots,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Posts_Data = [
  {
    name: "Alok Kumar",
    about_avatar: "Appearning Full-Stack Developer. Learning From Masai School",
    avatar: "https://i.ibb.co/FqN8fT6/Alok-kumar.jpg",
    about_post:
      "Most Common Leetcode DSA Problem Solving Patterns.These can be applied to solve Maximum Top Problems on Leetcode. It tells in brief that in which case you should apply which approach. It covers : Binary Search",
    time: "24h",
    likes: "Devesh Verma and 99 others",
    comments: "20 comments",
    icons: [
      {
        likeIcon: <FontAwesomeIcon icon={faThumbsUp} />,
        text: "Like",
      },
      {
        likeIcon: <FontAwesomeIcon icon={faCommentDots} />,
        text: "Comment",
      },
      {
        likeIcon: <FontAwesomeIcon icon={faArrowTurnRight} />,
        text: "Share",
      },
      {
        likeIcon: <FontAwesomeIcon icon={faPaperPlane} />,
        text: "Send",
      },
    ],
  },
];
