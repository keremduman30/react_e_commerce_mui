import { Box, Typography, Stack } from "@mui/material";
import Card from "./Card";
import { CardItem } from "../services/fake_data";
import { useEffect, useState } from "react";
import { useFetchFeaturesProductsQuery } from "../services/products_api";

type FeaturedProps = {
  title: string;
};
const FeaturedProducts = ({ title }: FeaturedProps) => {
  const { data } = useFetchFeaturesProductsQuery("");
  const [filterFeaturedList, setFilterFeaturedList] = useState<CardItem[]>([]);
  useEffect(() => {
    if (data) {
      setFilterFeaturedList(
        data.filter((e) => (title === "featured" ? !e.isNew : e.isNew))
      );
    }
  }, [data, title]);

  return (
    <Box
      sx={{
        margin: {
          xs: "10px 20px",
          md: "100px",
        },
      }}
    >
      <Stack
        // direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          mb: "50px",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "20px" },
          fontSize: { xs: "12px" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ flex: "2", textTransform: "capitalize" }}
        >
          {title} products
        </Typography>
        <Typography
          variant="body1"
          sx={{ flex: "3", color: "gray", textAlign: { xs: "center" } }}
        >
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
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {filterFeaturedList.map((card) => (
          <Card key={card._id} item={card} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
