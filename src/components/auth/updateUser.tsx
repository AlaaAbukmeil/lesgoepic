import { useState } from "react";
import Loader from "../common/loader";
import axios from "axios";
import { postRequestOptions } from "../common/cookie";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function UpdateUser() {
  const [requestStatus, setRequestStatus] = useState(false);
  const [authStatus, setAuthStatus] = useState("");

  async function getUserDetails(){
    postRequestOptions["headers"]["Authorization"] = "Bearer " + localStorage.getItem("token")
    let auth = await axios("https://api.lesgoepic.com/api/web/getUserInfo", postRequestOptions)
    if(auth.data.status == 200){
        
    }else{
        window.location.href = "/auth"
    }
  }


  let savedUsername = localStorage.getItem("username")
  let savedEmail = localStorage.getItem("email")
  const [username, setUsername] = useState(savedUsername);
  const [email, setEmail] = useState(savedEmail);
  const [password, setPassword] = useState("");

  let seoObject: seoParams = {
    title: "Settings",
    description: "LesGo Epic's User Settings",
    keywords: "[events, lesgo, epic, lesgo epic, letsgo epic, login, setting]",
  };

  function handleChange(event: any) {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  if (!savedUsername) {
    window.location.href = "/auth";
  }

  getUserDetails()


  async function handleUpdateUser(event: any) {
    event.preventDefault();
    let data = {
      username: username,
      email: savedEmail,
      newEmail: email,
      password: password,
      token: localStorage.getItem("token"),
    };

    try {
      setRequestStatus(true);
      let auth = await axios.post(
        "https://api.lesgoepic.com/api/web/updateUser",
        data,
        postRequestOptions
      );
      setRequestStatus(false);
      // console.log(auth)
      if (auth.data.status == 200) {
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        localStorage.removeItem("username")
        localStorage.removeItem("timestamp")
        const timestamp = (new Date().getTime()).toString()
        localStorage.setItem("timestamp", timestamp)
        localStorage.setItem("token", auth.data.token)
        localStorage.setItem("email", auth.data.email)
        localStorage.setItem("username", auth.data.username)
        window.location.href = "/";
      } else {
        setAuthStatus(auth.data.message);
      }
    } catch (error) {}

    setRequestStatus(false);
  }

  const handleDeleteUser = () => {
    window.location.href = "/delete-user";
  };

  if (requestStatus) {
    return <Loader />;
  }

  return (
    <div className="row signInCard">
      <SeoHelment {...seoObject} />
      <div className="col-10 col-lg-8 signInCol dropIn">
        <div className="row signInRow">
          <h3 className="">
            <b>Settings</b>{" "}
          </h3>
          <div className="col-12">
            <form
              className="signUp"
              onSubmit={(event) => handleUpdateUser(event)}
            >
              <h4 className="name">
                <b>Change your Username:</b>
              </h4>
              <input
                type="text"
                name="username"
                value={username || ""}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder={"Current Username" + username}
                required
              />
              <h4 className="name">
                <b>Change your Email:</b>
              </h4>
              <input
                type="email"
                name="email"
                value={email || ""}
                onChange={handleChange}
                className="formTextInputMyAccount "
                placeholder={"Current Email: " + email}
                required
              />
              <h4 className="name">
                <b>Enter your Password:</b>
              </h4>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="formTextInputMyAccount"
                placeholder="Enter your password"
                required
              />
              {authStatus && <p className="error">{authStatus}</p>}
              <button
                type="button"
                onClick={handleDeleteUser}
                className="btn signUpButton delete-user btn-danger"
              >
                Delete Account
              </button>
              
              <button type="submit" className="btn registerButton signUpButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
