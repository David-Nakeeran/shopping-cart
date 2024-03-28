import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout';
import Cart from './pages/Cart';

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {path: '/', element: <Home />,},
        {path: 'shop', element: <Shop />,},
        {
          path: 'shop/:productName/:id',
          element: <ProductDetail />,
        },
        {path: 'cart', element: <Cart />, },
      ],
    },
    
  ])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
