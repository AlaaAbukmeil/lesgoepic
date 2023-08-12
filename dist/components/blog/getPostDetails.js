"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const loader_1 = __importDefault(require("../common/loader"));
const seoHelment_1 = __importDefault(require("../common/seoHelment"));
const proxy_1 = __importDefault(require("../common/proxy"));
function GetPostDetails() {
    var _a;
    let [post, setPostDetails] = (0, react_1.useState)();
    let params = (0, react_router_dom_1.useParams)();
    let url = proxy_1.default + "/post/" + params.postId;
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            setPostDetails(data.postInfo);
        });
    }, []);
    if (!post) {
        return (<div>
        <loader_1.default />
      </div>);
    }
    let caption = post === null || post === void 0 ? void 0 : post.caption;
    let seoObject = {
        title: (post === null || post === void 0 ? void 0 : post.name) + " Post" || "Post",
        description: caption,
        keywords: "[lesgo, epic, lesgo epic, blog, post, hong kong, hiking, kayaking, sports]"
    };
    return (<div>
      <seoHelment_1.default {...seoObject}/>
      <div className="row">
        <h1 className="title postTitle">{post === null || post === void 0 ? void 0 : post.name}</h1>

        {(_a = post === null || post === void 0 ? void 0 : post.images) === null || _a === void 0 ? void 0 : _a.map((image, index) => (<div key={index} className="col-4 dropIn">
            <img src={image} alt="" className="postImages"/>
          </div>))}
        <div className="card postCardContainer">
          <div className="card-body postCard">
            <h1 className="date">📅 {post === null || post === void 0 ? void 0 : post.date}</h1>
            <h4 className="name formNotes" dangerouslySetInnerHTML={{ __html: caption }}></h4>
          </div>
        </div>
      </div>
    </div>);
}
exports.default = GetPostDetails;
