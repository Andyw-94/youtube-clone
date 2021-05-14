import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

function Sidebar() {
  const [selected, setSelected] = useState();
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <nav className={`sidebar ${setNavToggle ? "" : "nav-toggle"}`}>
      <div className="sidebar__header">
        <div className="sidebar__menu">
          <IconButton>
            <MenuIcon onClick={navClick} />
          </IconButton>
        </div>
        <Link to="/">
          <img
            className="sidebar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=""
          />
        </Link>
      </div>
      <hr />
      <div className="sidebar__options">
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpIcon} title="Liked videos" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
        <hr />
      </div>
    </nav>
  );
}

export default Sidebar;
