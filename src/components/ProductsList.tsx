import { Stack, Typography } from "@mui/material";
import Card from "./Card";
import { useFetchFilterProductsQuery } from "../services/products_api";

type props = {
  catId?: string;
  maxPrice: number | number[];
  sort: number;
  categories: string[];
};
const ProductsList = ({ catId, maxPrice, sort, categories }: props) => {
  const { data } = useFetchFilterProductsQuery({
    categories,
    catId,
    maxPrice,
    sort,
  });

  const isWrap = data && data?.length > 2;
  return (
    <Stack
      direction={"row"}
      sx={{
        flexWrap: isWrap ? "wrap" : "nowrap",
        justifyContent: {
          xs: "center",
          md: `${isWrap ? "space-between" : "space-evenly"}`,
        },
        gap: {
          sm: "50px",
          md: "0px  ",
        },
      }}
    >
      {data?.map((e) => (
        <Card item={e} key={crypto.randomUUID()} />
      ))}
      {data?.length == 0 && (
        <Typography variant="h4" key={crypto.randomUUID()}>
          Böyle bir ürün bulunamadı
        </Typography>
      )}
    </Stack>
  );
};

export default ProductsList;
