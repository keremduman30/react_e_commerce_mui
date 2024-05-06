import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Stack, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import { theme } from "./actions/theme";

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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
