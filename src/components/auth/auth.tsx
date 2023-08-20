import { useState } from "react";
import Loader from "../common/loader";
import axios from "axios";
import { authPostRequestOptions } from "../common/cookie";
import RestPassword from "./restPassword";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function SignUpLogIn() {
  const [signUpDisplay, setSignUpDisplay] = useState("none");
  const [loginDisplay, setLoginDisplay] = useState("block");



  const [requestStatus, setRequestStatus] = useState(false);
  let [authStatus, setAuthStatus] = useState("");
  let [resetPasswordCard, setResetPasswordCard] = useState(false)

  const [username, setUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [ageGroup, setAgeGroup] = useState("18-24");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordConfrim, setSignUpPasswordConfirm] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleChange(event: any) {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "signUpEmail":
        setSignUpEmail(value);
        break;
      case "ageGroup":
        setAgeGroup(value);
        break;
      case "signUpPassword":
        setSignUpPassword(value);
        break;
      case "signUpPasswordConfirm":
        setSignUpPasswordConfirm(value);
        break;
      case "loginEmail":
        setLoginEmail(value);
        break;
      case "loginPassword":
        setLoginPassword(value);
        break;
      default:
        break;
    }
  }

  function checkPasswords() {
    if (signUpPassword === signUpPasswordConfrim) {
      return true;
    } else {
      // Passwords don't match
      setAuthStatus("Passwords do not match");
    }
  }

  let seoObject: seoParams = {
    title: "Login",
    description: "LesGo Epic's Login",
    keywords: "[events, lesgo, epic, lesgo epic, letsgo epic, login, sigup]",
    meta: {
      name: `description`,
      content: "Login/Sign Up",
    }
  };

  async function handleSubmitSignUp(event: any) {
    event.preventDefault();
    if (checkPasswords()) {
      let data = {
        username: username,
        email: signUpEmail,
        ageGroup: ageGroup,
        password: signUpPassword,
      };

      try {
        setRequestStatus(true);
        let auth = await axios.post(
          "https://api.lesgoepic.com/api/web/signUp",
          data,
          authPostRequestOptions
        );
        setRequestStatus(false);
        if (auth.data.status == 200) {
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
      } catch (error) {}
    }
    setRequestStatus(false);
  }

  async function handleSubmitLogin(event: any) {
    event.preventDefault();
    let data = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      setRequestStatus(true);
      let auth = await axios.post(
        "https://api.lesgoepic.com/api/web/login",
        data,
        authPostRequestOptions
      );
      setRequestStatus(false);
      if (auth.data.status == 200) {
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
    } catch (error) {}
  }

  async function showResetCard(event: any){
    setLoginDisplay("none")
    setSignUpDisplay("none")
    setResetPasswordCard(true)
  }
  const toggleDisplay = (event: any) => {
    let name = event.target.name
    setResetPasswordCard(false)
    if(signUpDisplay == loginDisplay){
      if(name == "signUp"){
        setLoginDisplay((prevDisplay) =>
        prevDisplay === "block" ? "none" : "block"
      );
      setAuthStatus("");
      }else{
        setSignUpDisplay((prevDisplay) =>
        prevDisplay === "block" ? "none" : "block"
      );
      setAuthStatus("");
      }
    }
    setSignUpDisplay((prevDisplay) =>
      prevDisplay === "block" ? "none" : "block"
    );
    setLoginDisplay((prevDisplay) =>
      prevDisplay === "block" ? "none" : "block"
    );
    setAuthStatus("");
  };

  if (requestStatus) {
    return <Loader />;
  }

  return (
    <div className="row signInCard">
      <SeoHelment {...seoObject} />
      <div className="col-12 col-lg-8 col-md-10 col-sm-10 signInCol dropIn button-container">
        <button
          className="btn registerButton signUpButton authButtons"
          name="signUp"
          onClick={(event) => toggleDisplay(event)}
        >
          Sign Up
        </button>
        <button
          className="btn registerButton signUpButton authButtons"
          onClick={(event) => toggleDisplay(event)}
          name="login"
        >
          Log In
        </button>
      </div>

      <div
        id="signUp"
        style={{ display: signUpDisplay }}
        className="col-10 col-lg-8 signInCol dropIn"
      >
        <div className="row signInRow">
          <h3 className="">
            <b>Sign Up</b>{" "}
          </h3>
          <div className="col-12">
            <form
              className="signUp"
              onSubmit={(event) => handleSubmitSignUp(event)}
            >
              <h4 className="name">
                <b>Enter Your Full Name</b>
              </h4>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder="e.g. Tim Duke"
                required
              />
              <h4 className="name">
                <b>Enter Your Email</b>
              </h4>
              <input
                type="email"
                name="signUpEmail"
                value={signUpEmail}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder="e.g. team@lesgoepic.com"
                required
              />
              <h4 className="name">
                <b>Enter Your Age Group</b>
              </h4>

              <select
                title="ageGroup"
                value={ageGroup}
                onChange={handleChange}
                className="input-text-sign-up"
                name="ageGroup"
                required
              >
                <option value="18-24">18-24</option>
                <option value="25-30">25-30</option>
                <option value="35-40">35-40</option>
                <option value="40+">40+</option>
              </select>
              <h4 className="name">
                <b>Enter Your Password</b>
              </h4>
              <input
                type="password"
                name="signUpPassword"
                value={signUpPassword}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder="******"
                required
              />
              <h4 className="name">
                <b>Confirm Your Password</b>
              </h4>
              <input
                type="password"
                name="signUpPasswordConfirm"
                value={signUpPasswordConfrim}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder="******"
                required
              />
              {authStatus && <p className="error">{authStatus}</p>}
              <button type="submit" className="btn registerButton signUpButton">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        id="logIn"
        style={{ display: loginDisplay }}
        className="col-10 col-lg-8  signInCol dropIn"
      >
        <div className="row signInRow">
          <h3 className="">
            <b>Log In</b>{" "}
          </h3>
          <div className="col-12">
            <form
              onSubmit={(event) => handleSubmitLogin(event)}
              className="signUp"
            >
              <h4 className="name">
                <b>Enter Your Email</b>
              </h4>
              <input
                type="email"
                name="loginEmail"
                value={loginEmail}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder="e.g. team@lesgoepic.com"
                required
              />
              <h4 className="name">
                <b>Enter Your Password</b>
              </h4>
              <input
                type="password"
                name="loginPassword"
                value={loginPassword}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder="******"
                required
              />
              {authStatus && <p className="error">{authStatus}</p>}
              <button type="button" onClick={(event) => showResetCard(event)} className="btn registerButton signUpButton reset-password">
                Forgot Password?
              </button>
              <button type="submit" className="btn registerButton signUpButton">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>

      {resetPasswordCard && <RestPassword />}
    </div>
  );
}

export default SignUpLogIn;
