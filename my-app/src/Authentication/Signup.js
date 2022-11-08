import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <>
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>

          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
          />
          <input type="submit" name="signup_submit" value="Sign me up" />
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

export default Signup;
