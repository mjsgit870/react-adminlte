import { useEffect } from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  useEffect(() => {
    window.document.body.classList.add('hold-transition')
    
    return () => {
      window.document.body.classList.remove('hold-transition')
    }
  }, [])
  

  return (
    <div className="login-page">
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
    </div>
  )
}
