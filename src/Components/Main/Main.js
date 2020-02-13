import React, { Component } from "react";
import "../Common.css";
import "./Main.css";
import Nav from "./MainNav";
import Feed from "./MainFeed";

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
