import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { footerLinks } from "../services/fake_data";

const StyledTypography = styled(Typography)({
  cursor: "pointer",
  color: "gray",
  textAlign: "justify",
  fontSize: "14px",
  "&:hover": {
    color: "#2D3748",
  },
});

const Footer = () => {
  return (
    <Box
      sx={{
        margin: {
          xs: "20px",
          md: "100px 180px 0px 200px",
        },
      }}
    >
      <Grid container spacing={5} sx={{}}>
        {footerLinks.map((e, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={e.title}>
            <Typography
              variant="h6"
              mb={1}
              fontSize={18}
              fontWeight={500}
              color={"#555"}
              textAlign={"justify"}
            >
              {e.title}
            </Typography>
            <Stack spacing={1}>
              {e.links &&
                e.links.map((e) => (
                  <Link to={`/#${e}`} key={e}>
                    {i < 2 ? (
                      <StyledTypography>{e}</StyledTypography>
                    ) : (
                      <Typography
                        color={"gray"}
                        fontSize={14}
                        textAlign={"justify"}
                      >
                        {e}
                      </Typography>
                    )}
                  </Link>
                ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            width: "100%",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            // justifyContent={"space-between"}
            sx={{
              marginTop: "20px",
              width: {
                xs: "100%",
              },
              justifyContent: {
                xs: "space-between",
                sm: "center",
                lg: "start",
              },
            }}
          >
            <Typography color={"#2879fe"} fontWeight={"bold"} fontSize={24}>
              DumanStore
            </Typography>
            <Typography ml={2} fontSize={12} color={"gray"}>
              © Copyright 2023.All Rights Reserved
            </Typography>
          </Stack>
          <img
            src="/img/payment.png"
            alt=""
            height={50}
            style={{ width: "80%" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
