import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import Home from '@/views/front-home/index'
import Member from '@/views/front-member/index'

const NotFound = lazy(() => import('@/views/not-found/index'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Member />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
