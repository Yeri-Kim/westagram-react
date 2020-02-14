import React, { Component } from "react";
import "../pages/Common.css";
import "../pages/Main.css";
import MainRight from "./MainRight";

import profileImg from "./image/feed1-profile.jpg";
import threeDot from "./image/three-dot.png";
import feedMain from "./image/feed1-main.jpg";
import heart from "./image/heart.png";
import talk from "./image/talk.png";
import share from "./image/share.png";
import bookmark from "./image/bookmark.png";

class Feed extends Component {
  render() {
    return (
      <section className="main2">
        <article>
          <div className="feed1">
            <div className="feeds-top">
              <header className="feed-info">
                <img className="feed-image" src={profileImg} />
                <a className="feed-id">5rozy_</a>
                <div className="feed-menu">
                  <img src={threeDot} />
                </div>
              </header>
              <div className="main-image">
                <a href="">
                  <img src={feedMain} />
                </a>
              </div>
            </div>
            <div className="feeds-bottom">
              <div className="feeds-bottom1">
                <section className="icon-box">
                  <button type="button">
                    <img src={heart} />
                  </button>
                  <button type="button">
                    <img src={talk} />
                  </button>
                  <button type="button">
                    <img src={share} />
                  </button>
                  <button className="moveIcon" type="button">
                    <img src={bookmark} />
                  </button>
                </section>
                <section className="like">좋아요 1,063개</section>
                <div className="comment-box">
                  <div>
                    <span className="comment-id">5rozy_</span>
                    <span>언니잠싀만!!!!!! 냄새맛집이라고</span>
                  </div>
                  <div className="comment-view">댓글 2개 모두 보기</div>
                  <div className="addComment">
                    <div className="comment-list">
                      <span className="comment-id">br0thersilver</span>
                      <span className="comment-text">멍!!멍멍!!</span>
                      <img src={heart} />
                    </div>
                    <div className="comment-list">
                      <span className="comment-id">jiy00000n</span>
                      <span className="comment-text">아 로지 사랑스로왕,,</span>
                      <img src={heart} />
                    </div>
                  </div>
                </div>
                <div className="uploadTime">15분 전</div>
              </div>
              <section className="submit-box">
                <div>
                  <input
                    className="submitComment"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="submitBtn">게시</button>
                </div>
              </section>
            </div>
          </div>
        </article>
        <MainRight />
      </section>
    );
  }
}

export default Feed;
