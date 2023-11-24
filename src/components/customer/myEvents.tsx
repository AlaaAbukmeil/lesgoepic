import { useState, useEffect } from "react";
import Loader from "../common/loader";
import { postRequestOptions } from "../common/cookie";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";
import { handleAuth } from "../common/cookie";
import { formatTimestamp } from "../common/common";
import { downloadReciept } from "../common/common";

function MyEvents() {
  const [requestStatus, setRequestStatus] = useState(false);
  let [userCredit, setUserCredit] = useState(0);
  const [userResponses, setUserResponses] = useState([]);

  let url = "https://api.lesgoepic.com/api/web/getUserEvents";

  useEffect(() => {
    postRequestOptions["headers"]["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    setRequestStatus(true);
    fetch(url, postRequestOptions)
      .then((res) => {
        handleAuth(res.status);
        return res.json();
      })
      .then((data) => {
        setUserResponses(data.userResponses);
        setUserCredit(data.userCredit);
        setRequestStatus(false);
      });
  }, []);

  let seoObject: seoParams = {
    title: "My Events",
    description: "LesGo Epic's User Events",
    keywords:
      "[events, lesgo, epic, lesgo epic, letsgo epic, login, events, reciept]",
      meta: {
        name: `description`,
        content: "User Events",
      }
  };

  if (requestStatus) {
    return <Loader />;
  }

  if(userResponses.length == 0){
    <div className="row signInCard">
    <SeoHelment {...seoObject} />
    <h4 className="creditText">Credit: {userCredit} HKD</h4>
    <h4>No Events yet! Check it our upcoming events</h4>
   
  </div>
  }

  function handleDownloadReciept(eventName: string, response: any){
    downloadReciept(eventName, response)
  }

  return (
    <div className="row signInCard">
      <SeoHelment {...seoObject} />
      <h4 className="creditText">Credit: {Math.round(userCredit)} HKD</h4>

      {userResponses.map((response: any, index) => {
        let meetingUpDetails = response.eventMeetingUpDetails;
        meetingUpDetails = meetingUpDetails.substring(0, 300) + " ..."

        return (
          <div key={index} className="row postsCard myEventsCard dropIn">
            <div className="col-lg-4 col-xs-12 postsContainer">
              <img
                src={response.eventImage}
                className=" myEventsImage"
                alt={response.eventName}
              />
            </div>
            <div className="col postsContainer myEventsContainer postText">
              <h6 className="date descriptionAlbums">
                Submission Time: {formatTimestamp(response.submissionTime)}
              </h6>
              <h4 className="name descriptionAlbums">
                Event Name: {response.eventName}
              </h4>
              <h4 className="name descriptionAlbums">
                Event Cost: {response.eventCost}
              </h4>
              <h4 className="name descriptionAlbums">
                Credits Obtained by the event: {response.eventCost / 10} HKD
              </h4>
              <h4 className="name descriptionAlbums">
                Payment Method:{" "}
                {response.paymentMethod === "cash"
                  ? "Cash - " + response.timeslot
                  : response.paymentMethod}
              </h4>
              <h4 className="name descriptionAlbums">
                Contact Info: {response.whatsApp}
              </h4>
              <h4 className="name descriptionAlbums">
                Meeting Up Details: 
              </h4>
              
              <h4 className="name formNotes" dangerouslySetInnerHTML={ {__html: meetingUpDetails} } />
              <div>
            <button className="btn signupButton" onClick={(event) => handleDownloadReciept(response.eventName, response)}>Download Reciept</button>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyEvents;
