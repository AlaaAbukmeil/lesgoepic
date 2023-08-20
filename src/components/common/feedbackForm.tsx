import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";
import { useState } from "react";
import Loader from "../common/loader";
import { postRequestOptions } from "../common/cookie";
import axios from "axios";
import Submitted from "./submitted";

function FeedbackForm() {
  let seoObject: seoParams = {
    title: "Feedback Form",
    description: "LesGo Epic's Feedback Form",
    keywords: "[values, principles, epic, lesgo epic, letsgo epic, feedback]",
    meta: {
      name: `description`,
      content: "Feedback Form",
    }
    
  };
  const [requestStatus, setRequestStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      setRequestStatus(true);
      let formPostUrl = "https://api.lesgoepic.com/api/web/feedback";
      const form: any = document.getElementById("form");
      const formData: any = new FormData(form);
      const action = await axios.post(
        formPostUrl,
        formData,
        postRequestOptions
      );

      if (action.data.status == 200) {
        setSubmitted(true);
        setRequestStatus(false);
      }
      setRequestStatus(false);
    } catch (error) {}
    setRequestStatus(false);
  }

  if (requestStatus) {
    return <Loader />;
  }
  return (
    <div className="cardFormRegistration col-lg-10 col-10 col-xs-10 col-sm-10 feedback-container">
      <SeoHelment {...seoObject} />
      {!submitted && (
        <div>
          <p>
            We have created this form for you to tell us how you feel about our
            events, website, videos, policies, etc. Please note that this form
            is completely anonymous and the answers to this feedback form will
            never be shared with anyone but organizers to reflect upon and
            improve. Thank you for sharing your thoughts with us ;)
          </p>
          <div className="row" id="mainCard">
            <div className="">
              <form
                name="feedbackForm"
                id="form"
                onSubmit={(event) => handleSubmit(event)}
              >
                <div className="card">
                  <div className="card-body formCardBody">
                    <h4 className="name">
                      <b>What outdoor activity did you participate in?</b>
                    </h4>
                    <input
                      type="text"
                      name="question-1"
                      id="activity"
                      className="formTextInput"
                      placeholder="Enter the activity name"
                      required
                    />

                    <h4 className="name">
                      <b>
                        On a scale of 1-10, how would you rate your overall
                        experience?
                      </b>
                    </h4>
                    <input
                      title="experince"
                      type="text"
                      name="question-2"
                      id="experience"
                      className="formTextInput"
                      placeholder="1 - 10"
                      required
                    />

                    <h4 className="name">
                      <b>Was the event well-organized and easy to navigate?</b>
                    </h4>
                    <input
                      type="text"
                      name="question-3"
                      id="organization"
                      className="formTextInput"
                      placeholder="Your answer"
                      required
                    />

                    <h4 className="name">
                      <b>
                        How would you rate the facilities (e.g., parking,
                        bathrooms, food/beverage options)?
                      </b>
                    </h4>
                    <input
                      title="facilities"
                      type="text"
                      name="question-4"
                      id="facilities"
                      placeholder="1 - 10"
                      className="formTextInput"
                      required
                    />

                    <h4 className="name">
                      <b>
                        How would you rate your interactions with the other
                        participants?
                      </b>
                    </h4>
                    <input
                      title="staff-interaction"
                      type="text"
                      name="question-5"
                      placeholder="1 - 10"
                      id="staff-interaction"
                      className="formTextInput"
                      required
                    />

                    <h4 className="name">
                      <b>Did you feel safe during the activity?</b>
                    </h4>
                    <input
                      type="text"
                      name="question-6"
                      id="safety"
                      className="formTextInput"
                      placeholder="Your answer"
                      required
                    />

                    <h4 className="name">
                      <b>What did you like most about the outdoor activity?</b>
                    </h4>
                    <input
                      type="text"
                      name="question-7"
                      id="like-most"
                      className="formTextInput"
                      placeholder="Your answer"
                      required
                    />

                    <h4 className="name">
                      <b>
                        Would you participate in this outdoor activity again in
                        the future?
                      </b>
                    </h4>
                    <input
                      type="text"
                      name="question-8"
                      id="future-participation"
                      className="formTextInput"
                      placeholder="Yes/No"
                      required
                    />
                    <h4 className="name">
                      <b>How did you hear about this event?</b>
                    </h4>
                    <input
                      type="text"
                      name="question-9"
                      id="source"
                      className="formTextInput"
                      placeholder="Enter source"
                      required
                    />
                    <h4 className="name">
                      <b>
                        Do you have any other comments, questions, or
                        suggestions?
                      </b>
                    </h4>
                    <input
                      type="text"
                      name="question-10"
                      id="feedback"
                      className="formTextInput"
                      placeholder="Your feedback"
                    />
                    <button type="submit" className="btn registerButton">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {submitted && <Submitted />}
    </div>
  );
}
export default FeedbackForm;
