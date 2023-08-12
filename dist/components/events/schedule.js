"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const loader_1 = __importDefault(require("../common/loader"));
const proxy_1 = __importDefault(require("../common/proxy"));
function GetSchedule() {
    let url = proxy_1.default + "/schedule";
    let [schedule, setSchedule] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            setSchedule(data.schedule);
        });
    }, [url]);
    if (!schedule) {
        return (<div><loader_1.default /></div>);
    }
    return (<div>
      <div className="title scheduleTitle">
        <h1>
          Our Monthly Schedule for <br />
          {schedule["scheduleTime"]}
        </h1>
      </div>
      <div id="schedule" className="col-lg-4 col-md-6 col-10 eventCard scheduleInfo">
        <img src={schedule["image"]} className="card-img-top dropIn" alt="schedule"/>
      </div>
    </div>);
}
exports.default = GetSchedule;
