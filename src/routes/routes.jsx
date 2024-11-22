import { createBrowserRouter } from "react-router-dom";
// Pages
import HomePage from "../pages/HomePage/HomePage";
// Views
import Dashboard from "../views/Dashboard/Dashboard";
import Presupuesto from "../views/Presupuesto/Presupuesto";
import Ordenes from "../views/Ordenes/Ordenes";
import Taller from "../views/Taller/Taller";



export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true, // Ruta por defecto
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "presupuesto",
          element: <Presupuesto />,
        },
        {
          path: "ordenes",
          element: <Ordenes />,
        },
        {
          path: "taller",
          element: <Taller />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);