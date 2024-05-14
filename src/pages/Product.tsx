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
const CustomIcnButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  padding: "0",
  width: "200px",
  fontSize: "16px",

  [theme.breakpoints.down("sm")]: {
    "&.MuiButtonBase-root ": {
      padding: "0px ",
      width: "150px",
      fontSize: "12px",
    },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    "&.MuiButtonBase-root ": {
      padding: "0px ",
      width: "300px",
    },
  },
}));

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
    <Box
      sx={{
        padding: {
          xs: "10px",
          md: "10px 50px",
        },
      }}
    >
      {data != null ? (
        <Stack
          direction={"row"}
          sx={{ gap: "50px", flexDirection: { xs: "column", md: "row" } }}
        >
          <Stack direction={"row"} sx={{ flex: "1", gap: "10px" }}>
            <Stack
              sx={{
                flex: {
                  xs: "2",
                  lg: "1",
                },
                gap: "10px",
              }}
            >
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
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
          <Stack
            sx={{
              flex: "1",
              gap: "15px",
            }}
          >
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
              sx={{
                justifyContent: "space-between",
                width: { xs: "100%", lg: "70%" },
                gap: {
                  xs: "10px",
                },
              }}
            >
              <CustomIcnButton
                variant="text"
                startIcon={<FavoriteBorderOutlined />}
              >
                Add to wish list
              </CustomIcnButton>
              <CustomIcnButton variant="text" startIcon={<Balance />}>
                Add to Compare
              </CustomIcnButton>
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
