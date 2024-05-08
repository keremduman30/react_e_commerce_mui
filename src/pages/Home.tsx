import { Box } from "@mui/material";
import SliderHome from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <Box>
      <SliderHome />
      <FeaturedProducts title="featured" />
      <FeaturedProducts title="trending" />
    </Box>
  );
};

export default Home;
