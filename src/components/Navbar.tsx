import { Badge, Box, Select, Stack, Typography, styled } from "@mui/material";
import { ReactElement, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // İstediğiniz simgeyi burada kullanabilirsiniz

type NavType = {
  link: string;
  name: string;
};

type IconType = {
  icon: ReactElement;
  id: number;
};
const categories: NavType[] = [
  { link: "#men", name: "Men" },
  { link: "#women", name: "Women" },
  { link: "#children", name: "Children" },
];
const navlink: NavType[] = [
  { link: "/", name: "HomePage" },
  { link: "#about", name: "About" },
  { link: "#contact", name: "Contact" },
  { link: "#stores", name: "Stores" },
];
const iconList: IconType[] = [
  { icon: <SearchIcon />, id: 1 },
  { icon: <PersonOutlineIcon />, id: 2 },
  { icon: <FavoriteBorderIcon />, id: 3 },
  { icon: <ShoppingCartOutlinedIcon />, id: 4 },
];

const StyledTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: `transform ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  },
}));

/* 
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "25px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

*/

const Navbar = () => {
  const [selectLang, setLanguage] = useState("usd");
  const handleClose = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <Box sx={{ height: "80px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ padding: "10px 30px" }}
      >
        <Stack direction={"row"} gap={2}>
          <Select
            value={selectLang}
            disableUnderline
            autoWidth
            onChange={handleClose}
            variant="standard"
            IconComponent={ExpandMoreIcon} // Simgeyi burada belirtin
            sx={{
              height: "30px",
              gap: 5,
            }}
          >
            <MenuItem value="tr">
              <img
                src="/img/en.png"
                alt=""
                style={{
                  objectFit: "cover",
                  width: "20px",
                  height: "15px",
                }}
              />
            </MenuItem>
            <MenuItem value="usd" sx={{ gap: 1 }}>
              <img
                src="/img/en.png"
                alt=""
                style={{
                  objectFit: "cover",

                  width: "20px",
                  height: "15px",
                  paddingRight: "5px",
                }}
              />
            </MenuItem>
          </Select>
          <Select
            value={selectLang}
            disableUnderline
            autoWidth
            onChange={handleClose}
            variant="standard"
            IconComponent={ExpandMoreIcon}
            sx={{
              height: "30px",
              gap: 5,
            }}
          >
            <MenuItem value="usd" sx={{ gap: 1 }}>
              {selectLang}
            </MenuItem>
          </Select>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {categories.map((e) => (
              <a href={e.link} key={e.name}>
                <StyledTypography key={e.link}>{e.name}</StyledTypography>
              </a>
            ))}
          </Box>
        </Stack>
        <a href={"/"}>
          <StyledTypography variant="h5">DumanStore</StyledTypography>
        </a>

        <Stack direction={"row"} gap={2}>
          {navlink.map((e) => (
            <a href={e.link}>
              <StyledTypography key={e.link}>{e.name}</StyledTypography>
            </a>
          ))}
          {iconList.map((e, i) =>
            i < 3 ? (
              <Box
                sx={{
                  cursor: "pointer",
                }}
                key={e.id}
              >
                {e.icon}
              </Box>
            ) : (
              <Badge
                badgeContent={4}
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                {e.icon}
              </Badge>
            )
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
/* 

*/
