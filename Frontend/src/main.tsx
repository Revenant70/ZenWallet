import React from 'react'
import App from './App.jsx'
import Layout from './components/Layout.tsx'


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'

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
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
