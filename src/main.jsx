import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async"; // Temporarily disabled due to incompatibility with React 19
import Layout from "./routes/_layout.jsx";
import Home from "./routes/home.jsx";
import ProjectsPage from "./routes/projects.jsx";
import ResumePage from "./routes/resume.jsx";
import ContactPage from "./routes/contact.jsx";
import NotFound from "./routes/not-found.jsx";

// We are now using index.css for Tailwind directives. App.css might be removed later.
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div className="p-8 text-center text-red-500">Sorry, an unexpected error occurred. Please refresh the page.</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
      <RouterProvider router={router} />
    {/* </HelmetProvider> */}
  </React.StrictMode>
);
