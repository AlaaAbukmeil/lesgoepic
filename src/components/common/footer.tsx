import { useState } from "react";

function Footer() {
  let [subscribedForm, setFormDisplay] = useState({});
  let [subscribedButton, setButtonDisplay] = useState({ display: "none" });
  const language = localStorage.getItem("language");

  function submitNewSubscriber(event: any) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzTwOyuoYy7nHJzqwh7a5OVpHyUhfv2thINRD7Fn2-H8mKSyEsa7Zx9RMK8BVncqx-xtw/exec";

    event.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(event.target),
    });

    setFormDisplay({ display: "none" });
    setButtonDisplay({ display: "block" });
  }

  return (
    <div>
      <footer className="new_footer_area bg_color">
        <div className="row new_footer_top">
          <div className="col-lg-3 col-md-6 col-6">
            <div
              className="f_widget company_widget wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <h3 className="f-title f_600 t_color f_size_18">
                {language == "en" ? "Get in Touch" : "聯絡我們"}
              </h3>
              <p>
                {language == "en"
                  ? "Subscribe to get more updates!"
                  : "訂閱獲得更多更新！"}
              </p>
              <form
                className="f_subscribe_two mailchimp"
                noValidate={true}
                name="master-list"
                id="subscribeForm"
                style={subscribedForm}
                onSubmit={submitNewSubscriber}
              >
                <input
                  name="email"
                  type="email"
                  className="form-control memail"
                  placeholder="e.g. team@lesgoepic.com"
                  required
                />
                <button className="btn btn_get btn_get_two" type="submit">
                  {language == "en" ? "Subscribe" : "訂閱"}
                </button>
              </form>
              <div
                className="subscribed"
                style={subscribedButton}
                id="subscribedButton"
              >
                <h4 className="subscribedText">
                  {language == "en" ? "Subscribed!" : "已訂閱！"}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="f_widget about-widget pl_70 wow fadeInLeft">
              <h3 className="f-title f_600 t_color f_size_18">
                {language == "en" ? "Download" : "下載"}
              </h3>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.lesgoepic.www.twa">
                    <i className="fab fa-google-play"></i>
                    {language == "en" ? "Play Store" : "應用商店"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  col-6">
            <div className="f_widget about-widget pl_70 wow fadeInLeft">
              <h3 className="f-title f_600 t_color f_size_18">
                {language == "en" ? "Useful Links" : "有用鏈接"}
              </h3>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="/upcoming-events">
                    {language == "en" ? "Upcoming Events" : "活動預告"}
                  </a>
                </li>
                <li>
                  <a href="/albums">{language == "en" ? "Albums" : "相簿"}</a>
                </li>
                <li>
                  <a href="/blog">{language == "en" ? "Blog" : "部落格"}</a>
                </li>
                <li>
                  <a href="/about-us">
                    {language == "en" ? "About Us" : "關於我們"}
                    
                  </a>
                </li>
                <li>
                  <a href="/feedback-form">
                    {language == "en" ? "Feedback Form" : "反饋表格"}
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions">
                    {language == "en" ? " Terms and Conditions" : "條款和條件"}
                   
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  col-6">
            <div className="f_widget social-widget pl_70 wow fadeInLeft">
              <h3 className="f-title f_600 t_color f_size_18">
                {language == "en" ? "Our Socials" : "社交頁面"}
                
              </h3>
              <div className="f_social_icon">
                <a
                  href="https://www.instagram.com/lesgo.epic/"
                  className="fab fa-instagram"
                  content="Instagram Link"
                ></a>
                <a
                  href="https://www.youtube.com/@lesgo_epic"
                  className="fab fa-youtube"
                ></a>
                <a
                  href="https://wa.me/+85265357490"
                  className="fab fa-whatsapp"
                ></a>
                <a
                  href="https://www.linkedin.com/company/lesgo-epic"
                  className="fab fa-linkedin"
                ></a>
                <a
                  href="https://www.facebook.com/profile.php?id=100091951436054"
                  className="fab fa-facebook"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
