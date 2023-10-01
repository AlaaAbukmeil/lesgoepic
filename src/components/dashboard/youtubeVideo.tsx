import { Link } from "react-router-dom";
import Iframe from "react-iframe";

function GetYouTubeVideo(){
    return(<div>
        <div className="row justify-content-center">
  <div className="col-8">
    <Iframe className="youtubeVideo" url="https://www.youtube.com/embed/Nlojx7m8UfA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></Iframe>
      
  </div>
</div>

  <div className="container-button">
    <Link to="https://www.youtube.com/@lesgo_epic" className="btn btn-danger fab fa-youtube subscribeButtonYoutube" />
  </div>


    </div>)
}

export default GetYouTubeVideo