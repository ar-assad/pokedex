import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
}
