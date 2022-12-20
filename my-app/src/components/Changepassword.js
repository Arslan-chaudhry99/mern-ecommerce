import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
const Changepassword = () => {
  const { id, token } = useParams();
  const [Reset, setReset] = useState({
    password: "",
    id: id,
    token: token,
  });

  const setInfor = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setReset({ ...Reset, [name]: value });
  };
  const signup_submit = async (event) => {
    event.preventDefault();
    const { password, id, token } = Reset;
    if (!password || !id || !token) {
      console.log(Reset);
      return alert("Please enter password before continue");
    }
    let res = await axios.post("/changePassword", Reset);
  };
  return (
    <>
      <div id="login-box3">
        <div class="left">
          <h3>Enter New Password</h3>
          <form method="post">
            <input
              type="text"
              name="password"
              placeholder="Enter New Password"
              onChange={setInfor}
            />
            <input type="submit" value="Reset Now" onClick={signup_submit} />
          </form>
        </div>
      </div>
    </>
  );
};
export default Changepassword;
