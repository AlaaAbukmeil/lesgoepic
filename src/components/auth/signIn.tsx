function SignUpLogIn(){
 
  function showSignUp() {
    const signUp: any= document.getElementById("signUp")
    const logIn: any = document.getElementById("logIn")
    signUp.style.display = "block"
    logIn.style.display = "none"
  }
  function showLogIn() {
    const signUp: any = document.getElementById("signUp")
    const logIn: any = document.getElementById("logIn")
    signUp.style.display = "none"
    logIn.style.display = "block"
  }



  return(
    <div className="row signInCard">
  <div className="col-8 signInCol dropIn button-container">
    <button className="nav-link active btn-col authButtons" onClick={showSignUp}>Sign Up</button>
    <button className="nav-link active btn-col authButtons" onClick={showLogIn}>Log In</button>
  </div>
  
  <div id="signUp" className="col-8 signInCol dropIn">
    <div className="row signInRow">
      <h3 className=""><b>Sign Up</b> </h3>
      <div className="col-12">
        <form action="signUp" className="signUp" method="post">
          <h4 className="name"><b>Enter your Email:</b></h4>
          <input type="email" name="email" className="formTextInputMyAccount " placeholder="Enter your email" required />
          <h4 className="name"><b>Enter your Password:</b></h4>
          <input type="password" name="password-draft" className="formTextInputMyAccount " placeholder="Enter your password" required />
          <h4 className="name"><b>Confirm your Password:</b></h4>
          <input type="password" name="password" className="formTextInputMyAccount " placeholder="Confirm your password" required />
          <button type="submit" className="btn registerButton signUpButton">Sign Up</button>
        </form>
      </div>
    </div>
    <hr />
  </div>

  <div id="logIn" className="col-8 signInCol dropIn">
    <div className="row signInRow">
      <h3 className=""><b>Log In</b> </h3>
      <div className="col-12">
        <form action="logIn" className="signUp" method="post">
          <h4 className="name"><b>Enter your Email:</b></h4>
          <input type="email" name="email" className="formTextInputMyAccount " placeholder="Enter your email" required />
          <h4 className="name"><b>Enter your Password:</b></h4>
          <input type="password" name="password" className="formTextInputMyAccount " placeholder="Enter your password" required />
       
          <button type="submit" className="btn registerButton signUpButton">Log In</button>
        </form>
      </div>
    </div>
    <hr />
  </div>

    <div className="col-8 googleAuth">
      <form action="/auth/google" method="get">
      <button title="submit" type="submit" className="btn btn-danger googleAuthButton">
        <div className="col">
          <i className="fa-brands fa-google"></i>
        </div>
      </button>
    </form>
    </div>


</div>

  )
}

export default SignUpLogIn