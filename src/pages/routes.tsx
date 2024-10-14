import { useRoutes } from 'react-router-dom';
import Home from './home/home';
import React from 'react';

export default function RouterElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    }
  ]);
  return elements;
}
