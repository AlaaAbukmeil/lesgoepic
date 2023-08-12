import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetailsSubCard from "./eventDetailsSubCard";
import EventDetailsMainCard from "./eventDetailsMainCard";
import { eventInfo } from "../../models/eventInfo";
import Loader from "../common/loader";
import RegisterationClosed from "./eventRegisterationClosed";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function GetEventDetails() {
  let [event, setEventDetails] = useState<eventInfo>();
  let params: any = useParams();
  let url: any = "https://api.lesgoepic.com/api/web/events/" + params.eventId;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.eventDetails) {
          setEventDetails(data.eventDetails);
        } else {
          setEventDetails(data.status);
        }
      });
  }, []);

  let seoObject: seoParams = {
    title: event?.name || "Events",
    description:
    event?.description || "Events",
    keywords: "[event, lesgo epic, hong kong, fun, university, hiking, kayaking ]",
  };

  if (event == null) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (event.cost) {
    return (
      <div className="row">
        <SeoHelment {...seoObject} />
        <EventDetailsSubCard {...event} />
        <EventDetailsMainCard {...event} />
      </div>
    );
  } else {
    return (
      <div>
        <RegisterationClosed />
      </div>
    );
  }
}

export default GetEventDetails;
