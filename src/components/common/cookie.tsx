
let token: any = localStorage.getItem("token");

export const getRequestOptions: any = {
  method: "GET",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers" : "Content-type",
  credentials: "include",
  headers: { Authorization: `Bearer ${token}` }
};

export const authPostRequestOptions: any = {
  method: "POST",
  "Content-Type": "application/json",
};
export const postRequestOptions: any = {
  method: "POST",
  "Content-Type": "application/json",
  credentials: "include",
  headers: { Authorization: `Bearer ${token}` }
};

export const handleAuth = (status: number) => {
  if (status == 401) {
    window.location.href = "/login";
  } else if(status == 403){
    let warning = window.alert("You don't have access, please contact support to review")
    window.location.reload()
  }
};

export default {}