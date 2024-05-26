import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function AdminLayout() {
  useEffect(() => {
    const addSctiptTag = () => {
      const script = document.createElement("script")
      script.src = "/node_modules/bootstrap/dist/js/bootstrap.min.js"
      document.body.appendChild(script)
    }

    document.body.classList.add("hold-transition", "dark-mode", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed")
    addSctiptTag()
  }, [])

  return (
    <div className="wrapper">
      {/* navbar */}
      <Navbar />
      {/* /.navbar */}

      {/* sidebar container */}
      <Sidebar />
      {/* /.sidebar container */}

      {/* content wrapper */}
      <Outlet />
      {/* /.content wrapper */}

      {/* footer */}
      <footer className="main-footer">
        <strong>
          Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.2.0
        </div>
      </footer>
      {/* /.footer */}
    </div>
  )
}
