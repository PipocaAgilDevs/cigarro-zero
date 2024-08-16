import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import InformeSe from "./pages/Informe-se";
import InformeSeConteudo from "./pages/Informe-se/Conteudo";
import SobreNos from "./pages/SobreNos/index.tsx";
import Calculadora from "./pages/Calculadora/";
import Layout from "./components/Layout/index.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "informe-se",
          element: <InformeSe />,
        },
        {
          path: "informe-se/:contentSlug",
          element: <InformeSeConteudo />,
        },
        {
          path: "sobre-nos",
          element: <SobreNos />,
        },
        {
          path: "calculadora",
          element: <Calculadora />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
