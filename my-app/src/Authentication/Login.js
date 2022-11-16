import React from "react";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const data = { name: "Arslan", age: 20 };
  const dumy = async () => {
    const res = await axios.post("/admin", data);
    console.log(res);
  };

  return (
    <>
      <button onClick={dumy}>Click</button>
      <div id="login-box1">
        <div class="left">
          <h1>Login</h1>

          <input type="text" name="username" placeholder="Username" />

          <input type="password" name="password" placeholder="Password" />

          <input type="submit" name="signup_submit" value="Login Now" />
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
