import "./Login.css"
import {Link} from "react-router-dom" ;

export default function LoginPage() {
  const credentials = {
    userEmail : "example123@gmail.com" ,
    userPassword : "123" ,
  }
  const handleLogin = () => {
    let emailId = document.getElementById("email") ;
    let inputPassword = document.getElementById("password") ;
    if(!(emailId.value && inputPassword.value))
    {
       alert("Please enter both the fields.") ;
       return ;
    }
    if(emailId.value === credentials.userEmail && inputPassword.value === credentials.userPassword)
    {
      window.open("http://localhost:3000/") ;
    }
    else{
       alert("Invalid email or password.") ;
       return ;
    }
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" id="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" className="loginInput" id="password" placeholder="Enter your password" />
            <button className="loginButton" onClick={handleLogin}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
