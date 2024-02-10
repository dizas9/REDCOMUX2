import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  const jumpto = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {" "}
            {/* Add item and specify number of columns for small and medium screens */}
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={jumpto}>
              Back Home
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            {/* Add item and specify number of columns for small and medium screens */}
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
