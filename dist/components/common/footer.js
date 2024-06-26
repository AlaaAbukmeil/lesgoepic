"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function Footer() {
    let [subscribedForm, setFormDisplay] = (0, react_1.useState)({});
    let [subscribedButton, setButtonDisplay] = (0, react_1.useState)({ display: "none" });
    function submitNewSubscriber(event) {
        const scriptURL = "https://script.google.com/macros/s/AKfycbzTwOyuoYy7nHJzqwh7a5OVpHyUhfv2thINRD7Fn2-H8mKSyEsa7Zx9RMK8BVncqx-xtw/exec";
        event.preventDefault();
        fetch(scriptURL, {
            method: "POST",
            body: new FormData(event.target),
        });
        setFormDisplay({ display: "none" });
        setButtonDisplay({ display: "block" });
    }
    return (<div>
      <footer className="new_footer_area bg_color">
        <div className="row new_footer_top">
          <div className="col-lg-3 col-md-6 col-6">
            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
              <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
              <p>Subscribe to get more updates!</p>
              <form className="f_subscribe_two mailchimp" noValidate={true} name="master-list" id="subscribeForm" style={subscribedForm} onSubmit={submitNewSubscriber}>
                <input name="email" type="email" className="form-control memail" placeholder="Email" required/>
                <button className="btn btn_get btn_get_two" type="submit">
                  Subscribe
                </button>
              </form>
              <div className="subscribed" style={subscribedButton} id="subscribedButton">
                <h4 className="subscribedText">Subscribed!</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="f_widget about-widget pl_70 wow fadeInLeft">
              <h3 className="f-title f_600 t_color f_size_18">Download</h3>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.lesgoepic.www.twa">
                    <i className="fab fa-google-play"></i> Play Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  col-6">
            <div className="f_widget about-widget pl_70 wow fadeInLeft">
              <h3 className="f-title f_600 t_color f_size_18">Useful Links</h3>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/albums">Albums</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/feedBackForm">Feedback Form</a>
                </li>
                <li>
                  <a href="/terms-conditions">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  col-6">
            <div className="f_widget social-widget pl_70 wow fadeInLeft">
              <h3 className="f-title f_600 t_color f_size_18">Our Socials</h3>
              <div className="f_social_icon">
                <a href="https://www.instagram.com/lesgo.epic/" className="fab fa-instagram" content="Instagram Link"></a>
                <a href="https://www.youtube.com/@lesgo_epic" className="fab fa-youtube"></a>
                <a href="https://wa.me/+85265357490" className="fab fa-whatsapp"></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>);
}
exports.default = Footer;
