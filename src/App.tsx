import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "@/pages/HomeLayout.tsx";
import Landing, { loader as landingLoader } from "@/pages/Landing.tsx";
import About from "@/pages/About.tsx";
import Products, { loader as productLoader } from "@/pages/Products.tsx";
import Cart from "@/pages/Cart.tsx";
import Register from "@/pages/Register.tsx";
import Login from "@/pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
