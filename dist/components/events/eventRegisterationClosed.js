"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youtubeVideo_1 = __importDefault(require("./youtubeVideo"));
function RegisterationClosed() {
    return (<div>
      <div className="card card-form">
        <center>
          <h3 className="eventRegistrationClosedText">
            This Event's Registration Is Closed
          </h3>
          <youtubeVideo_1.default />
        </center>
      </div>
    </div>);
}
exports.default = RegisterationClosed;
