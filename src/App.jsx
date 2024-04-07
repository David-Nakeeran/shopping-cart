import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './pages/Home';
import Shop, {loader as shopLoader} from './pages/Shop';
import ProductDetail, {loader as productDetailLoader} from './pages/ProductDetail';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login from './pages/Login';

export const AppContext = createContext();



function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const router = createBrowserRouter([
    {
      element: (
      <AppContext.Provider value={
        {
          products,
          setProducts,
          product,
          setProduct,
          quantity,
          setQuantity,
          cart,
          setCart,
          loading,
          setLoading,
          isModalOpen,
          setIsModalOpen
        }}>
        <Layout />
      </AppContext.Provider>
      ),
      path: '/',
      children: [
        {index: true, element: <Home />,},
        {path: 'shop',
        element: <Shop />, 
        loader: shopLoader,
        errorElement: <Error />,
        },
        {
          path: 'shop/:productname/:id',
          element: <ProductDetail />,
          loader: productDetailLoader,
        },
        {path: 'cart', element: <Cart />, },
        {path: 'login', element: <Login />},
        {path: '*', element: <NotFound />},
      ],
    },
    
  ])
  
  return (
      <RouterProvider router={router} />
  )
}

export default App
