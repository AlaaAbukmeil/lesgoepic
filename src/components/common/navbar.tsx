function navbarLoggedIn() {
  return (
    <div
      className="dropdown-menu dropdown-menu-end animate slideIn"
      aria-labelledby="navbarDropdown"
    >
      <a className="dropdown-item" href="/my-events">
        My Events
      </a>
      <a className="dropdown-item" href="/settings">
        Settings
      </a>
      <hr className="dropdown-divider" />
      <form action="/logOut" method="post">
        <button
          className="btn dropdown-item logOutBtn"
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </form>
    </div>
  );
}
function navbarLoggedOut() {
  return (
    <div
      className="dropdown-menu dropdown-menu-end animate slideIn"
      aria-labelledby="navbarDropdown"
    >
      <a className="dropdown-item" href="/auth">
        Sign Up/Login
      </a>
    </div>
  );
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
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/upcoming-events"
                >
                  Upcoming Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/albums"
                >
                  Albums
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-item"
                  aria-current="page"
                  href="/about-us"
                >
                  About Us
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
