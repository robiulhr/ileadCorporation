import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AvatarImage from "../../../assets/img/admin/robiulhr01 Professional Web Designer and Developer.png";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function AccountProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <img src={AvatarImage} alt="user profile" />
            </Avatar>
            <Typography sx={{ color: "white", margin: "0px 10px" }}>
              Robiul H. <ArrowDropDownIcon />
            </Typography>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            background: "rgba(43, 119, 255, 0.3)",
            borderRadius: "20px",
            border: "3px solid rgba(43, 119, 255, 0.6)",
            zIndex: "11",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "rgba(43, 119, 255, 0.6)",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to={"/admin/profile"}>
          <MenuItem
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              padding: "10px 15px",
              minWidth: "160px",
            }}
          >
            <Avatar /> Profile
          </MenuItem>
        </Link>
        <MenuItem
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            padding: "10px 15px",
            minWidth: "160px",
          }}
        >
          <ListItemIcon sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            padding: "10px 15px",
            minWidth: "160px",
          }}
        >
          <ListItemIcon sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
