import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

type NavTypeFooter = {
  title: string;
  links?: string[];
};

const footerLinks: NavTypeFooter[] = [
  {
    title: "Categories",
    links: ["Women", "Men", "Shoes", "Accessories", "New Arrivals"],
  },
  {
    title: "Links",
    links: ["FAQ", "Pages", "Stores", "Compare", "Cookies"],
  },
  {
    title: "About",
    links: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi possimus sunt saepe autem rerum praesentium quod excepturi! Earum fugit, quae distinctio ab explicabo nesciunt animi, nisi recusandae optio, minima atque.",
    ],
  },
  {
    title: "Contack",
    links: [
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi possimus sunt saepe autem rerum praesentium quod excepturi! Earum fugit, quae distinctio ab explicabo nesciunt animi, nisi recusandae optio, minima atque.",
    ],
  },
];
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
    <Box sx={{ margin: "100px 180px 0px 200px" }}>
      <Grid container spacing={5}>
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
        <Stack direction={"row"} alignItems={"center"}>
          <Typography color={"#2879fe"} fontWeight={"bold"} fontSize={24}>
            DumanStore
          </Typography>
          <Typography ml={2} fontSize={12} color={"gray"}>
            © Copyright 2023.All Rights Reserved
          </Typography>
        </Stack>
        <img src="/img/payment.png" alt="" height={50} />
      </Stack>
    </Box>
  );
};

export default Footer;
