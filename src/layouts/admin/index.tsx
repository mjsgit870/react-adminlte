import { useEffect } from "react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function AdminLayout() {
  useEffect(() => {
    window.document.body.classList.add('dark-mode', 'sidebar-mini', 'layout-fixed')
    
    return () => {
      window.document.body.classList.remove('dark-mode', 'sidebar-mini', 'layout-fixed')
    }
  }, [])

  return (
    // <div className="layout-fixed">
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
    // </div>
  )
}
