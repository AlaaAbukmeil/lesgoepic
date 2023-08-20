import { Link } from "react-router-dom";

function BriefCard() {
  const language = localStorage.getItem("language")
  return (
    <div className="row brief-container">
      <video autoPlay loop muted>
        <source
          src={language == "en" ? "https://storage.googleapis.com/lesgoepicadmin.appspot.com/posters/LESGO%20EPIC%20(3).mp4" : "https://storage.googleapis.com/lesgoepic.appspot.com/photosInWebsite/Copy%20of%20LESGO%20EPIC.mp4"}
          type="video/mp4"
        />
      </video>
      <Link to={"/upcoming-events"} className="btn signupButton upcomingRedirectButton">
        {language == "en" ? "View Our Upcoming Events!" : "查看我們的活動預告"}
      </Link>
    </div>
  );
}

export default BriefCard;
