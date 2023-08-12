"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_iframe_1 = __importDefault(require("react-iframe"));
function GetYouTubeVideo() {
    return (<div>
        <div className="row justify-content-center">
  <div className="col-8">
    <react_iframe_1.default className="youtubeVideo" url="https://www.youtube.com/embed/qnhhaXDBAx8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></react_iframe_1.default>
  </div>
    </div>

  <div className="container-button">
    <react_router_dom_1.Link to="https://www.youtube.com/@lesgo_epic" className="btn btn-danger fab fa-youtube subscribeButtonYoutube"/>
  </div>


    </div>);
}
exports.default = GetYouTubeVideo;
