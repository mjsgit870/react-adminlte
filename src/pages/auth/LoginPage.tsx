import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth-layout";

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false)
  
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <p className="login-box-msg">Masuk untuk mengakses sistem</p>
      <form onSubmit={e => handleSubmit(e)} method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" style={{ minWidth: '1rem' }} />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" style={{ minWidth: '1rem',  }} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Ingat saya</label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? (
                <span className="spinner-border text-light spinner-border-sm"></span>
              ) : "Masuk"}
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <p className="mb-1">
        <a href="forgot-password.html">Lupa password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Membuat akun baru</a>
      </p>
    </AuthLayout>
  )
}
