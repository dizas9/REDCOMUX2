import { Typography, Box } from "@mui/material";

export default function Logo() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          paddingLeft: { xs: "20vw", lg: "2rem" },
        }}
      >
        <Typography
          variant="body1"
          color="yellow"
          fontSize={"1rem"}
          fontWeight={"bold"}
        >
          RED
        </Typography>

        <Typography
          variant="body1"
          color="white"
          fontSize={"2rem"}
          fontWeight={"bold"}
        >
          COM
        </Typography>

        <Typography
          variant="body1"
          color="yellow"
          fontSize={"2rem"}
          fontWeight={"bold"}
        >
          UX
        </Typography>
      </Box>
    </>
  );
}
