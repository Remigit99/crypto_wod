import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./Pages/NotFound";

import "./App.css";
import Home from "./Pages/Home";
import Exchange from "./Pages/Exchange";

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
          // path: "exchange",
          index: true,
          element: <Exchange />,
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
