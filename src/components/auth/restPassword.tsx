import axios from "axios";
import { useState } from "react";
import Loader from "../common/loader";

function ResetPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [userVerificationCode, setUserVerificationCode] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPasswordConfrim, setUserNewPasswordConfrim] = useState("");
  const [requestStatus, setRequestStatus] = useState(false);
  const [authStatus, setAuthStatus] = useState("");
  const [resetRequest, setResetRequest] = useState("block");

  async function handleSendResetCode(event: any) {
    event.preventDefault();
    setRequestStatus(true);
    let auth = await axios.post(
      "https://api.lesgoepic.com/api/web/sendResetCode",
      { email: userEmail }
    );
    if (auth.data.status == 200) {
      setAuthStatus("");
      setResetRequest("none");
    } else {
      // console.log(auth.data.message);
      setAuthStatus(auth.data.message);
    }
    setRequestStatus(false);
  }

  async function handleResetPassword(event: any) {
    event.preventDefault();
    setRequestStatus(true);
    if (checkPasswords()) {
      let auth = await axios.post(
        "https://api.lesgoepic.com/api/web/resetPassword",
        {
          email: userEmail,
          code: userVerificationCode,
          password: userNewPassword,
        }
      );
      if (auth.data.status == 200) {
        setAuthStatus("");
        setResetRequest("block");
        const timestamp = (new Date().getTime()).toString()
        localStorage.setItem("timestamp", timestamp)
        localStorage.setItem("token", auth.data.token);
        localStorage.setItem("username", auth.data.username);
        localStorage.setItem("email", auth.data.email);
        window.location.href = "/";
      } else {
        // console.log(auth.data.message);
        setAuthStatus(auth.data.message);
      }
      setRequestStatus(false);
    }
    setRequestStatus(false);
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    switch (name) {
      case "userVerificationCode":
        setUserVerificationCode(value);
        break;
      case "userEmail":
        setUserEmail(value);
        break;
      case "userNewPassword":
        setUserNewPassword(value);
        break;
      case "userNewPasswordConfrim":
        setUserNewPasswordConfrim(value);
        break;
      default:
        break;
    }
  }

  function checkPasswords() {
    if (userNewPassword === userNewPasswordConfrim) {
      return true;
    } else {
      // Passwords don't match
      setAuthStatus("Passwords do not match");
    }
  }

  if (requestStatus) {
    return <Loader />;
  }
  return (
    <div className="col-10 col-lg-8 signInCol dropIn">
      <div className="row signInRow">
        <h3 className="">
          <b>Reset Password</b>{" "}
        </h3>
        <div className="col-12">
          <form
            onSubmit={(event) => handleSendResetCode(event)}
            className="signUp"
            style={{ display: resetRequest }}
          >
            <h4 className="name">
              <b>Enter your Email:</b>
            </h4>
            <input
              type="email"
              name="userEmail"
              value={userEmail}
              onChange={handleChange}
              className="formTextInputMyAccount "
              placeholder="Enter your Email"
              required
            />
            {authStatus && <p className="error">{authStatus}</p>}
            <button type="submit" className="btn registerButton signUpButton">
              Send Verification Code
            </button>
          </form>

          <form
            onSubmit={(event) => handleResetPassword(event)}
            className="signUp"
            style={{ display: resetRequest == "block" ? "none" : "block" }}
          >
            <h4 className="name">
              <b>Enter your new Password:</b>
            </h4>
            <input
              type="password"
              name="userNewPassword"
              value={userNewPassword}
              onChange={handleChange}
              className="formTextInputMyAccount "
              placeholder="Enter your Email"
              required
            />
            <h4 className="name">
              <b>Confirm your new Password:</b>
            </h4>
            <input
              type="password"
              name="userNewPasswordConfrim"
              value={userNewPasswordConfrim}
              onChange={handleChange}
              className="formTextInputMyAccount "
              placeholder="Enter your Email"
              required
            />
            <h4 className="name">
              <b>Enter Verification Code:</b>
            </h4>
            <input
              type="password"
              name="userVerificationCode"
              value={userVerificationCode}
              onChange={handleChange}
              className="formTextInputMyAccount "
              placeholder="Enter your Email"
              required
            />
            {authStatus && <p className="error">{authStatus}</p>}
            <button type="submit" className="btn registerButton signUpButton">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
