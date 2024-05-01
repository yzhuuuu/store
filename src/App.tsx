import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "@/pages/HomeLayout.tsx";
import Landing from "@/pages/Landing.tsx";
import About from "@/pages/About.tsx";
import Products from "@/pages/Products.tsx";
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
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
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
