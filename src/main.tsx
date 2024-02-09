import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ArticlePage from "./pages/articlepage/ArticlePage";
import TablePage from "./pages/tablepage/TablePage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Set /article as the default route
        element: <TablePage />,
      },
      {
        path: "/table",
        element: <TablePage />,
      },
      {
        path: "/article/:id",
        element: <ArticlePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
