import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default function Reports() {
  const reportCategories = [
    {
      title: "Sales Reports",
      description: "Track your sales performance, pipeline, and revenue metrics.",
      icon: "📊",
    },
    {
      title: "Customer Analytics",
      description: "Analyze customer behavior, retention, and satisfaction metrics.",
      icon: "👥",
    },
    {
      title: "Team Performance",
      description: "Monitor team productivity, call logs, and deal progression.",
      icon: "👔",
    },
    {
      title: "Financial Overview",
      description: "Review financial summaries, forecasts, and spending analysis.",
      icon: "💰",
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ color: "#222222", fontWeight: 600 }}>
          Reports
        </Typography>
        <Button
          variant="contained"
          startIcon={<DownloadRoundedIcon />}
          sx={{
            backgroundColor: "#0074E9",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#0062C3",
            },
          }}
        >
          Export Report
        </Button>
      </Stack>

      <Grid container spacing={2} sx={{ mb: 4 }} />
    </Box>
  );
}
