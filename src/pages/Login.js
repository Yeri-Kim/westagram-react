import React, { Component } from "react";
import "./Common.css";
import "./Login.css";
import logoText from "../components/image/logo_text.png";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="loginBox">
          {/* JSX에서 이미지 넣기 
                 -> 이미지 경로를 import해주고 src={name} 해서 넣기 */}
          <img src={logoText} />
          <input
            className="name"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="password" type="password" placeholder="비밀번호" />
          <button className="js-button">로그인</button>
          <a
            className="findPW"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
