import { Box, styled } from "@mui/material";
import { Stack } from "@mui/system";
import { CategoriesItem } from "./CategoriesItem";
import { categoriesList } from "../services/fake_data";
const StyledBoxLeft = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});
const StyledBoxRight = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
const StyledRowBox = styled(Box)({
  flex: 1,
  overflow: "hidden",
});

const categoriesListItem = categoriesList;

const Categories = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        height: "80vh",
        gap: "10px",
        margin: "10px",
        display: { xs: "none", md: "flex" },
      }}
    >
      <StyledBoxLeft>
        <Box sx={{ flex: "1" }}>
          <Stack sx={{ height: "100%", gap: "10px" }}>
            <StyledRowBox>
              <CategoriesItem item={categoriesListItem[0]} />
            </StyledRowBox>
            <StyledRowBox>
              <CategoriesItem item={categoriesListItem[1]} />
            </StyledRowBox>
          </Stack>
        </Box>
        <StyledRowBox>
          <CategoriesItem item={categoriesListItem[2]} />
        </StyledRowBox>
      </StyledBoxLeft>
      <StyledBoxRight>
        <StyledRowBox>
          <Stack
            direction={"row"}
            sx={{ width: "100%", height: "100%", gap: "10px" }}
          >
            <StyledRowBox>
              <CategoriesItem item={categoriesListItem[3]} />
            </StyledRowBox>
            <StyledRowBox>
              <CategoriesItem item={categoriesListItem[4]} />
            </StyledRowBox>
          </Stack>
        </StyledRowBox>
        <StyledRowBox>
          <CategoriesItem item={categoriesListItem[5]} />
        </StyledRowBox>
      </StyledBoxRight>
    </Stack>
  );
};

export default Categories;
