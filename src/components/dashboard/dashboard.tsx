import GetYouTubeVideo from "./youtubeVideo";
import InstagramReels from "./instagramReels";
import BriefCard from "./briefCard";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function Dashboard(){
    const language = localStorage.getItem("language")
    let seoObject: seoParams = {
        title: language == "en" ? "Dashboard" : "儀表板",
        description: "LesGo Epic's Dashboard",
        keywords: "[events, lesgo, epic, lesgo epic, letsgo epic, dashboard]",
        meta: {
            name: `description`,
            content: "Dashboard",
          }
      };
    return(<div>
        <SeoHelment {...seoObject} />
        <BriefCard />
        <InstagramReels />
        <GetYouTubeVideo />
    </div>)
}

export default Dashboard