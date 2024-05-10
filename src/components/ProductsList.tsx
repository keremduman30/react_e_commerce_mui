import { Stack, Typography } from "@mui/material";
import { CardItem } from "../services/fake_data";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

type props = {
  catId?: string;
  maxPrice: number | number[];
  sort: number;
  categories: string[];
};
const ProductsList = ({ catId, maxPrice, sort, categories }: props) => {
  const { data } = useFetch<CardItem[]>(
    `/products?gender=${catId}&price=${maxPrice}&sort=${sort}&category=${categories}`
  );
  const isWrap = data && data?.length > 2;
  return (
    <Stack
      direction={"row"}
      justifyContent={isWrap ? "space-between" : "space-evenly"}
      sx={{ flexWrap: isWrap ? "wrap" : "nowrap" }}
    >
      {data?.map((e) => (
        <Card item={e} key={e.id} />
      ))}
      {data?.length == 0 && (
        <Typography variant="h4">Böyle bir ürün bulunamadı</Typography>
      )}
    </Stack>
  );
};

export default ProductsList;
