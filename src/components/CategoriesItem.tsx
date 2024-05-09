import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CategoryItem } from "../services/fake_data";
import { Link } from "react-router-dom";

export type CategoriesItemProp = {
  item: CategoryItem;
};

const StyledBox = styled(Box)({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
});
const StyledTypography = styled(Typography)({
  position: "absolute",
  height: "20px",
  backgroundColor: "white",
  minWidth: "100px",
  width: "fit-content",
  padding: "10px",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: "auto",
  textTransform: "uppercase",
  fontWeight: "500px",
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.1)",
    transition: `transform 300s easeIn `,
    backgroundColor: "#2879fe",
    color: "white",
  },
});

export const CategoriesItem = ({ item }: CategoriesItemProp) => {
  return (
    <StyledBox>
      <img
        src={item.img}
        alt=""
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
      <Link to={"#home"}>
        <StyledTypography variant="body2">{item.btnText}</StyledTypography>
      </Link>
    </StyledBox>
  );
};
