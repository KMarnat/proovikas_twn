import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ArticlePage from "./pages/Articlepage/ArticlePage.tsx";
import TablePage from "./pages/Tablepage/TablePage.tsx";
import Welcomepage from "./pages/Welcomepage/Welcomepage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Set /article as the default route
        element: <Welcomepage />,
      },
      {
        path: "/table",
        element: <TablePage />,
      },
      {
        path: "/article",
        element: <ArticlePage />,
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
