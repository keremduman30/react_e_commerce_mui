import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
/* 
const StyledInput = styled("input")({
  backgroundColor: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px 0 0 5px",
  "&:focus": {
    outline: "none",
  },
}); */
const StyledTextField = styled(TextField)({
  // backgroundColor: "white",

  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "5px 0 0  5px",
    outline: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
const StyledButton = styled(Button)(({ theme }) => ({
  padding: "0 10px",
  color: "white",
  backgroundColor: "#333",
  borderRadius: "0 5px 5px 0",
  "&:hover": {
    backgroundColor: "#333",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
    fontSize: "12px",
  },
}));

/* 
MuiOutlinedInput-root


*/

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2879fe",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          width: {
            xs: "100%",
            md: "80%",
            xl: "50%",
          },
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: "30px",
            md: "0",
          },
        }}
      >
        <Typography variant="h6" color={"white"}>
          BE IN TOUCH WIHT US
        </Typography>
        <Stack direction={"row"}>
          {/* <StyledInput /> */}
          <StyledTextField
            size="small"
            variant="outlined"
            /* sx={{
              "& fieldset": {
                border: "none ",
                borderRadius: "25px", // Sınırı kaldırır
              },
            }} */
          />
          <StyledButton>Join US</StyledButton>
        </Stack>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
