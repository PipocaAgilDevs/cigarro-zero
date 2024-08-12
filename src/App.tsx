import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import InformeSe from "./pages/Informe-se";
import InformeSeConteudo from "./pages/Informe-se/Conteudo";
import SobreNos from "./pages/Sobre-nos/SobreNos.tsx";
import Calculadora from "./pages/Calculadora/";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/informe-se",
      element: <InformeSe />,
    },
    {
      path: "/informe-se/:contentSlug",
      element: <InformeSeConteudo />,
    },
    {
      path: "/Sobre-nos",
      element: <SobreNos />,
    },
    {
      path: "/calculadora",
      element: <Calculadora />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
