"use client"

import { signOut } from "next-auth/react"
import Button from "./Button"

export default function LogOut(){
    return(
        <Button label="Logout" onClickHandler={()=> signOut({callbackUrl:"/"})}/>
    )
}