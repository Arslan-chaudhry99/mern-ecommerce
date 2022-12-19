import React from "react";
import { useState } from "react";
import axios from "axios";
import Authnav from "./Authnav";
const Resetpassword = () => {
  const [Reset, setReset] = useState({
    Old: "",
    New: "",
    ReNew: "",
    username: "",
  });
  const setInfor = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setReset({ ...Reset, [name]: value });
  };
  const signup_submit = async (event) => {
    event.preventDefault();
    const { New, ReNew, Old, username } = Reset;
    if (New !== ReNew) {
      return alert("confom password not the same.");
    }
    let res = await axios.post("/ResetPassword", { New, Old, username });
  };
  return (
    <>
      <Authnav />
      <div id="login-box1">
        <div class="left">
          <h1>Reset Password</h1>
          <form method="post">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={setInfor}
            />
            <input
              type="text"
              name="Old"
              placeholder="Old Password"
              onChange={setInfor}
            />

            <input
              type="text"
              name="New"
              placeholder="New Password"
              onChange={setInfor}
            />
            <input
              type="text"
              name="ReNew"
              placeholder="Retype Password"
              onChange={setInfor}
            />
            <input type="submit" onClick={signup_submit} value="Reset Now!" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
