import { NavLink, useLocation } from 'react-router-dom'
import { Logo, UserImage } from '../../constant/images'

export default function Sidebar() {
  // const location = useLocation() // dipakai jika ingin menggunakan "sidebar tree"

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={UserImage}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">Julian Saputra</a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-chart-pie" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-header">DATA MASTER</li>
            <li className="nav-item">
              <NavLink to="/employees" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-id-card" />
                <p>Karyawan</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/positions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-layer-group" />
                <p>Posisi dan Jabatan</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-users" />
                <p>User</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}
