import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function GetTermsAndConditions() {
  let seoObject: seoParams = {
    title: "Terms & Conditions",
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
        <h1>Terms And Conditions</h1>
      </center>
      <div className="card-body">
        <h2>During events:</h2>

        <p className="formNotes">
          1. Attendees assume all risks and dangers incidental to the event,
          whether occurring prior to, during or subsequent to the actual event,
          including any death, personal injury, loss, damage or liability.
        </p>
        <p className="formNotes">
          2. All participants should possess some basic knowledge of swimming,
          camping, kayaking, or hiking respective to the event they intend to
          participate in.
        </p>
        <p className="formNotes">
          3. Our events primarily cater to working adults between the ages of
          18-28. However, if a person under the age of 18 attends the event,
          they may be asked to provide identification and parent permission.
        </p>
        <p className="formNotes">
          4. The following items are strictly prohibited at the event: weapons,
          illegal drugs, glass containers, fireworks, and pets (except service
          animals).
        </p>
        <p className="formNotes">
          5. Attendees must behave in a responsible and respectful manner at all
          times. Any person engaging in disorderly conduct or endangering the
          safety of others may be removed from the event.
        </p>
        <p className="formNotes">
          6. Attendees may be photographed or recorded during the event. By
          attending the event, attendees consent to the use of their image or
          likeness for promotional purposes.
        </p>
        <p className="formNotes">
          7. The event may be cancelled or postponed due to inclement weather.
          No refunds or exchanges will be given in the event of postponement.
        </p>
        <p className="formNotes">
          8. The organizers of the event reserve the right to modify or cancel
          any aspect of the event, including the lineup, schedule, and location.
        </p>
        <p className="formNotes">
          9. Attendees must comply with all applicable laws and regulations,
          including those related to public health, safety, and noise.
        </p>
        <h2>Refund Policy:</h2>
        <p className="formNotes">
          1. Participants can ask for a refund as long as it is before the
          registration deadline.
        </p>
      </div>
    </div>
  );
}

export default GetTermsAndConditions;
