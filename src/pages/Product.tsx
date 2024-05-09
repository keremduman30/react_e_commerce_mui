import { Box, Button, Stack, Typography, styled } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { Balance, FavoriteBorderOutlined } from "@mui/icons-material";
const images: string[] = [
  "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

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
  const [selectImg, setselectImg] = useState<string>(images[0]);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Box sx={{ padding: "10px 50px" }}>
      <Stack direction={"row"} sx={{ gap: "50px" }}>
        <Stack direction={"row"} sx={{ flex: "1", gap: "10px" }}>
          <Stack sx={{ flex: "1", gap: "10px" }}>
            {images.map((e) => (
              <img
                key={e}
                src={e}
                onClick={() => setselectImg(e)}
                style={{
                  height: "150px",
                  width: "100%",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            ))}
          </Stack>
          <Box sx={{ flex: "5" }}>
            <img
              src={selectImg}
              alt=""
              style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
            />
          </Box>
        </Stack>
        <Stack sx={{ flex: "1", gap: "15px" }}>
          <Typography variant="h4">Logn Stever</Typography>
          <Typography
            variant="h6"
            fontWeight={400}
            color={"#2879fe"}
            fontSize={30}
          >
            $59.9
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            impedit libero minima totam. Unde, eligendi dolorem cumque illo
            voluptate nisi ex sunt labore assumenda
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
    </Box>
  );
};

export default Product;
