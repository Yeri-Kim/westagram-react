import React, { Component } from "react";
import "../pages/Common.css";
import "../pages/Main.css";
import logoText from "../components/image/logo_text.png";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="topBox">
          <div className="link-left">
            <a href="">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
            </a>
            <div className="slash"></div>
            <a className="logo_img" href="">
              <img src={logoText} />
            </a>
          </div>
          <div className="search">
            <input type="search" placeholder="검색" />
          </div>
          <div className="link-right">
            <a href="">
              <img
                className="search-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </a>
            <a href="">
              <img
                className="heart-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </a>
            <a href="">
              <img
                className="mypage-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
