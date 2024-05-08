import { Box } from "@mui/material";
import SliderHome from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <Box>
      <SliderHome />
      <FeaturedProducts title="featured" />
      <Categories />
      <FeaturedProducts title="trending" />
    </Box>
  );
};

export default Home;
