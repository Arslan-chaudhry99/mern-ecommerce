import React from "react";
import { useState } from "react";
import axios from "axios";
const Resetpass = () => {
  const [Reset, setReset] = useState({
    email: "",
  });
  const setInfor = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setReset({ ...Reset, [name]: value });
  };
  const signup_submit = async (event) => {
    event.preventDefault();
    const { email } = Reset;
    if (!email) {
      return alert("confom password not the same.");
    }
    let res = await axios.post("/ResetPass", Reset);
  };
  return (
    <>
      <div id="login-box2">
        <div class="left">
          <h1>Reset Password</h1>
          <form method="post">
            <input
              type="text"
              name="email"
              placeholder="Example@gmail.com"
              onChange={setInfor}
            />
            <input type="submit" onClick={signup_submit} value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpass;
