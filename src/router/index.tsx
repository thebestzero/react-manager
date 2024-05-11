import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'
import Error404 from '@/views/404'
import Error403 from '@/views/403'
import Layout from '@/layout'
import AuthLoader from '@/router/AuthLoader'
import { lazyLoad } from '@/router/lazyLoad'
import React from 'react'

export const router: RouteObject[] = [
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
        element: lazyLoad(React.lazy(() => import('@/views/Dashboard')))
      },
      {
        path: '/userList',
        element: lazyLoad(React.lazy(() => import('@/views/system/user')))
      },
      {
        path: '/deptList',
        element: lazyLoad(React.lazy(() => import('@/views/system/dept')))
      },
      {
        path: '/menuList',
        element: lazyLoad(React.lazy(() => import('@/views/system/menu')))
      },
      {
        path: '/roleList',
        element: lazyLoad(React.lazy(() => import('@/views/system/role')))
      },
      {
        path: '/orderlist',
        element: lazyLoad(React.lazy(() => import('@/views/order/OrderList')))
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
