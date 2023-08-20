import { useState } from "react";
import Loader from "../common/loader";
import axios from "axios";
import { postRequestOptions } from "../common/cookie";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function DeleteUser() {
  const [requestStatus, setRequestStatus] = useState(false);
  const [authStatus, setAuthStatus] = useState("");



  let email = localStorage.getItem("email")
  const [password, setPassword] = useState("");

  let seoObject: seoParams = {
    title: "Delete Account",
    description: "LesGo Epic's User Settings",
    keywords: "[events, lesgo, epic, lesgo epic, letsgo epic, login, setting, delete account]",
    meta: {
      name: `description`,
      content: "User Settings",
    }
  };

  function handleChange(event: any) {
    const { name, value } = event.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }



  async function handleDeleteUser(event: any) {
    event.preventDefault();
    let data = {
      email: email,
      password: password,
      token: localStorage.getItem("token")
    };

    try {
      // getUserDetails()
      setRequestStatus(true);
      let auth = await axios.post(
        "https://api.lesgoepic.com/api/web/deleteUser",
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
        window.location.href = "/";
      } else {
        setAuthStatus(auth.data.message);
      }
    } catch (error) {}

    setRequestStatus(false);
  }


  if (requestStatus) {
    return <Loader />;
  }

  return (
    <div className="row signInCard">
      <SeoHelment {...seoObject} />
      <div className="col-10 col-lg-8 signInCol dropIn">
        <div className="row signInRow">
          <h3 className="">
            <b>Delete your account</b>{" "}
          </h3>
          <div className="col-12">
            <form
              className="signUp"
              onSubmit={(event) => handleDeleteUser(event)}
            >
              <h4 className="name">
                <b>{email}</b>
              </h4>
              <h4 className="name">
                <p>We are sorry to let you go! 
                  If you have any feedback for us, please leave us a review on our <a href="/feedback-form">feedback form</a> or raise a ticket on our live chat function.</p>
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
              <button type="submit" className="btn signUpButton delete-user btn-danger">
                Delete Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;
