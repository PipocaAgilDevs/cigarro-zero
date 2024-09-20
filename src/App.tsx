import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/index.tsx";
import AboutUs from "./pages/AboutUs/index.tsx";
import Calculator from "./pages/Calculator/index.tsx";
import FindHelp from "./pages/FindHelp/index.tsx";
import Contents from "./pages/GetInformed/Contents/index.tsx";
import GetInformed from "./pages/GetInformed/index.tsx";
import Home from "./pages/Home";

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
          path: "sobre-nos",
          element: <AboutUs />,
        },
        {
          path: "calculadora",
          element: <Calculator />,
        },
        {
          path: "encontrar-ajuda",
          element: <FindHelp />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
