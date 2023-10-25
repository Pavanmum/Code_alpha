// import './App.css';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Home from './pages/Home';
import Login from './pages/Login';
import Sign from './pages/Sign';
import { ToastContainer } from 'react-toastify';

function App() {
  const queryClient = new QueryClient();

const Layout = () => {  
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
      <Footer/>
      </QueryClientProvider>
    </div>
  );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/signup",
          element: <Sign/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;
