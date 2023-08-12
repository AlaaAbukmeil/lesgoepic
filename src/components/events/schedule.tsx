import { useState, useEffect } from "react";
import Loader from "../common/loader"
import { scheduleInfo } from "../../models/scheduleInfo";

function GetSchedule() {
  let url: any = "https://api.lesgoepic.com/api/web/schedule"
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
          Our Monthly Schedule for <br />
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
          alt="schedule"
        />
      </div>
    </div>
  );
}
export default GetSchedule;
