import { Box, Typography, styled } from "@mui/material";
type NavType = {
  link: string;
  name: string;
};
const navlink: NavType[] = [
  { link: "/", name: "HomePage" },
  { link: "#about", name: "About" },
  { link: "#contact", name: "Contact" },
  { link: "#stores", name: "Stores" },
  { link: "/products/men", name: "Men" },
  { link: "/products/women", name: "Women" },
  { link: "/products/children", name: "Children" },
];
const StyledBox = styled(Box)({
  position: "absolute",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)", // Kart gölgesi
  backgroundColor: "#ffffff", // Beyaz arka plan
  top: "60px",
  right: "0px",
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  zIndex: 9999,
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: `transform ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  },
}));

const SmallMenu = () => {
  return (
    <StyledBox>
      {navlink.map((e) => (
        <a href={e.link} key={crypto.randomUUID()}>
          <StyledTypography key={e.link}>{e.name}</StyledTypography>
        </a>
      ))}
    </StyledBox>
  );
};

export default SmallMenu;
