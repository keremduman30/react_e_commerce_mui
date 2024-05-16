import { Box, Stack, TextField, Typography, styled } from "@mui/material";
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
  backgroundColor: "white",
  borderRadius: "5px 0 0 5px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
const StyledButton = styled(Box)(({ theme }) => ({
  padding: "10px",
  color: "white",
  backgroundColor: "#333",
  borderRadius: "0 5px 5px 0",

  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
    padding: "0 6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

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
            sx={{
              "& input:focus": {
                outline: "none",
              },
            }}
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
