import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import Home from '@/views/front-home/index'

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
    path: '*',
    element: <NotFound />
  }
]

export default routes
