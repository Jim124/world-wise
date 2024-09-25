import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage, Pricing, Product, Error } from './pages';

const router = createBrowserRouter([
  { path: '/', element: <Homepage />, errorElement: <Error /> },
  { path: '/product', element: <Product /> },
  { path: '/price', element: <Pricing /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
