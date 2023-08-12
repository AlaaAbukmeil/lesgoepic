"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const loader_1 = __importDefault(require("../common/loader"));
const seoHelment_1 = __importDefault(require("../common/seoHelment"));
const proxy_1 = __importDefault(require("../common/proxy"));
function getCaptionIndex(caption) {
    const charToCount = "<br>";
    const count = 2;
    let index = -1;
    for (let i = 0; i < count; i++) {
        index = caption.indexOf(charToCount, index + 1);
        if (index === -1) {
            break;
        }
    }
    if (index !== -1) {
        index = caption.indexOf(charToCount, index + 1);
    }
    return index;
}
function GetBlog() {
    let [posts, setPosts] = (0, react_1.useState)();
    let url = proxy_1.default + "/blog";
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            setPosts(data.posts);
        });
    }, []);
    if (!posts) {
        return (<div><loader_1.default /></div>);
    }
    let seoObject = {
        title: "Blog",
        description: "LesGo Epic's blog",
        keywords: "[lesgo, epic, lesgo epic, blog, post, hong kong, hiking, kayaking, sports]",
    };
    return (<div>
      <div className="title">
        <h1>Blog</h1>
      </div>

      {posts.map((post, index) => {
            let captionIndex = getCaptionIndex(post.caption);
            let caption = post.caption.slice(0, captionIndex);
            return (<div key={index} className="row postsCard dropIn">
            <seoHelment_1.default {...seoObject}/>
            <div className="col-lg-4 col-xs-12 postsContainer">
              <img src={post.coverImage} className="postImage" alt="..."/>
            </div>
            <div className="col postsContainer postText">
              <h6 className="date descriptionAlbums">{post.date}</h6>
              <h4 className="name descriptionAlbums">{post.name}</h4>
              <h4 className="name formNotes" dangerouslySetInnerHTML={{ __html: caption }}>
                
              </h4>

              <react_router_dom_1.Link to={"/post/:" + post["_id"]} className="btn signupButton">
                Read More!
              </react_router_dom_1.Link>
            </div>
          </div>);
        })}
    </div>);
}
exports.default = GetBlog;
