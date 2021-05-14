import React from "react";
import "./VideoRow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function VideoRow({
  views,
  description,
  timestamp,
  channel,
  channelImage,
  title,
  image,
  verified,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <div className="videoRow__info">
          <p className="videoRow__headline">
            {views} views • {timestamp}
          </p>
          <p className="videoRow__channel">
            <Avatar className="videoRow__icon" src={channelImage} />
            {channel}{" "}
            <span className="videoRow__verified">
              {verified && <VerifiedIcon />}
            </span>
          </p>
          <p className="videoRow__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
