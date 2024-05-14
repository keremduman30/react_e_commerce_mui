import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { Delete } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  basketLocale,
  removeAllProduct,
  removeProduct,
} from "../store/slice/basketSlice";
import { CardItem } from "../services/fake_data";
import { loadStripe } from "@stripe/stripe-js";
import { useFetchPaymentMutation } from "../services/products_api";
const StyledStackBasKetCard = styled(Box)({
  position: "absolute",
  top: "80px",
  right: "20px",
  zIndex: 999,
  minWidth: "350px",
  backgroundColor: "white",
});

const BasketCard = () => {
  const { productList, total } = useAppSelector((store) => store.basket);
  const dispatch = useAppDispatch();
  const removeItem = (data: CardItem) => {
    dispatch(removeProduct({ cardItem: data }));
    dispatch(basketLocale({}));
  };
  const removeAll = () => {
    dispatch(removeAllProduct());
    dispatch(basketLocale({}));
  };

  //stripe
  const [fetchPayment] = useFetchPaymentMutation();
  const handlePayment = async () => {
    const stripe = await loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);
    try {
      const data = await fetchPayment({
        products: productList,
        amount: total,
      }).unwrap();

      if (data.id) {
        await stripe?.redirectToCheckout({ sessionId: data.id });
      }
    } catch (error) {
      console.log("client eror" + error);
    }
  };

  return (
    <StyledStackBasKetCard>
      <Card sx={{ padding: "20px" }}>
        <Stack gap={2}>
          <Typography
            sx={{
              color: "gray",
              fontSize: "24px",
              fontWeight: 400,
            }}
          >
            Products in your cart
          </Typography>
          {productList.length > 0 ? (
            <Stack gap={2}>
              {productList.map((e) => (
                <CardHeader
                  key={crypto.randomUUID()}
                  sx={{ padding: "0" }}
                  avatar={
                    <img
                      src={e.img}
                      alt=""
                      width={80}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  }
                  title={
                    <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                      {e.title}
                    </Typography>
                  }
                  subheader={
                    <Stack>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "gray",
                          marginBottom: "10px",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        Lorem ipsum dolor sit.
                      </Typography>
                      <Typography variant="h6" sx={{ color: "#2879fe" }}>
                        {e.quantity}*{e.price}
                      </Typography>
                    </Stack>
                  }
                  action={
                    <IconButton
                      sx={{
                        color: "red",
                        height: "100px",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                      onClick={() => removeItem(e)}
                    >
                      <Delete />
                    </IconButton>
                  }
                />
              ))}
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ textTransform: "uppercase", marginTop: "30px" }}
              >
                <Typography variant="h6" fontWeight={500} fontSize={16}>
                  Sub Total :
                </Typography>
                <Typography variant="h6" fontWeight={500} fontSize={16}>
                  ${total}
                </Typography>
              </Stack>
              <Stack alignItems={"start"}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "250px",
                    padding: "10px ",
                    marginY: "20px",
                    bgcolor: "#2879fe",
                    color: "white",
                    fontWeight: "400",
                    "&:hover": {
                      bgcolor: "#2879fe",
                      color: "white",
                    },
                  }}
                  onClick={handlePayment}
                >
                  Process to checkout
                </Button>
                <Button
                  variant="text"
                  sx={{ color: "red" }}
                  onClick={removeAll}
                >
                  Reset
                </Button>
              </Stack>
            </Stack>
          ) : (
            <Typography textAlign={"center"} variant="h6" color={"gray"}>
              Henüz ürün eklemediniz
            </Typography>
          )}
        </Stack>
      </Card>
    </StyledStackBasKetCard>
  );
};

export default BasketCard;
