import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import RootLayout from "./assets/components/RootLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import KanbanPage from "./pages/KanbanPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NewBoardPage from "./pages/NewBoardPage";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "board",
        element: <KanbanPage />,
        children: [{ path: ":taskId", element: <TaskDetailsPage /> }],
      },
      { path: "new-board", element: <NewBoardPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
