import InstagramReels from "../dashboard/instagramReels"


function Registered(){
    const user = localStorage.getItem("username")
    const text1 = "Sign Up and make an account with LesGo Epic to view your events, redeem credit, download reciepts, and many other features! We will send you an email shortly with the event's details!"
    const text2 = "We will send you an email shortly with the event's details!"
    return(<div>
        <center><h2>Thank you for joing us!</h2></center>
        <center><p className="registered-text">{user ? text2 : text1}</p></center>
        <InstagramReels />
    </div>)
}

export default Registered