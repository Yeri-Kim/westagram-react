import React, { Component } from "react";
import "../pages/Common.css";
import "./Main.css";
import Nav from "../components/MainNav";
import Feed from "../components/MainFeed";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <Feed />
      </>
    );
  }
}

export default Main;
