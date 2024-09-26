import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Homepage,
  Pricing,
  Product,
  Error,
  Login,
  Register,
  Landing,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'product', element: <Product /> },
      { path: 'price', element: <Pricing /> },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <Error /> },
  { path: '/register', element: <Register />, errorElement: <Error /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
