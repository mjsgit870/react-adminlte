import { useState } from "react";
import AuthLayout from "../../components/auth-layout";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    toast('Kamu berhasil login', { type: 'success' })
    setLoading(false)
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
                <div>
                  <span className="spinner-border text-light spinner-border-sm"></span> Loading...
                </div>
              ) : "Masuk"}
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mt-2 mb-3">
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Masuk dengan Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Masuk dengan Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">Lupa password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Membuat akun baru</a>
      </p>
    </AuthLayout>
  )
}
