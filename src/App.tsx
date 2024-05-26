import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import LoginPage from './pages/auth/LoginPage'
import AdminLayout from './components/admin-layout'
import DashboardPage from './pages/DashboardPage'

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
    ],
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
