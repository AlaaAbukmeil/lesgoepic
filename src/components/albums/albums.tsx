import { useState, useEffect } from "react";
import { albumInfo } from "../../models/albumInfo";
import { Link } from "react-router-dom";
import Loader from "../common/loader";
import proxyUrl from "../common/proxy";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function GetAlbums() {
  let [albums, setAlbums] = useState<albumInfo[]>([]);
  let url: any = proxyUrl + "/albums";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAlbums(data.albums);
      });
  }, []);
  let seoObject: seoParams = {
    title: "Albums",
    description: "LesGo Epic's Albums",
    keywords:
      "[hiking, hong kong, albums, photos, kayaking, epic, lesgo epic, lesgo]",
  };
  if (!albums.length) {
    return (
      <div>
        <SeoHelment {...seoObject} />
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <SeoHelment {...seoObject} />
      <div className="title">
        <h1>Albums</h1>
      </div>
      <div className="albums row">
        {albums.map((album: albumInfo, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-10 eventCard dropIn"
          >
            <div className="card">
              <img src={album.image} className="cardImage " alt="..." />
              <div className="card-body card-body-album">
                <h6 className="date formNotes">{album.date}</h6>
                <h4 className="name descriptionAlbums">{album.name}</h4>
                <Link to={album.driveLink} className="btn signupButton">
                  View Album
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAlbums;
