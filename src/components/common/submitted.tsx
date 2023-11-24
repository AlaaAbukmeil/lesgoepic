import InstagramReels from "../dashboard/instagramReels"


function Submitted(){
    const language = localStorage.getItem("language");
return(<div>
        <center><h4>{language == "en" ? "Thank you for sharing your thoughts with us!" : "感謝您與我們分享您的想法！"}</h4></center>
        <InstagramReels />
    </div>)
}

export default Submitted