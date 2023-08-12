"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const loader_1 = __importDefault(require("../common/loader"));
const proxy_1 = __importDefault(require("../common/proxy"));
const seoHelment_1 = __importDefault(require("../common/seoHelment"));
function GetAlbums() {
    let [albums, setAlbums] = (0, react_1.useState)([]);
    let url = proxy_1.default + "/albums";
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            setAlbums(data.albums);
        });
    }, []);
    let seoObject = {
        title: "Albums",
        description: "LesGo Epic's Albums",
        keywords: "[hiking, hong kong, albums, photos, kayaking, epic, lesgo epic, lesgo]",
    };
    if (!albums.length) {
        return (<div>
        <seoHelment_1.default {...seoObject}/>
        <loader_1.default />
      </div>);
    }
    return (<div>
      <seoHelment_1.default {...seoObject}/>
      <div className="title">
        <h1>Albums</h1>
      </div>
      <div className="albums row">
        {albums.map((album, index) => (<div key={index} className="col-lg-4 col-md-6 col-10 eventCard dropIn">
            <div className="card">
              <img src={album.image} className="cardImage " alt="..."/>
              <div className="card-body card-body-album">
                <h6 className="date formNotes">{album.date}</h6>
                <h4 className="name descriptionAlbums">{album.name}</h4>
                <react_router_dom_1.Link to={album.driveLink} className="btn signupButton">
                  View Album
                </react_router_dom_1.Link>
              </div>
            </div>
          </div>))}
      </div>
    </div>);
}
exports.default = GetAlbums;
