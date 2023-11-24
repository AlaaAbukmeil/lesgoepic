"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../routers/router"));
const react_router_dom_1 = require("react-router-dom");
const navbar_1 = __importDefault(require("./common/navbar"));
const footer_1 = __importDefault(require("./common/footer"));
function App() {
    return (<div className="App">
      <navbar_1.default />
      <react_router_dom_1.RouterProvider router={router_1.default}/>
      <footer_1.default />
    </div>);
}
exports.default = App;
