import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/index.tsx";
import Calculator from "./pages/Calculator/index.tsx";
import Layout from "./components/Layout/index.tsx";
import GetInformed from "./pages/GetInformed/index.tsx";
import Contents from "./pages/GetInformed/Contents/index.tsx";
import FindHelp from "./pages/FindHelp/index.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "informe-se",
          element: <GetInformed />,
        },
        {
          path: "informe-se/:contentSlug",
          element: <Contents />,
        },
        {
          path: "encontrar-ajuda",
          element: <FindHelp />,
        },
        {
          path: "sobre-nos",
          element: <AboutUs />,
        },
        {
          path: "calculadora",
          element: <Calculator />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
