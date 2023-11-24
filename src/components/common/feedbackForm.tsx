import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";
import { useState } from "react";
import Loader from "../common/loader";
import { postRequestOptions } from "../common/cookie";
import axios from "axios";
import Submitted from "./submitted";

function FeedbackForm() {
  const language = localStorage.getItem("language");
  let seoObject: seoParams = {
    title: language == "en" ? "Feedback Form" : "反饋表格",
    description: "LesGo Epic's Feedback Form",
    keywords: "[values, principles, epic, lesgo epic, letsgo epic, feedback]",
    meta: {
      name: `description`,
      content: "Feedback Form",
    },
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
            {language == "en"
              ? `We have created this form for you to tell us how you feel about our
            events, website, videos, policies, etc. Please note that this form
            is completely anonymous and the answers to this feedback form will
            never be shared with anyone but organizers to reflect upon and
            improve. Thank you for sharing your thoughts with us ;)`
              : `我們為您創建了這個表格，讓您告訴我們您對我們的活動、網站、視頻、政策等的感受。請注意，這個表格是完全匿名的，並且這個反饋表格的答案將永遠不會與任何人分享，只有組織者才會反思並改進。感謝您與我們分享您的想法；)`}
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
                      <b>
                        {language == "en"
                          ? "What outdoor activity did you participate in?"
                          : "您參加了哪種室外活動？"}
                      </b>
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
                        {language == "en"
                          ? "On a scale of 1-10, how would you rate your overall experience?"
                          : "在1-10的等級上，您如何評價您的整體體驗？"}
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
                      <b>
                        {language == "en"
                          ? "Was the event well-organized and easy to navigate?"
                          : "活動是否組織得很好，容易導航？"}
                      </b>
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
                        {language == "en"
                          ? "How would you rate the facilities (e.g., parking, bathrooms, food/beverage options)?"
                          : "您如何評價設施（例如，停車場，浴室，食品/飲料選擇）？"}
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
                        {language == "en"
                          ? "How would you rate your interactions with the other participants?"
                          : "您如何評價與其他參與者的互動？"}
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
                      <b>
                        {language == "en"
                          ? "Did you feel safe during the activity?"
                          : "您在活動期間感到安全嗎？"}
                      </b>
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
                      <b>
                        {language == "en"
                          ? "What did you like most about the outdoor activity?"
                          : "您最喜歡室外活動的哪一部分？"}
                      </b>
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
                        {language == "en"
                          ? "Would you participate in this outdoor activity again in the future?"
                          : "您將來會再參加這項室外活動嗎？"}
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
                      <b>
                        {" "}
                        {language == "en"
                          ? "How did you hear about this event?"
                          : "您是如何得知這次活動的？"}
                      </b>
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
                        {language == "en"
                          ? "Do you have any other comments, questions, or suggestions?"
                          : "您有其他的評論，問題或建議嗎？"}
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
