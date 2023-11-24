import { useState, useEffect } from "react";
import { albumInfo } from "../../models/albumInfo";
import { Link } from "react-router-dom";
import Loader from "../common/loader";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function GetAlbums() {
  const language = localStorage.getItem("language")
  let [albums, setAlbums] = useState<albumInfo[]>([]);
  let url: any = `https://api.lesgoepic.com/api/web/albums?language=${language}`;
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
    title: language == "en" ? "Albums" : "相簿",
    description: "LesGo Epic's Albums",
    keywords:
      "[hiking, hong kong, albums, photos, kayaking, epic, lesgo epic, lesgo]",
    meta: {
      name: `description`,
      content: "Albums",
    }
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
        <h1>{language == "en" ? "Albums" : "相簿"}</h1>
      </div>
      <div className="albums row">
        {albums.map((album: albumInfo, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-10 eventCard dropIn"
          >
            <div className="card">
              <img src={album.image} className="cardImage " alt={album.name} />
              <div className="card-body card-body-album">
                <h6 className="date formNotes">{album.date}</h6>
                <h4 className="name descriptionAlbums">{album.name}</h4>
                <Link to={album.driveLink} className="btn signupButton">
                  {language == "en" ? `View Album`: "查看相簿"}
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
