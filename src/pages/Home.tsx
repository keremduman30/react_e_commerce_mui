import { Box } from "@mui/material";
import SliderHome from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { basketLocale, removeAllProduct } from "../store/slice/basketSlice";

const Home = () => {
  const path = useLocation();
  const successPayment = path.search.split("?")[1];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (successPayment) {
      dispatch(removeAllProduct());
      dispatch(basketLocale({}));
      navigate("/");
    }
  }, [dispatch, navigate, successPayment]);

  return (
    <Box>
      <SliderHome />
      <FeaturedProducts title="trending" />
      <Categories />
      <FeaturedProducts title="featured" />
      <Contact />
    </Box>
  );
};

export default Home;
