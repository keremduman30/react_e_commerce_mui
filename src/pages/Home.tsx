import { Box } from "@mui/material";
import SliderHome from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Box>
      <SliderHome />
      <FeaturedProducts title="featured" />
      <Categories />
      <FeaturedProducts title="trending" />
      <Contact />
    </Box>
  );
};

export default Home;
