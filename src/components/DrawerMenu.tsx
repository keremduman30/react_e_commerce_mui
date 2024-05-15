import {
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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

const StyledTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: `transform ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  },
}));

type prop = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const DrawerMenu = ({ open, setOpen }: prop) => {
  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      anchor="right"
      sx={{ position: "relative" }}
    >
      <IconButton
        aria-label="close"
        sx={{
          color: "black",
          position: "absolute",
          top: "10px",
          right: "0px",
          height: "80px",
          width: "80px",
        }}
        onClick={() => setOpen(false)}
      >
        <CloseOutlinedIcon />
      </IconButton>
      <Stack
        gap={5}
        sx={{
          width: "250px",
          display: "flex",
          height: "100%",
          justifyContent: "center ",
          alignItems: "center ",
        }}
      >
        {navlink.map((e) => (
          <Link
            href={e.link}
            key={crypto.randomUUID()}
            sx={{ textDecoration: "none", color: "black", textAlign: "center" }}
          >
            <StyledTypography key={e.link}>{e.name}</StyledTypography>
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
};

export default DrawerMenu;
