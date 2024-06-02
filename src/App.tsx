import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import LoginPage from './pages/auth/LoginPage'
import AdminLayout from './layouts/admin'
import DashboardPage from './pages/DashboardPage'
import EmployeesPage from './pages/employees'
import PositionsPage from './pages/PositionsPage'
import UsersPage from './pages/UsersPage'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "employees",
        element: <EmployeesPage />,
      },
      {
        path: "positions",
        element: <PositionsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
