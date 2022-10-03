import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 152,
  height: 54,
  padding: 7,
  display: "flex",
  alignItems: "center",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(3px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(105px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgba(1, 196, 20, 1)" class="bi bi-power" viewBox="0 0 16 16"> <path d="M7.5 1v7h1V1h-1z"/> <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/> </svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(195, 24, 24, 1)"
            : "rgba(1, 196, 20, 1)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    width: 42,
    height: 42,
    marginTop: 5,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgba(195, 24, 24, 1)" class="bi bi-power" viewBox="0 0 16 16"> <path d="M7.5 1v7h1V1h-1z"/> <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/> </svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(1, 196, 20, 1)"
        : "rgba(195, 24, 24, 1)",
    borderRadius: 50,
  },
}));


export default function ToggleBtn({ label, isDefaultChecked }) {
  const [loading, setLoading] = useState(isDefaultChecked ? false : true);

  return (
    <Box>
      <FormControlLabel
        sx={{
          display: "block",
          "& .MuiFormControlLabel-label": {
            color: "white",
            position:"relative",
            top:"-39px",
            left:`${loading?"30px":"50px"}`,
          },
        }}
        label={`${loading?"Activate":"Deactivate"}`}
        control={
          <MaterialUISwitch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name={label}
            color="primary"
            inputProps={{ "aria-label": "Switch A" }}
          >
            ;
          </MaterialUISwitch>
        }
      />
    </Box>
  );
}
