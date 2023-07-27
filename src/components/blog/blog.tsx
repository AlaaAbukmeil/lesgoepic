import { useState, useEffect } from "react";
import { postInfo } from "../../models/postInfo";
import { Link } from "react-router-dom";
import Loader from "../common/loader"
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";
import proxyUrl from "../common/proxy";

function getCaptionIndex(caption: string) {

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
  return index
}

function GetBlog() {
  let [posts, setPosts] = useState<postInfo[]>();
  let url: any = proxyUrl + "/blog"
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);
  if(!posts){
    return(<div><Loader /></div>)
  }

  let seoObject: seoParams = {
    title: "Blog",
    description: "LesGo Epic's blog",
    keywords: "[lesgo, epic, lesgo epic, blog, post, hong kong, hiking, kayaking, sports]",
  }
  return (
    <div>
      <div className="title">
        <h1>Blog</h1>
      </div>

      {posts.map((post, index) => {
        let captionIndex = getCaptionIndex(post.caption)
        let caption = post.caption.slice(0, captionIndex)
        return (
          <div key={index} className="row postsCard dropIn">
            <SeoHelment {...seoObject} />
            <div className="col-lg-4 col-xs-12 postsContainer">
              <img src={post.coverImage} className="postImage" alt="..." />
            </div>
            <div className="col postsContainer postText">
              <h6 className="date descriptionAlbums">{post.date}</h6>
              <h4 className="name descriptionAlbums">{post.name}</h4>
              <h4 className="name formNotes" dangerouslySetInnerHTML={{__html: caption }}>
                
              </h4>

              <Link to={"/post/:" + post["_id"]} className="btn signupButton">
                Read More!
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GetBlog;
