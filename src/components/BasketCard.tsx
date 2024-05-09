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
import { featuresdata } from "../services/fake_data";
import { styled } from "@mui/system";
const StyledStackBasKetCard = styled(Box)({
  position: "absolute",
  top: "80px",
  right: "20px",
  zIndex: 999,
  backgroundColor: "white",
});

const BasketCard = () => {
  const data = featuresdata;
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

          {data.map((e) => (
            <CardHeader
              key={e.id}
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
                    1 * ${e.price}
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
                >
                  <Delete />
                </IconButton>
              }
            />
          ))}
        </Stack>
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
            $198
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
          >
            Process to checkout
          </Button>
          <Button variant="text" sx={{ color: "red" }}>
            Reset
          </Button>
        </Stack>
      </Card>
    </StyledStackBasKetCard>
  );
};

export default BasketCard;
