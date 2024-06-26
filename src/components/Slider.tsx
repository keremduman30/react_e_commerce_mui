import { Box, Stack, styled } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { imgList } from "../services/fake_data";
const imgSliderList = imgList;

const BoxStyled = styled(Box)({
  height: "50px",
  width: "50px",
  border: "1px solid #999",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const SliderHome = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handlerClickLeft = () => {
    setCurrentSlide(currentSlide == 0 ? 2 : currentSlide - 1);
  };
  const handlerClickRight = () => {
    setCurrentSlide(currentSlide == 2 ? 0 : currentSlide + 1);
  };
  return (
    <Box
      sx={{
        height: "calc(100vh - 80px)",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          height: "100%",
          width: "300vw",
          transform: `translateX(-${currentSlide}00vw)`,
          transition: "all 1s ease",
        }}
      >
        {imgSliderList.map((e) => (
          <img
            src={e}
            key={e}
            style={{
              width: "100vw",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </Stack>
      <Stack
        sx={{
          width: "fit-content",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          position: "absolute",
          bottom: "100px",
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <BoxStyled sx={{}} onClick={handlerClickLeft}>
          <ArrowBackIosIcon />
        </BoxStyled>
        <BoxStyled onClick={handlerClickRight}>
          <ArrowForwardIosIcon />
        </BoxStyled>
      </Stack>
    </Box>
  );
};

export default SliderHome;
