import React from "react";

import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Toolbar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function SideMenu() {
  return (
    <>
      <Box
        sx={{
          width: "15vw",
          height: "60vh",
          marginTop: "10vh",
          position: "fixed",
          display: { lg: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          right: "5vw",
        }}
      >
        <Accordion sx={{ width: "90%", height: "fit-content" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>User Management</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Button>
                <PeopleIcon />
                Users
              </Button>

              <Button>
                <ModeEditIcon />
                Edit User
              </Button>

              <Button>
                <PersonAddIcon />
                Add User
              </Button>
            </Toolbar>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "90%", height: "fit-content" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Store Management</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button>Users</Button>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
