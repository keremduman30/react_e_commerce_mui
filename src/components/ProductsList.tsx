import { Stack } from "@mui/material";
import { productData } from "../services/fake_data";
import Card from "./Card";

type props = {
  catId?: string;
  maxPrice: number | number[];
  sort: "asc" | "desc" | null;
};
const ProductsList = ({ catId, maxPrice, sort }: props) => {
  const data = productData;

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ flexWrap: "wrap" }}
    >
      {data.map((e) => (
        <Card item={e} key={e.id} />
      ))}
    </Stack>
  );
};

export default ProductsList;
