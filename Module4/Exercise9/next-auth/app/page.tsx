"use client"
import { useRouter } from "next/navigation";
import LoginPage from "./component/LoginPage";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import './page.css'

export default function Home(){
  const { data: session } = useSession()
  const router = useRouter()
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    if (!session?.user) return

    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(prev => prev - 1)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      router.push("/dashboard")
    }
  }, [seconds, session, router])

  if (!session?.user) {
    return (
      <LoginPage/>
    )
  }
  return(
    <p className="redirect-message">Already logged in, Redirecting you in {seconds}</p>
  )
}