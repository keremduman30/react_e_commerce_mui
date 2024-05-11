import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Stack, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import { theme } from "./theme/theme";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { basketLocale } from "./store/slice/basketSlice";

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
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(basketLocale({ getInitial: true }));
  }, [dispatch]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
