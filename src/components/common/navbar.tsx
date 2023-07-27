function NavBar() {
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
                  <i className="fa-solid fa-user"></i>
                </a>
                {/* <!-- Here's the magic. Add the .animate and .slideIn classes to your .dropdown-menu and you're all set! --> */}
                <div
                  className="dropdown-menu dropdown-menu-end animate slideIn"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="/myAccount">
                    My Account
                  </a>
                  <hr className="dropdown-divider" />
                  <form action="/logOut" method="post">
                    <button
                      className="btn dropdown-item logOutBtn"
                      type="submit"
                    >
                      Log Out
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;