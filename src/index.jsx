import React from "react";
import ReactDOM from "react-dom";
// import App from "./Components/App";
import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer.jsx";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/me",
    element: <Footer />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
