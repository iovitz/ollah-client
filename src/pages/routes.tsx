import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './home/home'

export default function RouterElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ])
  return elements
}