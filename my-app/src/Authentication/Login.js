import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [userInfo, setuserInfo] = useState({ username: "", password: "" });
  let name;
  let value;
  const Set_UserInfo = (event) => {
    name = event.target.name;
    value = event.target.value;
    setuserInfo({ ...userInfo, [name]: value });
  };
  console.log(userInfo);
  const Login_Now = async (e) => {
    e.preventDefault();
    const res = await axios.post("/admin", userInfo);
  };

  return (
    <>
      <div id="login-box1">
        <div class="left">
          <h1>Login</h1>
          <form method="post">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={Set_UserInfo}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={Set_UserInfo}
            />
            <input
              type="submit"
              name="signup_submit"
              value="Login Now"
              onClick={Login_Now}
            />
          </form>
          <div class="or">OR</div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button class="social-signin facebook">
              <i class="fa fa-facebook"></i>
            </button>
            <button class="social-signin twitter">
              <i class="fa fa-twitter"></i>
            </button>
            <button class="social-signin google">
              <i class="fa fa-google"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
