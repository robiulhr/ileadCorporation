import React,{useState} from 'react';
import Box from '@mui/material/Box';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

export default function NotificationMenu() {
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
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <NotificationsNoneIcon sx={{ width: 32, height: 32,color:"white" }}>M</NotificationsNoneIcon>
            <span className='w-[8px] h-[8px] relative top-[-15px] left-[-12px] rounded-full bg-green-300'></span>
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
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          background:"rgba(43, 119, 255, 0.3)",
          borderRadius:"20px",
          border:"1px solid rgba(43, 119, 255, 0.6)",
          zIndex:"11",
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'rgba(43, 119, 255, 0.6)',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Typography sx={{color:"rgba(255, 255, 255, 0.7)"}}>{"Hello world here is the notification. Please have a look."}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Typography sx={{color:"rgba(255, 255, 255, 0.7)"}}>{"Hello world here is the notification. Please have a look."}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Typography sx={{color:"rgba(255, 255, 255, 0.7)"}}>{"Hello world here is the notification. Please have a look."}</Typography>
        </MenuItem>
        <MenuItem>
        <Typography sx={{color:"rgba(255, 255, 255, 0.7)"}}>{"Hello world here is the notification. Please have a look."}</Typography>

        </MenuItem>
        <MenuItem>
        <Typography sx={{color:"rgba(255, 255, 255, 0.7)"}}>{"Hello world here is the notification. Please have a look."}</Typography>

        </MenuItem>
      </Menu>
    </>
  );
}