import { useState, useEffect } from "react";
import { eventInfo } from "../../models/eventInfo";
import { Link } from "react-router-dom";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";
import GetSchedule from "./schedule";



function GetEvents() {
  let [events, setEvents] = useState<eventInfo[]>([]);
  const language = localStorage.getItem("language")
  let url = `https://api.lesgoepic.com/api/web/events?language=${language}`
  
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data.events);
      });
  }, []);

  let seoObject: seoParams = {
    title: language == "en" ? "Upcoming Events": "活動預告",
    description: "LesGo Epic's upcoming events",
    keywords: "[events, lesgo, epic, lesgo epic, letsgo epic]",
    meta: {
      name: `description`,
      content: "upcoming events",
    }
  };

  if (events.length == 0) {
    return (
      <div>
        <SeoHelment {...seoObject} />
        <GetSchedule />
      </div>
    );
  }
function handleUpcomingEventsRedirect(event: any, url: any): any{
  window.location.href = url
}
  return (
    <div>
      <SeoHelment {...seoObject} />
      <div className="title">
        <h1>{language == "en" ? "Upcoming Events": "活動預告"}</h1>
      </div>
      <div className="events row">
        {events.map((upcoming: eventInfo, index: number) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-10 eventCard dropIn"
            onClick={(event) => handleUpcomingEventsRedirect(event, "/events/:" + upcoming["_id"] || "")}
          >
            <div className="card">
              <img src={upcoming.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="date">📅 {upcoming.date}</h4>
                <h4 className="name">📍 {upcoming.name}</h4>
                <h4 className="price">💸 {upcoming.cost} HKD</h4>
                <h4 className="name">🌟 {upcoming.shortDescription}</h4>
                <Link
                  to={"/events/:" + upcoming["_id"]}
                  className="btn signupButton"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <GetSchedule />
    </div>
  );
}

export default GetEvents;
