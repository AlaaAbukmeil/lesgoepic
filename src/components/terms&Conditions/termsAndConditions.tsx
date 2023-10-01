import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function GetTermsAndConditions() {
  const language = localStorage.getItem("language");
  let seoObject: seoParams = {
    title: language == "en" ? " Terms and Conditions" : "條款和條件",
    description:
      "LesGo Epic's terms and conditions during events and regarding refund policy",
    keywords: "[terms, conditions, terms and conditions, refund]",
    meta: {
      name: `description`,
      content:
        "LesGo Epic's terms and conditions during events and regarding refund policy",
    },
  };
  return (
    <div className="card card-form">
      <SeoHelment {...seoObject} />
      <center>
        <h1>{language == "en" ? "TERMS AND CONDITIONS" : "條款和條件"}</h1>
      </center>
      <div className="card-body">
        <h2>{language == "en" ? "During Events" : "活動期間"}</h2>

        <p className="formNotes">
        {language == "en" ? "1. Attendees assume all risks and dangers incidental to the event, whether occurring prior to, during or subsequent to the actual event, including any death, personal injury, loss, damage or liability." : "1. 參與者承擔所有與活動相關的風險和危險，無論是在實際活動之前、期間還是之後發生，包括任何死亡、人身傷害、損失、損壞或責任。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "2. All participants should possess some basic knowledge of swimming, camping, kayaking, or hiking respective to the event they intend to participate in." : "2. 所有參與者應具備一些基本的游泳、露營、皮划艇或徒步旅行的知識，以便參加他們打算參加的活動。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "3. Our events primarily cater to working adults between the ages of 18-28. However, if a person under the age of 18 attends the event, they may be asked to provide identification and parent permission." : "3. 我們的活動主要針對年齡在18-28歲之間的在職成年人。然而，如果年齡在18歲以下的人參加活動，他們可能會被要求提供身份證明和父母的許可。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "4. The following items are strictly prohibited at the event: weapons, illegal drugs, glass containers, fireworks, and pets (except service animals)." : "4. 活動中嚴禁以下物品：武器、非法藥物、玻璃容器、煙花和寵物（服務動物除外）。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "5. Attendees must behave in a responsible and respectful manner at all times. Any person engaging in disorderly conduct or endangering the safety of others may be removed from the event." : "5. 參與者必須時刻表現出負責任和尊重的行為。任何從事不規則行為或危害他人安全的人可能會被驅逐出活動。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "6. Attendees may be photographed or recorded during the event. By attending the event, attendees consent to the use of their image or likeness for promotional purposes." : "6. 參與者在活動期間可能會被拍照或錄像。參加活動的參與者同意他們的形象或肖像用於宣傳目的。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "7. The event may be cancelled or postponed due to inclement weather. We will fully refund participants in the form of LesGo Epic Credit." : "7. 如果因惡劣天氣導致活動被取消或延期，我們將以LesGo Epic Credit的形式全額退款給參與者。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "8. The organizers of the event reserve the right to modify or cancel any aspect of the event, including the lineup, schedule, and location." : "8. 活動的組織者保留修改或取消活動的任何方面的權利，包括陣容、時間表和地點。"}
        </p>
        <p className="formNotes">
        {language == "en" ? "9. Attendees must comply with all applicable laws and regulations, including those related to public health, safety, and noise." : "9. 參與者必須遵守所有適用的法律和規定，包括與公共衛生、安全和噪音相關的法律和規定。"}
        </p>
        <h2>{language == "en" ? "Refund Policy" : "退款政策"}</h2>
        <p className="formNotes">
        {language == "en" ? "1. Participants can ask for a refund as long as it is before the registration deadline." : "1. 參與者可以在註冊截止日期之前要求退款。"}
        </p>
      </div>
    </div>
  );
}

export default GetTermsAndConditions;
