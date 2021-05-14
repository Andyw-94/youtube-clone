import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClickOpen = () => {
    setNavToggle(!navToggle);
  };

  const navClickClose = () => {
    setNavToggle(navToggle);
  };

  return (
    <div className="app">
      <Router>
        <div className={`${navToggle ? "nav-toggle" : ""}`}>
          <Header />
        </div>
        <Sidebar />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
