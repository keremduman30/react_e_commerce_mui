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
import { useEffect, useState } from "react";

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
  },
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
  }, */
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
}));

const Products = () => {
  const id = useParams().id;
  console.log(id);

  const [maxPrice, setmaxPrice] = useState<number | number[]>(30);
  const [sort, setSort] = useState<"asc" | "desc" | null>(null);
  const handleChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setmaxPrice(value);
  };
  useEffect(() => {
    console.log(sort);
  }, [sort]);

  return (
    <Stack direction={"row"} sx={{ padding: "30px 50px" }}>
      <Box sx={{ flex: "1", position: "sticky", height: "100%", top: "50px" }}>
        <Typography variant="h6" fontWeight={400}>
          Product Categories
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Hat"
            sx={formControlLabelStyle}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Tshirt"
            sx={formControlLabelStyle}
          />
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
              onChange={() => setSort("asc")}
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="Price(Highest first)"
              onChange={() => setSort("desc")}
              sx={formControlLabelStyle}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ flex: "3" }}>
        <img
          src="https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "300px",
            marginBottom: "50px",
          }}
        />
        <ProductsList catId={id} maxPrice={maxPrice} sort={sort} />
      </Box>
    </Stack>
  );
};

export default Products;
