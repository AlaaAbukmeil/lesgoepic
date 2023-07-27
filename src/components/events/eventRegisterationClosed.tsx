import GetYouTubeVideo from "./youtubeVideo";

function RegisterationClosed() {
  return (
    <div>
      <div className="card card-form">
        <center>
          <h3 className="eventRegistrationClosedText">
            This Event's Registration Is Closed
          </h3>
          <GetYouTubeVideo />
        </center>
      </div>
    </div>
  );
}

export default RegisterationClosed;
