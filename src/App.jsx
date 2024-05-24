import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./Pages/NotFound";

import "./App.css";
import Home from "./Pages/Home";
import Exchange from "./Pages/Exchange";
import Dashboard from "./Pages/Dashboard";
import Markets from "./Pages/Markets";
import News from "./Pages/News";
import Wallet from "./Pages/Wallet";

// import { Provider } from "react-redux";

// import store from "./app/store.js";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "exchange",
          element: <Exchange />,
        },

        {
          path: "dashboard",
          element: <Dashboard />,
        },

        {
          path: "markets",
          element: <Markets />,
        },

        {
          path: "news",
          element: <News />,
        },

        {
          path: "wallet",
          element: <Wallet />,
        },
      ],
    },
  ]);

  return (
    // <Provider store={store}>
    <RouterProvider router={router} />
    // </Provider>
  );
};

export default App;
