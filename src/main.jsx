import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Docs from "./components/Docs/Docs.jsx";
import NotFound from "./components/Pages/NotFound.jsx";
import Backgrounds from "./components/Backgrounds/Backgrounds.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import GettingStarted from "./components/Docs/components/GettingStarted.jsx";
import Colors from "./components/Colors/Colors.jsx";
import Service from "./Service/Service.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Hero />,
      },

      {
        path: "/pages/docs",
        element: <Docs />,
        children: [
          {
            path: "",
            element: <GettingStarted />,
          },
        ],
      },

      {
        path: "/pages/buttons",
        element: <Buttons />,
      },
      {
        path: "/pages/background",
        element: <Backgrounds />,
      },
      {
        path: "/pages/colors",
        element: <Colors />,
      },
      {
        path: "/pages/service",
        element: <Service />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-right" />
  </StrictMode>
);
