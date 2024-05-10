import React from 'react'
import App from './App.jsx'
import Layout from './components/Layout.tsx'


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';

const root = createRoot(
  document.getElementById("root") as HTMLElement
)


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/landingpage',
    element: <Layout />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }

])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
