"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const eventDetailsSubCard_1 = __importDefault(require("./eventDetailsSubCard"));
const eventDetailsMainCard_1 = __importDefault(require("./eventDetailsMainCard"));
const loader_1 = __importDefault(require("../common/loader"));
const eventRegisterationClosed_1 = __importDefault(require("./eventRegisterationClosed"));
const seoHelment_1 = __importDefault(require("../common/seoHelment"));
const proxy_1 = __importDefault(require("../common/proxy"));
function GetEventDetails() {
    let [event, setEventDetails] = (0, react_1.useState)();
    let params = (0, react_router_dom_1.useParams)();
    let url = proxy_1.default + "/events/" + params.eventId;
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            if (data.eventDetails) {
                setEventDetails(data.eventDetails);
            }
            else {
                setEventDetails(data.status);
            }
        });
    }, []);
    let seoObject = {
        title: (event === null || event === void 0 ? void 0 : event.name) || "Events",
        description: (event === null || event === void 0 ? void 0 : event.description) || "Events",
        keywords: "[event, lesgo epic, hong kong, fun, university, hiking, kayaking ]",
    };
    if (event == null) {
        return (<div>
        <loader_1.default />
      </div>);
    }
    if (event.cost) {
        return (<div className="row">
        <seoHelment_1.default {...seoObject}/>
        <eventDetailsSubCard_1.default {...event}/>
        <eventDetailsMainCard_1.default {...event}/>
      </div>);
    }
    else {
        return (<div>
        <eventRegisterationClosed_1.default />
      </div>);
    }
}
exports.default = GetEventDetails;
