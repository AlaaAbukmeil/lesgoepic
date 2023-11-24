"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function getEventInformation(eventDetails) {
    let description = eventDetails.description;
    return (<div>
      {" "}
      <center>
        <h2>{eventDetails.name}</h2>
      </center>
      <p className="formDescription">📍 {eventDetails.location}</p>
      <p className="formDescription">🗓 {eventDetails.date}</p>
      <p className="formDescription"> 💸 {eventDetails.cost} </p>
      <p className="formDescription" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>);
}
function EventDetailsMainCard(eventDetails) {
    let eventInformation = getEventInformation(eventDetails);
    let formPostUrl = "/register/:" + eventDetails["_id"];
    // console.log(eventDetails)
    let timeslots = eventDetails["timeslots"].split("/");
    let questions = eventDetails["questions"].split("/");
    const handlePayment = (event) => {
        const fpsPayMe = document.getElementById("FPS/PayMe");
        const stripe = document.getElementById("stripe");
        const cash = document.getElementById("cash");
        if (event.target.value === "FPS/PayMe") {
            fpsPayMe.style.display = "block";
            stripe.style.display = "none";
            cash.style.display = "none";
        }
        else if (event.target.value === "stripe") {
            fpsPayMe.style.display = "none";
            stripe.style.display = "block";
            cash.style.display = "none";
        }
        else if (event.target.value === "cash") {
            fpsPayMe.style.display = "none";
            stripe.style.display = "none";
            cash.style.display = "block";
        }
    };
    const [selectedFile, setSelectedFile] = (0, react_1.useState)(null);
    function handleFileInputChange(event) {
        setSelectedFile(event.target.files[0]);
    }
    function handleSubmit(event) {
        console.log(event);
    }
    return (<div className="cardFormRegistration col-lg-8 col-xs-12 col-sm-12 card-1">
      {eventInformation}

      <div className="row" id="mainCard">
        <div className="">
          <form name="registerParticipant" action={formPostUrl} method="post" encType="multipart/form-data" noValidate>
            <div className="card">
              <div className="card-body formCardBody">
                <h4 className="name">
                  <b>Name:</b>
                </h4>
                <input type="text" name="name" id="name" className="formTextInput " placeholder="Enter Your Name" required/>

                <h4 className="date">
                  <b>Email:</b>{" "}
                </h4>
                <input type="text" name="email" id="email" className="formTextInput " placeholder="Enter Your Email" required/>

                <h4 className="name">
                  <b>WhatsApp Number:</b>{" "}
                </h4>
                <input type="text" name="whatsApp" id="whatsApp" className="formTextInput " placeholder="Enter Your WhatsApp's Number" required/>

                {questions.map((question, index) => (<div key={index}>
                    <label htmlFor={question} className="name">
                      <b>{question}</b>
                    </label>
                    <input type="text" name={question} id={question} className="formTextInput " required></input>
                  </div>))}
                <h4 className="name">
                  <b>Payment Method:</b>{" "}
                </h4>
                <select title="paymentMethod" className="formTextInput" name="paymentMethod" id="paymentMethod" onChange={handlePayment} required>
                  <option value="FPS/PayMe">FPS/PayMe</option>
                  <option value="stripe">
                    Credit/Debit Card, Alipay, WeChat Pay
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
                    <input type="file" className="formTextInput" name="fps/paymeProof" id="fps/paymeProof" accept="image/*" required onChange={handleFileInputChange}/>
                   
                  </div>
                </div>
                <div className="stripe dropIn" id="stripe">
                  <h4 className="name">
                    <b>
                      Please finish the Credit/Debit Card transaction through
                      this button.
                    </b>
                  </h4>
                  <h4 className="name">
                    Please remember to submit the form after you finish
                    processing the payment!
                  </h4>
                  <div className="">
                    <a href="<%=eventDetails['stripe'] %>" target="_blank" className=" btn credit-icon">
                      {" "}
                      Credit/Debit Card{" "}
                    </a>
                  </div>
                </div>
                <div className="cash dropIn" id="cash">
                  <h4 className="name">
                    <b>
                      Please Select a time slot to process the payment in cash.
                    </b>
                  </h4>
                  <select title="timeslot" className="formTextInput" name="timeslot" required>
                    {timeslots.map((timeslot, index) => (<option key={index} className="formTextInput">
                        {timeslot}
                      </option>))}
                  </select>
                </div>

                <b>
                  <input title="payment agreement" type="checkbox" name="" value="" required/>
                  I confirm that I have completed the payment via FPS/PayMe,
                  Credit/Debit, Alipay, Wechat Pay or picked a cash time slot{" "}
                  <br />{" "}
                  <input title="terms&conditions agreement" type="checkbox" name="" value="" required/>
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
    </div>);
}
exports.default = EventDetailsMainCard;
