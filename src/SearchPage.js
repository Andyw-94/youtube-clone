import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />

      <ChannelRow
        channelImage="https://i0.wp.com/wealmedia.com/wp-content/uploads/2015/06/google-plus-profile-template.jpg"
        channel="andysaurus"
        verified
        subs="2M"
        noOfVideos={420}
        description="For the lulz"
      />

      <hr />

      <VideoRow
        title="Oney Plays Kingdom Hearts WITH FRIENDS - EP 1 - Simple and Clean"
        channel="OneyPlays"
        description="Oney Plays Kingdom Hearts PS2 (Playstation 2) with his friends!"
        views="669.4k"
        timestamp="4 years ago"
        image="https://vignette.wikia.nocookie.net/oneyplays/images/7/77/Kingdomheartsthumbnail.png/revision/latest?cb=20171120032047"
      />
      <VideoRow
        title="Wind Waker HD: Foing for Gohma - Part 14 - Game Grumps"
        channel="Game Grumps"
        description="Has anyone redone The Jungle Book with Valoo replacing Baloo? They could sing that old favorite The Bare ..."
        views="1.4M Views"
        timestamp="7 years Ago"
        image="http://i1.ytimg.com/vi/GiWe1YwoLWs/mqdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
