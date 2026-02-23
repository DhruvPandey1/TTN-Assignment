import {signIn } from "next-auth/react"
import './LoginPage.css'
import Button from "./Button"

export default function LoginPage() {
  

  return (
    <div className="login-container">
        <p>Please log in</p>
        <Button label="Login with Google" onClickHandler={()=>signIn("google",{callbackUrl:"/dashboard"})}/>
    </div>
  )
}