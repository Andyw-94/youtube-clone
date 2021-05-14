import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Was YO MAMA in Sonic The Movie?!"
          channel="Yo Mama"
          views="88k Views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnhXZsdgBrrE1QjBJaQRjULMmT7TusgSbbt4JGPBMA=s176-c-k-c0x00ffffff-no-rj"
          image="https://i.ytimg.com/vi/1RcpRaubbFM/maxresdefault.jpg"
        />
        <VideoCard
          title="Big Brain Time"
          channel="LeEpicGamer"
          views="2M Views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniBeMGWwe5N2WpnKjU2YDZIZvgYy995RszudMao=s176-c-k-c0x00ffffff-no-rj"
          image="https://img.buzzfeed.com/buzzfeed-static/static/2017-02/2/10/campaign_images/buzzfeed-prod-fastlane-02/17-works-of-art-that-werent-meant-to-be-funny-but-2-30325-1486050395-0_dblbig.jpg?resize=1200:*"
        />
        <VideoCard
          title="How to draw?"
          channel="MattyB"
          views="124 Views"
          timestamp="5 years ago"
          channelImage="https://www.barnorama.com/wp-content/images/2015/06/these-youtube-thumbnails/05-these-youtube-thumbnails.jpg"
          image="https://www.barnorama.com/wp-content/images/2015/06/these-youtube-thumbnails/05-these-youtube-thumbnails.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
