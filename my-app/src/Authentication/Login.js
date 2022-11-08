import React from "react";
import "./Login.css"
const Login = () => {
  return (
    <>
       <div id="login-box1">
        <div class="left">
          <h1>Login</h1>

          <input type="text" name="username" placeholder="Username" />
          
          <input type="password" name="password" placeholder="Password" />
          
          <input type="submit" name="signup_submit" value="Login Now" />
          <div class="or">OR</div>
          <div style={{display:"flex",justifyContent:"space-around"}}>
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
