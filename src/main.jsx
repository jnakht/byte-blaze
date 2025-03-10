import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Bookmarks from './Components/Bookmarks/Bookmarks.jsx';
import DetailedBlog from './Components/DetailedBlog/DetailedBlog.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blogs/:id',
        element: <DetailedBlog></DetailedBlog>,
        loader: (params) => fetch(`https://dev.to/api/articles/${params.params.id}`),
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
