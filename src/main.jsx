import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from './components/ErrorPage/ErrorPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import SingleCard from './components/SingleCard/SingleCard';


const router= createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage />, 
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('jobdata.json'),
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/graph',
        element: <Statistics></Statistics>
      },
      {
        path:'/:loadId',
        element: <SingleCard></SingleCard>,
        loader:()=>fetch('/jobdata.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
