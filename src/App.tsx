import Landing, { loader as landingLoader } from '@/pages/Landing.tsx';
import ProductDetail, {
  loader as productDetailLoader,
} from './components/ProductDetail';
import Products, { loader as productLoader } from '@/pages/Products.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from '@/pages/About.tsx';
import Cart from '@/pages/Cart.tsx';
import HomeLayout from '@/pages/HomeLayout.tsx';
import Login from '@/pages/Login.tsx';
import Register from '@/pages/Register.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
        loader: productDetailLoader,
      },
    ],
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
