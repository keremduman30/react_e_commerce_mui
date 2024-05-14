import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";
import { Balance, FavoriteBorderOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { CardItem } from "../services/fake_data";
import { useAppDispatch } from "../store/store";
import { addProduct, basketLocale } from "../store/slice/basketSlice";
import { useFethcFindProductQuery } from "../services/products_api";

const StyledButton = styled(Button)({
  boxShadow: "none",
  border: "none",
  height: "40px",
  width: "40px",
  backgroundColor: "#b6adad54",
  color: "black",
  "&:hover": {
    backgroundColor: "#b6adad54 ",
    color: "black",
    boxShadow: "none",
  },
});

const Product = () => {
  const id = useParams().id;
  const [selectImg, setSelectImg] = useState<string | null>(null);
  const { data, error } = useFethcFindProductQuery(id ?? "");

  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      setSelectImg(data.img);
    }
  }, [data]);

  //reduxtoolkit
  const addProductItem = (data: CardItem) => {
    dispatch(addProduct({ quantity, cardItem: data }));
    dispatch(basketLocale({}));
  };

  return (
    <Box sx={{ padding: "10px 50px" }}>
      {data != null ? (
        <Stack direction={"row"} sx={{ gap: "50px" }}>
          <Stack direction={"row"} sx={{ flex: "1", gap: "10px" }}>
            <Stack sx={{ flex: "1", gap: "10px" }}>
              <img
                src={data.img}
                onClick={() => setSelectImg(data.img)}
                style={{
                  height: "150px",
                  width: "100%",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
              {data.img1 && (
                <img
                  src={data.img1}
                  onClick={() => setSelectImg(data.img1!)}
                  style={{
                    height: "150px",
                    width: "100%",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                />
              )}
            </Stack>
            <Box sx={{ flex: "5" }}>
              <img
                src={selectImg!}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
          <Stack sx={{ flex: "1", gap: "15px" }}>
            <Typography variant="h4">{data?.title}</Typography>
            <Typography
              variant="h6"
              fontWeight={400}
              color={"#2879fe"}
              fontSize={30}
            >
              ${data?.price}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={400}
              sx={{
                fontSize: "18px",
                fontWeight: "300",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {data.desc && data.desc}
            </Typography>
            <Stack
              direction={"row"}
              sx={{
                gap: "10px",
                alignItems: "center",
              }}
            >
              <StyledButton
                variant="contained"
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : quantity)
                }
              >
                -
              </StyledButton>
              <Typography>{quantity}</Typography>
              <StyledButton
                variant="contained"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </StyledButton>
            </Stack>
            <Button
              variant="outlined"
              startIcon={<AddShoppingCartIcon />}
              sx={{
                width: "250px",
                padding: "10px ",
                marginY: "20px",
                bgcolor: "#2879fe",
                color: "white",
                "&:hover": {
                  bgcolor: "#2879fe",
                  color: "white",
                },
              }}
              onClick={() => addProductItem(data)}
            >
              Add to Card
            </Button>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ width: "60%" }}
            >
              <Button
                variant="text"
                startIcon={<FavoriteBorderOutlined />}
                sx={{
                  width: "200px",
                  textTransform: "uppercase",
                  padding: "0",
                }}
              >
                Add to wish list
              </Button>
              <Button
                variant="text"
                startIcon={<Balance />}
                sx={{
                  width: "200px",
                  textTransform: "uppercase",
                }}
              >
                Add to Compare
              </Button>
            </Stack>
            <hr style={{ width: "100%" }} />
            <Stack sx={{ color: "gray" }} gap={1}>
              <Typography fontSize={14}>Vender : Polo</Typography>
              <Typography fontSize={14}>Product Type : T-Shirt</Typography>
              <Typography fontSize={14}>Taga : T-Shirt, Women , Top</Typography>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {error ? (
            <>
              <Typography>Please try again later.</Typography>
            </>
          ) : (
            <>
              <Typography>Loading..</Typography>
              <CircularProgress />
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Product;
