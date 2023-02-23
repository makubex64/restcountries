import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './components/ErrorPage'
import  {router} from './routes/NestedRoutes'
import {RouterProvider} from 'react-router-dom'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
