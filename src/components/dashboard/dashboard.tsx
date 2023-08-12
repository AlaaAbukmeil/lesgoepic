import GetYouTubeVideo from "./youtubeVideo";
import InstagramReels from "./instagramReels";
import BriefCard from "./briefCard";
import SeoHelment from "../common/seoHelment";
import { seoParams } from "../../models/seoParams";

function Dashboard(){
    let seoObject: seoParams = {
        title: "Dashboard",
        description: "LesGo Epic's Dashboard",
        keywords: "[events, lesgo, epic, lesgo epic, letsgo epic, dashboard]",
      };
    return(<div>
        <SeoHelment {...seoObject} />
        <BriefCard />
        <InstagramReels />
        <GetYouTubeVideo />
    </div>)
}

export default Dashboard