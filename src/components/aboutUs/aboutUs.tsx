import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function GetAboutUs() {
  const language = localStorage.getItem("language");
  let seoObject: seoParams = {
    title: language == "en" ? "About Us" : "關於我們",
    description: "LesGo Epic's Values",
    keywords:
      "[values, principles, epic, lesgo epic, letsgo epic, who are we, what are we]",
    meta: {
      name: `description`,
      content: "Values",
    },
  };
  return (
    <div className="card card-form">
      <SeoHelment {...seoObject} />
      <div className="about-us">
        <center>
          <img
            src="/photos/logo.png"
            className="header-logo about-us-logo"
            alt="lesgoepic logo"
          />
        </center>

        <p className="formNotes">
          {language == "en"
            ? `LesGo Epic aspires to connect more people through social events where
          participants meet different people with diverse backgrounds in fun and
          engaging activities. These activities push participants to socialize
          with one another as they usually require them to team up and overcome
          challenges in a safe environment. Our events inspire people to connect
          with one another over memorable, value-driven experiences.`
            : `"LesGo Epic"的使命是透過有趣且吸引人的活動將更多人連繫在一起，活動參與者將會遇到不同背景的人。這些活動鼓勵參與者互動，因為他們通常需要團隊合作並在安全的環境中克服挑戰。我們的活動啟發人們通過難忘且價值驅動的體驗來與他人建立聯繫。`}
        </p>
        <h1>{language == "en" ? "Mission" : "使命"}</h1>
        <p className="formNotes">
          {language == "en"
            ? `Reconnecting people with nature through memorable experiences while
          building a sustainable and inclusive community`
            : `
          透過難忘的體驗將人們與自然重新連繫，同時建立一個可持續且包容的社區`}
        </p>
        <h1>{language == "en" ? "Values" : "價值觀"}</h1>
        <ul className="formNotes">
          <li>
            {language == "en"
              ? `Community: LesGo Epic strives to connect people over shared
            memorable experiences where each member feels like they belong. We
            aim to become not only an organizer of events, but a community of
            people.`
              : "社區：LesGo Epic致力於通過共享的難忘體驗將人們連繫起來，每個成員都感覺到他們屬於這裡。我們的目標不僅是成為活動的組織者，更是一個人們的社區。"}
          </li>
          <li>
            {language == "en"
              ? `Inclusivity: LesGo Epic is inclusive and welcoming to people
            of all backgrounds, cultures, and abilities, and represents that in
            the way our events go.`
              : `包容性：LesGo Epic歡迎所有背景、文化和能力的人，並在我們的活動中顯示這一點。`}
          </li>
          <li>
            {language == "en"
              ? `Sustainability: As a social outdoor events startup, we
            prioritize sustainability by minimizing waste, reducing energy
            consumption, and selecting eco-friendly materials.`
              : `可持續性：作為一個社交戶外活動初創公司，我們通過最小化浪費、減少能源消耗和選擇環保材料來優先考慮可持續性。`}
          </li>
          <li>
            {language == "en" ? `Wellness: We aim to maximize people’s wellness by focusing on
            their physical, social, and mental wellness.`: `可持續性：作為一個社交戶外活動初創公司，我們通過最小化浪費、減少能源消耗和選擇環保材料來優先考慮可持續性。`}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GetAboutUs;
