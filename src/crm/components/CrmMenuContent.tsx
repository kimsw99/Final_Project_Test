import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: "/" },
  { text: "Reports", icon: <AssessmentRoundedIcon />, path: "/reports" },
  { text: "Plan", icon: <SmartToyRoundedIcon />, path: "/plan" },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon />, path: "/settings" },
  { text: "Help & Support", icon: <HelpOutlineRoundedIcon />, path: "/help" },
];

export default function CrmMenuContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block", mb: 0.5 }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 1,
                backgroundColor: location.pathname === item.path ? "#E6F0FF" : "transparent",
                color: location.pathname === item.path ? "#0074E9" : "#222222",
                "&:hover": {
                  backgroundColor: "#F5F7FA",
                },
                "& .MuiListItemIcon-root": {
                  color: "inherit",
                  minWidth: 40,
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
        <Divider sx={{ my: 1, borderColor: "#F0F2F5" }} />
        <List dense>
          {secondaryListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block", mb: 0.5 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 1,
                  backgroundColor: location.pathname === item.path ? "#E6F0FF" : "transparent",
                  color: location.pathname === item.path ? "#0074E9" : "#222222",
                  "&:hover": {
                    backgroundColor: "#F5F7FA",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "inherit",
                    minWidth: 40,
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  );
}
