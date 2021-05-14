import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className={`header ${navToggle ? "" : "nav-toggle"}`}>
      <div className="header__left">
        <div className="header__menu">
          <IconButton>
            <MenuIcon onClick={navClick} />
          </IconButton>
        </div>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__search">
        <input
          className="header__input"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon
            className="header__inputButton"
            variant="contained"
            type="submit"
          />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <AccountCircleIcon
          style={{ fontSize: "2rem" }}
          className="header__icon"
          alt="Andy Welsh"
        />
      </div>
    </div>
  );
}

export default Header;
