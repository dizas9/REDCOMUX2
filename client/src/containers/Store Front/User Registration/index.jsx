import React from "react";

import actions from "../../../actions";

import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "../../../components/Website/Logo";

export default function UserRegistration() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const authenticated = useSelector(
    (state) => state.authentication.authenticated
  );
  const signupFormData = useSelector((state) => state.signup.signupFormData);
  const isSubmitting = useSelector((state) => state.signup.isSubmitting);

  if (authenticated) {
    navigate("/");
  }

  // Handle Form Submittion
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions(dispatch).signUp());
  };

  console.log("Action:", actions(dispatch).signupChange);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column-reverse" },
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              px: 4,
              py: 6,
              backgroundImage:
                "linear-gradient(to bottom, #b5f0ba, #a5b67e, #8c8052, #6a4e32, #412319)",
            }}
          >
            <Logo />

            <Typography component="h1" variant="h5" color={"white"}>
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    name={"firstName"}
                    value={signupFormData.firstName}
                    onChange={(e) => {
                      dispatch(
                        actions(dispatch).signupChange(
                          e.target.name,
                          e.target.value
                        )
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoComplete="family-name"
                    name={"lastName"}
                    value={signupFormData.lastName}
                    onChange={(e) => {
                      dispatch(
                        actions(dispatch).signupChange(
                          e.target.name,
                          e.target.value
                        )
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    name={"email"}
                    value={signupFormData.email}
                    onChange={(e) => {
                      dispatch(
                        actions(dispatch).signupChange(
                          e.target.name,
                          e.target.value
                        )
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    name={"password"}
                    value={signupFormData.password}
                    onChange={(e) => {
                      dispatch(
                        actions(dispatch).signupChange(
                          e.target.name,
                          e.target.value
                        )
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="remember" sx={{ color: "whitesmoke" }} />
                    }
                    label="Remember Me."
                    sx={{ color: "whitesmoke" }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: "whitesmoke",
                      textDecorationColor: "whitesmoke",
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>

        <Container maxWidth="sm">
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              px: 4,
              py: 6,
              backgroundImage:
                "linear-gradient(to bottom, #b5f0ba, #a5b67e, #8c8052, #6a4e32, #412319)",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <Button sx={{ color: "whitesmoke", border: "2px solid" }}>
                <GoogleIcon />
                Login with Google
              </Button>

              <Button sx={{ color: "whitesmoke", border: "2px solid" }}>
                <FacebookIcon />
                Login with Facebook
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
