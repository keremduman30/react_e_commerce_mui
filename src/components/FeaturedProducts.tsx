import { Box, Typography, Stack } from "@mui/material";
import { featuresdata } from "../services/fake_data";
import Card from "./Card";

type FeaturedProps = {
  title: string;
};
const FeaturedProducts = ({ title }: FeaturedProps) => {
  const data = featuresdata;
  return (
    <Box sx={{ margin: "100px 200px" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mb: "50px" }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ flex: "2", textTransform: "capitalize" }}
        >
          {title} products
        </Typography>
        <Typography variant="body1" sx={{ flex: "3", color: "gray" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          unde quae corrupti esse officiis aliquid optio neque aut cupiditate
          debitis ipsa nobis tempore saepe error quidem beatae nihil, totam odio
          voluptas inventoret! Nostrum molestiae explicabo cum qui veniam, alias
          tempora.
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {data.map((card) => (
          <Card key={card.id} item={card} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
