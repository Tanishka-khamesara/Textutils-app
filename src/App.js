import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Aboutus from './Component/About us';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/Contact",
          element:<Contact/>
        },
        {
          path: "/About",
          element:<Aboutus/>
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
