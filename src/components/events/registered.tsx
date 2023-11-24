import InstagramReels from "../dashboard/instagramReels";

function Registered() {
  const user = localStorage.getItem("username");
  const language = localStorage.getItem("language");
  const text1 =
    language == "en"
      ? "Sign Up and make an account with LesGo Epic to view your events, redeem credit, download receipts, and many other features! We will send you an email shortly with the event's details!"
      : "註冊並在LesGo Epic創建一個帳戶，以查看您的活動，兌換信用，下載收據，以及許多其他功能！我們將很快向您發送一封包含活動詳情的電郵！";
  const text2 =
    language == "en"
      ? "We will send you an email shortly with the event's details!"
      : "我們將很快向您發送一封包含活動詳情的電郵！";
  return (
    <div>
      <center>
        <h2>{language == "en" ? "Thank you for joining us!" : "感謝您的參與！"}</h2>
      </center>
      <center>
        <p className="registered-text">{user ? text2 : text1}</p>
      </center>
      <InstagramReels />
    </div>
  );
}

export default Registered;
