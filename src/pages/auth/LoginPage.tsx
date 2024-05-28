import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

// components
import AuthLayout from "../../components/auth-layout";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type LoginForm = {
  email: string
  password: string
}

const schema: ZodType<LoginForm> = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(3, 'Password minimal 3 karakter'),
})

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false)
  
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({ resolver: zodResolver(schema) })

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    console.log(data)
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <AuthLayout>
      <p className="login-box-msg">Masuk untuk mengakses sistem</p>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="input-group has-validation mb-3">
          <input type="email" {...register('email')} className={`form-control ${errors.email && 'is-invalid'}`} placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fad fa-envelope" style={{ minWidth: '1rem' }} />
            </div>
          </div>
          {errors.email && <span className="invalid-feedback">{errors.email?.message}</span>}
        </div>
        <div className="input-group has-validation mb-3">
          <input type="password" {...register('password')} className={`form-control ${errors.password && 'is-invalid'}`} placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fad fa-lock" style={{ minWidth: '1rem',  }} />
            </div>
          </div>
          {errors.password && <span className="invalid-feedback">{errors.password?.message}</span>}
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
        <a href="#">Lupa password</a>
      </p>
      <p className="mb-0">
        <a href="#" className="text-center">Membuat akun baru</a>
      </p>
    </AuthLayout>
  )
}
