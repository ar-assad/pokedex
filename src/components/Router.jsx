import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PokemonInfo from "./PokemonInfo";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/pokemon/:name",
      element: <PokemonInfo />,
    }
  ]);

  return <RouterProvider router={router} />;
}
