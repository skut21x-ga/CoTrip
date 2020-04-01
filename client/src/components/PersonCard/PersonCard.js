import React from "react";
import { Link } from "react-router-dom";
import "./PersonCard.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import image from "../../assets/images/profile-picture-1.png";

// Function based React Component
const PersonCard = props => {
  if (online) {
    return (
      <div className="PersonCard">
        <ProfilePicture type="medium" image={props.image} />
        <div className="PersonCard__dot">{props.dot}</div>
        <div className="PersonCard__name">{props.name}</div>
        <div className="PersonCard__location">{props.location}</div>
        <div className="PersonCard__interests">
          {props.interests.map((interests, i) => (
            <Link className="PersonCard__interests-links" to={interests.url} key={i}>
              #{interests.interests}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="PersonCard">
      <ProfilePicture type="medium" image={props.image} />
      <div className="PersonCard__name">{props.name}</div>
      <div className="PersonCard__location">{props.location}</div>
      <div className="PersonCard__interests">
        {props.interests.map((interests, i) => (
          <Link className="PersonCard__interests-links" to={interests.url} key={i}>
            #{interests.interests}
          </Link>
        ))}
      </div>
    </div>
  );
};
PersonCard.defaultProps = {
  image: { image },
  name: "Lindsay L.",
  location: "Washington D.C.",
  interests: [
    { url: "#", interests: "veganism" },
    { url: "#", interests: "budgeting" },
    { url: "#", interests: "travel" },
    { url: "#", interests: "outdoors" }
  ],
  dot: <div className="PersonCard__online"></div>,
};

// Once user logs in online should be set to true and display green dot.
const online = true;
// ReactDOM.render(<PersonCard online={false} />,
//   document.getElementById('root'))
export default PersonCard;
