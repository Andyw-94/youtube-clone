import React from "react";
import "./ChannelRow.css";
import { Avatar, Button } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  channelImage,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={channelImage} />
      <div className="channelRow__info">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
      <Button className="channelRow__button" variant="contained" color="secondary">
        Subscribe
      </Button>
    </div>
  );
}

export default ChannelRow;
