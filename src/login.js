import React from "react";

function LoginSection(props){
    console.log("props: ", props, props.title)
    return <div className="login-container">
            <form method="post" id='login-form'>
              <h1><img alt='logo' src='img/S-cane.png' id='login-logo'/></h1>
            
              <input type="text" placeholder='아이디를 입력해주세요.'></input>
              <br></br>
              <input type="text" placeholder='비밀번호를 입력해주세요.'></input>
              <br></br>
              <button>로그인</button>
              <div id='sign-in-button'>회원가입</div>
            </form>
          </div>
  }

function Login(){
    return (
          <div className='login'>
            <img  alt='login-img' src='img/login_img.png' />
            <LoginSection title="login-container"></LoginSection>
          </div>
      );
}

export default Login;