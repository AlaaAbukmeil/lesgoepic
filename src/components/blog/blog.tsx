import { useState, useEffect } from "react";
import { postInfo } from "../../models/postInfo";
import { Link } from "react-router-dom";
import Loader from "../common/loader"
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

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

function handleBlogPost(event: any, url: any): any {
  window.location.href = url;
}
function GetBlog() {
  const language = localStorage.getItem("language")
  let [posts, setPosts] = useState<postInfo[]>();
  let url: any = `https://api.lesgoepic.com/api/web/blog?language=${language}`

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
    title: language == "en" ? "Blog" : "部落格",
    description: "LesGo Epic's blog",
    keywords: "[lesgo, epic, lesgo epic, blog, post, hong kong, hiking, kayaking, sports]",
    meta: {
      name: `description`,
      content: "Blog",
    }
  }
  return (
    <div>
      <div className="title">
        <h1>{language == "en" ? "Blog" : "部落格"}</h1>
      </div>
      <SeoHelment {...seoObject} />

      {posts.map((post, index) => {
        let captionIndex = getCaptionIndex(post.caption)
        let caption = post.caption.slice(0, captionIndex)
        return (
          <div key={index} className="row postsCard dropIn" onClick={(event) =>
            handleBlogPost(
              event,
              "/post/:" + post["_id"]
            )
          }>
            <div className="col-lg-4 col-xs-12 postsContainer">
              <img src={post.coverImage} className="postImage" alt={post.name} />
            </div>
            <div className="col postsContainer postText">
              <h6 className="date descriptionAlbums">{post.date}</h6>
              <h4 className="name descriptionAlbums">{post.name}</h4>
              <h4 className="name formNotes" dangerouslySetInnerHTML={{__html: caption }}>
                
              </h4>

              <Link to={"/post/:" + post["_id"]} className="btn signupButton">
                {language == "en" ? "Read More!": "閱讀更多！"}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GetBlog;
