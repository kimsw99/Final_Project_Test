import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";

export default function CrmSelectCompany() {
  const [company, setCompany] = React.useState("acme");

  const handleChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value as string);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth size="small">
        <Select
          labelId="company-select-label"
          id="company-select"
          value={company}
          onChange={handleChange}
          sx={{
            borderRadius: 2,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            transition: "all 0.2s ease",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused": {
              boxShadow: "0 2px 8px rgba(0, 116, 233, 0.1)",
              borderColor: "#0074E9",
            },
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#222222",
              fontWeight: 500,
              py: 1.2,
            },
          }}
        >
          <MenuItem value="acme">
            <BusinessRoundedIcon
              fontSize="small"
              sx={{ color: "#0074E9" }}
            />
            Acme Corporation
          </MenuItem>
          <MenuItem value="globex">
            <BusinessRoundedIcon
              fontSize="small"
              sx={{ color: "#3399FF" }}
            />
            Globex Inc.
          </MenuItem>
          <MenuItem value="initech">
            <BusinessRoundedIcon
              fontSize="small"
              sx={{ color: "#66B3FF" }}
            />
            Initech Technologies
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
