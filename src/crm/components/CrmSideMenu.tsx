import * as React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import CrmSelectCompany from "./CrmSelectCompany";
import CrmMenuContent from "./CrmMenuContent";
import CrmOptionsMenu from "./CrmOptionsMenu";
import SvgIcon from "@mui/material/SvgIcon";

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 80;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidthExpanded,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidthExpanded,
    boxSizing: "border-box",
    transition: "width 0.3s ease",
  },
  "&.collapsed": {
    [`& .${drawerClasses.paper}`]: {
      width: drawerWidthCollapsed,
    },
  },
}));

export default function CrmSideMenu() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        width: isCollapsed ? drawerWidthCollapsed : drawerWidthExpanded,
        transition: "width 0.3s ease",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #F0F2F5",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Header with collapse button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "calc(var(--template-frame-height, 0px) + 4px)",
            p: 1.5,
            minHeight: 72,
          }}
        >
          {!isCollapsed && (
            <Box sx={{ flex: 1 }}>
              <CrmSelectCompany />
            </Box>
          )}
          <IconButton
            onClick={toggleSidebar}
            size="small"
            sx={{
              color: "#0074E9",
              "&:hover": {
                backgroundColor: "#E6F0FF",
              },
              transition: "all 0.2s ease",
            }}
          >
            <ChevronLeftRoundedIcon
              sx={{
                transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </IconButton>
        </Box>

        {!isCollapsed && <Divider sx={{ borderColor: "#F0F2F5" }} />}

        {/* Menu content */}
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <CrmMenuContent isCollapsed={isCollapsed} />
        </Box>

        {/* User profile footer */}
        {!isCollapsed && <Divider sx={{ borderColor: "#F0F2F5" }} />}
        <Stack
          direction={isCollapsed ? "column" : "row"}
          sx={{
            p: isCollapsed ? 1 : 2,
            gap: 1,
            alignItems: "center",
            borderTop: "1px solid #F0F2F5",
            justifyContent: isCollapsed ? "center" : "flex-start",
          }}
        >
          <Avatar
            sizes="small"
            alt="Alex Thompson"
            src="/static/images/avatar/7.jpg"
            sx={{ width: 36, height: 36, bgcolor: "#0074E9", color: "#FFFFFF" }}
          >
            AT
          </Avatar>
          {!isCollapsed && (
            <>
              <Box sx={{ mr: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, lineHeight: "16px", color: "#222222" }}
                >
                  Alex Thompson
                </Typography>
                <Typography variant="caption" sx={{ color: "#999999" }}>
                  alex@acmecrm.com
                </Typography>
              </Box>
              <CrmOptionsMenu />
            </>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
