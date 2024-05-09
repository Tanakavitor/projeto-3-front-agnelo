import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Cadastro from '../components/Cadastro'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Cadastro",
    element: <Cadastro />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
