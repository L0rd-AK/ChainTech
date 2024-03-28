import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/service',
        element: <Home />
      },
      {
        path:'/business-model',
        element: <Home />
      },
      {
        path:'/blogs',
        element: <Home />
      },
      {
        path:'/contact-us',
        element: <Home />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
