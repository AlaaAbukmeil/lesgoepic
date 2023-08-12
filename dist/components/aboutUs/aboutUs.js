"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAboutUs() {
    return (<div className="card card-form">
      <div className="about-us">
        <center>
          <img src="/photos/logo.png" className="header-logo" alt="logo"/>
        </center>
        <h1 className="aboutUsTitle">LesGo Epic</h1>
        <p className="formNotes">
          LesGo Epic aspires to connect more people through social events where
          participants meet different people with diverse backgrounds in fun and
          engaging activities. These activities push participants to socialize
          with one another as they usually require them to team up and overcome
          challenges in a safe environment. Our events inspire people to connect
          with one another over memorable, value-driven experiences.
        </p>
        <h1>Mission</h1>
        <p className="formNotes">
          Reconnecting people with nature through memorable experiences while
          building a sustainable and inclusive community
        </p>
        <h1>Values</h1>
        <ul className="formNotes">
          <li>
            <b>Community:</b> LesGo Epic strives to connect people over shared
            memorable experiences where each member feels like they belong. We
            aim to become not only an organizer of events, but a community of
            people.
          </li>
          <li>
            <b>Inclusivity:</b> LesGo Epic is inclusive and welcoming to people
            of all backgrounds, cultures, and abilities, and represents that in
            the way our events go.{" "}
          </li>
          <li>
            <b>Sustainability:</b> As a social outdoor events startup, we
            prioritize sustainability by minimizing waste, reducing energy
            consumption, and selecting eco-friendly materials.
          </li>
          <li>
            <b>Wellness:</b> We aim to maximize people’s wellness by focusing on
            their physical, social, and mental wellness.
          </li>
        </ul>
      </div>
    </div>);
}
exports.default = GetAboutUs;
