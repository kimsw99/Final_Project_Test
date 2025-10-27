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

      <Typography sx={{ color: "#666666", mb: 4 }}>
        Access comprehensive analytics and insights about your business performance.
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {reportCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F0F2F5",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <CardContent>
                <Stack spacing={1.5}>
                  <Box sx={{ fontSize: "2rem" }}>{category.icon}</Box>
                  <Typography variant="h6" sx={{ color: "#222222", fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                  <Typography sx={{ color: "#666666" }}>
                    {category.description}
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      color: "#0074E9",
                      textTransform: "none",
                      justifyContent: "flex-start",
                      "&:hover": {
                        backgroundColor: "rgba(0, 116, 233, 0.08)",
                      },
                    }}
                  >
                    View Report →
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card
        sx={{
          backgroundColor: "#FFFFFF",
          borderColor: "#F0F2F5",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          border: "none",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ color: "#222222", fontWeight: 600, mb: 2 }}>
            Recent Reports
          </Typography>
          <Typography sx={{ color: "#666666" }}>
            No recent reports generated yet. Create your first report using the categories above.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
