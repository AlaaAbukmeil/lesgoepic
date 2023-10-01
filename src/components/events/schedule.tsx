import { useState, useEffect } from "react";
import Loader from "../common/loader"
import { scheduleInfo } from "../../models/scheduleInfo";

function GetSchedule() {
  const language = localStorage.getItem("language");
  let url: any = `https://api.lesgoepic.com/api/web/schedule?language=${language}`
  let [schedule, setSchedule] = useState<scheduleInfo>();
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSchedule(data.schedule);
      });
  }, [url]);
  if(!schedule){
    return(<div><Loader /></div>)
  }
  return (
    <div>
      <div className="title scheduleTitle">
        <h1>
          {language == "en" ? "Our Monthly Schedule for": "我們的每月日程表"} <br />
          {schedule["scheduleTime"]}
        </h1>
      </div>
      <div
        id="schedule"
        className="col-lg-4 col-md-6 col-10 eventCard scheduleInfo"
      >
        <img
          src={schedule["image"]}
          className="card-img-top dropIn"
          alt="lesgo epic schedule"
        />
      </div>
    </div>
  );
}
export default GetSchedule;
