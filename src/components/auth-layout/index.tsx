import React, { useEffect } from "react"
import { ToastContainer } from "react-toastify"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  useEffect(() => {
    document.body.classList.add("login-page")
  }, [])

  return (
    <>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="#" className="h1">
              <b>Admin</b>LTE
            </a>
          </div>
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
