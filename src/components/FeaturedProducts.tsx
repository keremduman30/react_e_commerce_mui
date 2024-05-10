import { Box, Typography, Stack } from "@mui/material";
import Card from "./Card";
import { CardItem } from "../services/fake_data";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

type FeaturedProps = {
  title: string;
};
const FeaturedProducts = ({ title }: FeaturedProps) => {
  const { data } = useFetch<CardItem[]>("/products");
  const [filterFeaturedList, setfilterFeaturedList] = useState<CardItem[]>([]);
  useEffect(() => {
    if (data) {
      setfilterFeaturedList(
        data.filter((e) => (title === "featured" ? !e.isNew : e.isNew))
      );
    }
  }, [data, title]);

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
        {filterFeaturedList.map((card) => (
          <Card key={card._id} item={card} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
/* 
  /*  
  const [featuredData, setfeaturedData] = useState<CardItem[]>([]);
  without core fetch api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseApi.get("/products");
        if (res.data) {
          setfeaturedData(res.data);
        }
      } catch (error) {
        console.log("erorr " + error);
      }
    };
    fetchData();
  }, []); */

/*  const featuredData =
    title === "featured"
      ? featuredData.filter((e) => e.isNew)
      : featuredData.filter((e) => !e.isNew); 


*/
