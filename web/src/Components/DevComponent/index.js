import React from 'react';
import "./styles.css";

function DevComponent({ dev }) {
  const bio = dev.bio != null ? (dev.bio.substring(0, 250) + (dev.bio.length > 250 ? "..." : "")) : "User without bio";
  return (
    <div className="devComp">
      <div className="headerContainer">
        <img src={dev.avatarURL} />
        <div className="headerTextContainer">
          <strong>
            {dev.name}
          </strong>
          <span className="techs">
            {dev.techs.join(", ")}
          </span>
        </div>
      </div>
      <span className="bio">{bio}</span>
      <a href={`https://www.github.com/${dev.gitHubName}`} />
    </div>
  );
}

export default DevComponent;
