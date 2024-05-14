import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ProductsList from "../components/ProductsList";
import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { productsBgCategoryImg } from "../services/fake_data";

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
  },
};

const StyleSlider = styled(Slider)(() => ({
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
}));

const Products = () => {
  const id = useParams().id;
  const backgroundCategoryImg = useMemo(() => productsBgCategoryImg, []);
  const [backgroundImg, setBackgrounImg] = useState(backgroundCategoryImg[2]);
  const [maxPrice, setMaxPrice] = useState<number | number[]>(5);
  const [sort, setSort] = useState<number>(1);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setBackgrounImg(
      id === "men"
        ? backgroundCategoryImg[0]
        : id === "women"
        ? backgroundCategoryImg[1]
        : backgroundCategoryImg[2]
    );
  }, [backgroundImg, backgroundCategoryImg, id]);

  const handleChange = (_event: Event, value: number | number[]) => {
    setMaxPrice(value);
  };
  const handleCategoryCheck = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setCategories((prev) => [...prev, event.target.value]);
    } else {
      setCategories((prev) => prev.filter((e) => e != event.target.value));
    }
  };

  return (
    <Stack direction={"row"} sx={{ padding: "30px 50px" }}>
      <Box sx={{ flex: "1", position: "sticky", height: "100%", top: "50px" }}>
        <Typography variant="h6" fontWeight={400}>
          Product Categories
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox value={"hat"} onChange={handleCategoryCheck} />}
            label="Hat"
            sx={formControlLabelStyle}
          />
          <FormControlLabel
            control={
              <Checkbox value={"tshirt"} onChange={handleCategoryCheck} />
            }
            label="T-shirt"
            sx={formControlLabelStyle}
          />
          <FormControlLabel
            control={
              <Checkbox value={"glasses"} onChange={handleCategoryCheck} />
            }
            label="Glasses"
            sx={formControlLabelStyle}
          />
          {id === "women" && (
            <FormControlLabel
              control={
                <Checkbox value={"dress"} onChange={handleCategoryCheck} />
              }
              label="Dress"
              sx={formControlLabelStyle}
            />
          )}
        </FormGroup>
        <Typography variant="h6" fontWeight={400} mt={2}>
          Filter by price
        </Typography>
        <Stack direction={"row"} spacing={1} alignItems={"center"} mb={1}>
          <Typography>0</Typography>
          <StyleSlider
            min={0}
            max={100}
            value={maxPrice}
            onChange={handleChange}
            sx={{ width: "130px" }}
          />
          <Typography>{maxPrice}</Typography>
        </Stack>
        <Typography variant="h6" fontWeight={400}>
          Sort By
        </Typography>
        <FormControl>
          <RadioGroup>
            <FormControlLabel
              value="asc"
              control={<Radio />}
              label="Price(Lowest first)"
              sx={formControlLabelStyle}
              onChange={() => setSort(1)}
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="Price(Highest first)"
              onChange={() => setSort(-1)}
              sx={formControlLabelStyle}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ flex: "3" }}>
        <img
          src={backgroundImg}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "300px",
            marginBottom: "50px",
          }}
        />
        <ProductsList
          catId={id}
          maxPrice={maxPrice}
          sort={sort}
          categories={categories}
        />
      </Box>
    </Stack>
  );
};

export default Products;
/* 

-----sorular-----
  const handleChange = (burda activeThumb cıkarınca hata yok ama event cıkarınca hata var neden ?
    _event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setmaxPrice(value);
  };






const StyleSlider = styled(Slider)(() => ({
  /* // padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&::before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  }, 
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
}));

*/
