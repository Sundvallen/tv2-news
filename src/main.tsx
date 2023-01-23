import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import NewsList from "./components/NewsList/NewsList";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import "./styles/globals.scss";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/:portalId",
        element: <NewsList />,
      },
      {
        path: "/:portalId/:newsSlug/:newsId",
        element: <NewsArticle />,
      },
      {
        path: "*",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

<RouterProvider router={router} />;
