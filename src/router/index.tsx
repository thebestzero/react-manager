import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'
import Error404 from '@/views/404'
import Error403 from '@/views/403'
import Layout from '@/layout'
import Dashboard from '@/views/Dashboard'
import User from '@/views/system/user'
import Dept from '@/views/system/dept'
import Menu from '@/views/system/menu'
import Role from '@/views/system/role'
import AuthLoader from '@/router/AuthLoader'

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/welcome'} />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    id: 'layout',
    element: <Layout />,
    loader: AuthLoader,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/userList',
        element: <User />
      },
      {
        path: '/deptList',
        element: <Dept />
      },
      {
        path: '/menuList',
        element: <Menu />
      },
      {
        path: '/roleList',
        element: <Role />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '403',
    element: <Error403 />
  }
]

export default createBrowserRouter(router)
