import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./Pages/NotFound";

import "./App.css";
import Home from "./Pages/Home";
import Exchange from "./Pages/Exchange";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "exchange",
          element: <Exchange />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
