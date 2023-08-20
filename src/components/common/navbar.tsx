function navbarLoggedIn() {
  const langauge = localStorage.getItem("language")
  return (
    <div
      className="dropdown-menu dropdown-menu-end animate slideIn"
      aria-labelledby="navbarDropdown"
    >
      <a className="dropdown-item" href="/my-events">
        {langauge == "en" ?`My Events`: "我的活動"}
      </a>
      <a className="dropdown-item" href="/settings">
        {langauge == "en" ?"Settings": "設定"}
      </a>
      <hr className="dropdown-divider" />
      <form action="/logOut" method="post">
        <button
          className="btn dropdown-item logOutBtn"
          type="button"
          onClick={handleLogOut}
        >
          {langauge == "en"? "Log Out": "設定"}
        </button>
      </form>
    </div>
  );
}
function navbarLoggedOut() {
  const langauge = localStorage.getItem("language")
  return (
    <div
      className="dropdown-menu dropdown-menu-end animate slideIn"
      aria-labelledby="navbarDropdown"
    >
      <a className="dropdown-item" href="/auth">
        {langauge == "en" ? `Sign Up/Login`: "註冊/登入"}
      </a>
    </div>
  );
}

function switchLanguage(event: any) {
  let language = localStorage.getItem("language");
  if (language == "en") {
    localStorage.setItem("language", "zh-HK");
  } else {
    localStorage.setItem("language", "en");
  }
  window.location.reload();
}

function handleLogOut(event: any) {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("timestamp");
  window.location.href = "/";
}
function checkTimestamp() {
  const timestamp: any = localStorage.getItem("timestamp");
  const timestampPeriod = new Date().getTime() - 24 * 60 * 60 * 1000;
  if (timestampPeriod > parseInt(timestamp)) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("timestamp");
  }
}
function NavBar() {
  const language = localStorage.getItem("language");
  const username = localStorage.getItem("username")?.split(" ")[0];
  checkTimestamp();
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-custom">
        <div className="container-fluid">
          <a href="/">
            <img src="/photos/logo.png" className="header-logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-items">
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  onClick={(event) => switchLanguage(event)}
                >
                  <img
                    src="https://storage.googleapis.com/lesgoepic.appspot.com/photosInWebsite/language.png"
                    className="languageSwitch"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/upcoming-events"
                >
                  {language == "en" ? "Upcoming Events" : "活動預告"}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/albums"
                >
                  {language == "en" ? "Albums" : "相簿"}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/blog"
                >
                  {language == "en" ? "Blog" : "部落格"}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/about-us"
                >
                  {language == "en" ? "About Us" : "關於我們"}
                  
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active header-item"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {username ? (
                    <div>
                      {username}{" "}
                      <i className="fa-solid fa-caret-down fa-beat"></i>
                    </div>
                  ) : (
                    <i className="fa-solid fa-user"></i>
                  )}
                </a>
                {/* <!-- Here's the magic. Add the .animate and .slideIn classes to your .dropdown-menu and you're all set! --> */}
                {username ? navbarLoggedIn() : navbarLoggedOut()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
