import { eventInfo } from "../../models/eventInfo";
import { useState } from "react";
import Loader from "../common/loader";
import { postRequestOptions } from "../common/cookie";
import axios from "axios";
import Registered from "./registered";

function getEventInformation(eventDetails: eventInfo) {
  let description: any = eventDetails.description;
  return (
    <div>
      {" "}
      <center>
        <h2>{eventDetails.name}</h2>
      </center>
      <p className="formDescription">📍 {eventDetails.location}</p>
      <p className="formDescription">🗓 {eventDetails.date}</p>
      <p className="formDescription"> 💸 {eventDetails.cost} HKD</p>
      <p
        className="formDescription"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}

function EventDetailsMainCard(eventDetails: eventInfo) {
  let eventInformation = getEventInformation(eventDetails);
  let formPostUrl = "https://api.lesgoepic.com/api/web/register/:" + eventDetails["_id"];
  let timeslots = eventDetails["timeslots"].split("/");
  let questions = eventDetails["questions"].split("/");
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [fpsInput, setFpsInput] = useState(false);
  const [cashInput, setCashInput] = useState(true);
  const [requestStatus, setRequestStatus] = useState(false);
  const [registered, setRegistered] = useState("block");
  

  function handleChange(event: any) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  }

  const handlePayment = (event: any) => {
    const fpsPayMe: any = document.getElementById("FPS/PayMe");
    const stripe: any = document.getElementById("stripe");
    const cash: any = document.getElementById("cash");
    if (event.target.value === "FPS/PayMe") {
      fpsPayMe.style.display = "block";
      stripe.style.display = "none";
      cash.style.display = "none";
      setFpsInput(false);
      setCashInput(true);
    } else if (event.target.value === "stripe") {
      fpsPayMe.style.display = "none";
      stripe.style.display = "block";
      cash.style.display = "none";
      setFpsInput(true);
      setCashInput(true);
    } else if (event.target.value === "cash") {
      fpsPayMe.style.display = "none";
      stripe.style.display = "none";
      cash.style.display = "block";
      setFpsInput(true);
      setCashInput(false);
    }
  };

  async function handleSubmit(event: any) {
    try {
      setRequestStatus(true);
      const form: any = document.getElementById("form");
      const formData: any = new FormData(form);
      formData.append("userEventId", eventDetails["_id"])
      formData.append("eventCost", eventDetails["cost"])
      formData.append("eventMeetingUpDetails", eventDetails["meetingUpDetails"])
      formData.append("eventName", eventDetails["name"])
      formData.append("eventImage", eventDetails["image"])
      formData.append("eventDate", eventDetails["date"])
      formData.append("submissionTime", new Date().getTime())
      const action = await axios.post(
        formPostUrl,
        formData,
        postRequestOptions
      );
      if (action.data.status == 200) {
        setRequestStatus(false);
        setRegistered("none");
      }
      setRequestStatus(false);
    } catch (error) {}
    setRequestStatus(false);
  }

  if (requestStatus) {
    return <Loader />;
  }

  if (registered == "none") {
    return (
      <div className="cardFormRegistration col-lg-8 col-xs-12 col-sm-12 card-1">
        <Registered />
      </div>
    );
  }

  return (
    <div className="cardFormRegistration col-lg-8 col-xs-12 col-sm-12 card-1">
      {eventInformation}

      <div className="row" id="mainCard" style={{ display: registered }}>
        <div className="">
          <form
            id="form"
            name="registerParticipant"
            onSubmit={(event) => handleSubmit(event)}
            encType="multipart/form-data"
          >
            <div className="card">
              <div className="card-body formCardBody">
                <h4 className="name">
                  <b>Name:</b>
                </h4>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  className="formTextInput "
                  placeholder="Enter Your Name"
                  required
                />

                <h4 className="name">
                  <b>Email:</b>{" "}
                </h4>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="formTextInput "
                  placeholder="Enter Your Email"
                  required
                />

                <h4 className="name">
                  <b>WhatsApp Number:</b>{" "}
                </h4>
                <input
                  type="text"
                  name="whatsApp"
                  id="whatsApp"
                  className="formTextInput "
                  placeholder="Enter Your WhatsApp's Number"
                  required
                />

                {questions.map((question, index) => (
                  <div key={index}>
                    <label htmlFor={question} className="name">
                      <b>{question}</b>
                    </label>
                    <br />
                    <input
                      type="text"
                      name={question}
                      id={question}
                      className="formTextInput "
                      required
                    ></input>
                  </div>
                ))}
                <h4 className="name">
                  <b>Payment Method:</b>{" "}
                </h4>
                <select
                  title="paymentMethod"
                  className="formTextInput"
                  name="paymentMethod"
                  id="paymentMethod"
                  onChange={handlePayment}
                  required
                >
                  <option value="FPS/PayMe">FPS/PayMe</option>
                  <option value="stripe">
                    Credit/Debit Card, Alipay, WeChat Pay, Apple Pay
                  </option>
                  <option value="cash">Cash</option>
                </select>

                <div className="FPS/PayMe dropIn" id="FPS/PayMe">
                  <h4 className="name">
                    <b>FPS/PayMe ID: +85265357490</b>
                  </h4>
                  <label htmlFor="fps/paymeProof" className="name">
                    Please upload a photo of the fps/payme transaction
                  </label>
                  <div>
                    <input
                      type="file"
                      className="formTextInput fpsInput"
                      name="fps/paymeProof"
                      id="fps/paymeProof"
                      accept="image/*"
                      disabled={fpsInput}
                      required
                    />
                  </div>
                </div>
                <div className="stripe dropIn" id="stripe">
                  <h4 className="name">
                    <b>
                      Please finish the Credit/Debit Card, Alipay, Wechat Pay, Apple Pay
                      transaction through this button. All payments are processed by a third secure party - Stripe
                    </b>
                  </h4>
                  <h4 className="name">
                    Please remember to submit the form after you finish
                    processing the payment!
                  </h4>
                  <div className="">
                    <a
                      href={eventDetails['stripe']}
                      target="_blank"
                      className=" btn credit-icon"
                    >
                      {" "}
                      Credit/Debit Card, Alipay, Wechat Pay, Apple Pay{" "}
                    </a>
                  </div>
                </div>
                <div className="cash dropIn" id="cash">
                  <h4 className="name">
                    <b>
                      Please Select a time slot to process the payment in cash.
                    </b>
                  </h4>
                  <select
                    title="timeslot"
                    className="formTextInput"
                    name="timeslot"
                    disabled={cashInput}
                    required
                  >
                    {timeslots.map((timeslot, index) => (
                      <option key={index} className="formTextInput">
                        {timeslot}
                      </option>
                    ))}
                  </select>
                </div>

                <b>
                  <input
                    title="payment agreement"
                    type="checkbox"
                    name=""
                    value=""
                    className="text-confirm"
                    required
                  />
                  I confirm that I have completed the payment via FPS/PayMe,
                  Credit/Debit, Alipay, Wechat Pay or picked a cash time slot{" "}
                  <br />{" "}
                  <input
                    title="terms&conditions agreement"
                    type="checkbox"
                    name=""
                    className="text-confirm"
                    value=""
                    required
                  />
                  I agree to LesGo Epic's{" "}
                  <a href="/terms-conditions">Terms and Conditions </a>{" "}
                </b>
                <div className="twoButtons">
                  <button type="submit" className="btn registerButton">
                    Sign Up!
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsMainCard;
