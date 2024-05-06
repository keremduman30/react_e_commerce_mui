import { Home } from "@mui/icons-material";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Stack } from "@mui/material";

const Layout = () => {
  return (
    <Stack>
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
