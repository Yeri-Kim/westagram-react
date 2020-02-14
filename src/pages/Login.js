import React, { Component } from "react";
import "./Common.css";
import "./Login.css";
import logoText from "../components/image/logo_text.png";

class Login extends Component {
  constructor(props) {
    super(props);

    //id와 pw의 값을 빈 스트링으로 넣어주는 이유는,
    //input의 id와 pw가 스트링이라는 것을 한번에 알 수 있게 하려고!
    this.state = {
      id: "",
      pw: ""
    };
  }

  //changeHandler 함수 정의 -> event로 바뀐 input값을 setState로 state값 바꿔주기
  changeId = e => {
    this.setState({
      id: e.target.value
    });
  };

  changePw = e => {
    this.setState({
      pw: e.target.value
    });
  };

  //withRouter HOC로 버튼 클릭시 Main 넘어가기
  //id랑 pw이 저장해놓은 값이랑 같을 경우 메인 이동
  goToMain = e => {
    console.log(this.state);
    this.state.id === "_sunghae__" && this.state.pw === "1234"
      ? this.props.history.push("/Main")
      : alert("아이디 또는 비밀번호가 맞지 않습니다.");
  };

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
            // name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            //화면상 변화가 생기면 change 이벤트 실행되게
            onChange={this.changeId}
            value={this.state.id}
          />
          <input
            className="password"
            type="password"
            // name="pw"
            placeholder="비밀번호"
            onChange={this.changePw}
            value={this.state.pw}
          />
          <button
            className="js-button"
            onClick={this.goToMain}
            //style 속성값 줄떈 괄호 한개 더 주기
            style={{ opacity: this.state.id && this.state.pw ? "1" : "0.3" }}
          >
            로그인
          </button>
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
