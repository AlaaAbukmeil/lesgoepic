"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const youtubeVideo_1 = __importDefault(require("./youtubeVideo"));
const schedule_1 = __importDefault(require("./schedule"));
const seoHelment_1 = __importDefault(require("../common/seoHelment"));
const proxy_1 = __importDefault(require("../common/proxy"));
function GetEvents() {
    let [events, setEvents] = (0, react_1.useState)([]);
    let url = proxy_1.default + "/events";
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            setEvents(data.events);
        });
    }, []);
    let seoObject = {
        title: "Upcoming Events",
        description: "LesGo Epic's upcoming events!",
        keywords: "[events, lesgo, epic, lesgo epic, letsgo epic]",
    };
    return (<div>
      <seoHelment_1.default {...seoObject}/>
      <div className="title">
        <h1>Upcoming Events</h1>
      </div>
      <div className="events row">
        {events.map((event, index) => (<div key={index} className="col-lg-4 col-md-6 col-10 eventCard dropIn">
            <div className="card">
              <img src={event.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="date">📅 {event.date}</h4>
                <h4 className="name">📍 {event.name}</h4>
                <h4 className="price">💸 {event.cost}</h4>
                <h4 className="name">🌟 {event.shortDescription}</h4>
                <react_router_dom_1.Link to={"events/:" + event["_id"]} className="btn signupButton">
                  Sign up
                </react_router_dom_1.Link>
              </div>
            </div>
          </div>))}
      </div>
      <youtubeVideo_1.default />
      <schedule_1.default />
    </div>);
}
exports.default = GetEvents;
