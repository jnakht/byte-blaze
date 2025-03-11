import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Blogs from "../Components/Blogs/Blogs";
import DetailedBlog from "../Components/DetailedBlog/DetailedBlog";
import Bookmarks from "../Components/Bookmarks/Bookmarks";
import Content from "../Components/Content/Content";
import Author from "../Components/Author/Author";

export const router = createBrowserRouter([
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
          children: [
            {
                index: true,
                element: <Content></Content>,
                loader: (params) => fetch(`https://dev.to/api/articles/${params.params.id}`),
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: (params) => fetch(`https://dev.to/api/articles/${params.params.id}`),
            }
          ]
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>
        }
      ]
    }
  ])