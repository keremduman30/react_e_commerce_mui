import { Link } from "react-router-dom";
import { CardItem } from "../services/fake_data";
import { Box, Stack, Typography, styled } from "@mui/material";

type CardProp = {
  item: CardItem;
};

const StyledCardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "280px",
  gap: "10px",
  marginBottom: "50px",
});

const StyledImgBox = styled(Box)({
  width: "100%",
  height: 400,
  overflow: "hidden",
  position: "relative",
  ".img1": {
    zIndex: 1,
  },
  "&:hover": {
    ".img2": {
      zIndex: 2,
    },
  },
});

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const StyledTypography = styled(Typography)({
  position: "absolute",
  top: "5px",
  left: "5px",
  backgroundColor: "white",
  color: "teal",
  padding: "3px 5px",
  zIndex: 3,
  fontWeight: "500",
  fontSize: "12px",
});
const Card = ({ item }: CardProp) => {
  return (
    <Link to={`/product/${item.id}`}>
      <StyledCardContainer>
        <StyledImgBox>
          {item.isNew && <StyledTypography>New Season</StyledTypography>}
          <StyledImg src={item.img} alt="" className="img1" />
          <StyledImg src={item.img1} alt="" className="img2" />
        </StyledImgBox>
        <Typography variant="h6" fontSize={16} fontWeight={400}>
          {item.title}
        </Typography>
        <Stack direction={"row"} sx={{ gap: "10px" }}>
          <Typography
            variant="h2"
            fontSize={18}
            fontWeight={500}
            sx={{ textDecoration: "line-through", color: "gray" }}
          >
            ${item.oldPrice}
          </Typography>
          <Typography variant="h2" fontSize={18} fontWeight={500}>
            ${item.price}
          </Typography>
        </Stack>
      </StyledCardContainer>
    </Link>
  );
};

export default Card;
