import { useState, useEffect } from "react";
import { eventInfo } from "../../models/eventInfo";
import { Link } from "react-router-dom";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";
import GetSchedule from "./schedule";

function GetEvents() {
  let [events, setEvents] = useState<eventInfo[]>([]);
  let url = "https://api.lesgoepic.com/api/web/events";
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
    title: "Upcoming Events",
    description: "LesGo Epic's upcoming events!",
    keywords: "[events, lesgo, epic, lesgo epic, letsgo epic]",
  };

  if (events.length == 0) {
    return (
      <div>
        <SeoHelment {...seoObject} />
        <GetSchedule />
      </div>
    );
  }

  return (
    <div>
      <SeoHelment {...seoObject} />
      <div className="title">
        <h1>Upcoming Events</h1>
      </div>
      <div className="events row">
        {events.map((event: eventInfo, index: number) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-10 eventCard dropIn"
          >
            <div className="card">
              <img src={event.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="date">📅 {event.date}</h4>
                <h4 className="name">📍 {event.name}</h4>
                <h4 className="price">💸 {event.cost} HKD</h4>
                <h4 className="name">🌟 {event.shortDescription}</h4>
                <Link
                  to={"/events/:" + event["_id"]}
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
