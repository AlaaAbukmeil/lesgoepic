import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { postInfo } from "../../models/postInfo";
import Loader from "../common/loader";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function GetPostDetails() {
  let [post, setPostDetails] = useState<postInfo>();
  let params: any = useParams();
  let url: any = "https://api.lesgoepic.com/api/web/post/" + params.postId;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPostDetails(data.postInfo);
      });
  }, []);

  if (!post) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  let caption: any = post?.caption;

  let seoObject: seoParams = {
    title: post?.name + " Post" || "Post",
    description: caption,
    keywords: "[lesgo, epic, lesgo epic, blog, post, hong kong, hiking, kayaking, sports]"
  }

  return (
    <div>
      <SeoHelment {...seoObject} />
      <div className="row">
        <h1 className="title postTitle">{post?.name}</h1>

        {post?.images?.map((image, index: number) => (
          <div key={index} className="col-4 dropIn">
            <img src={image} alt="" className="postImages" />
          </div>
        ))}
        <div className="card postCardContainer">
          <div className="card-body postCard">
            <h1 className="date">📅 {post?.date}</h1>
            <h4
              className="name formNotes"
              dangerouslySetInnerHTML={{ __html: caption }}
            ></h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GetPostDetails;
