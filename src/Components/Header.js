import React, { useState, useEffect } from "react";
import Greeting from '../Greeting';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import Logout from '@mui/icons-material/Logout';
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';
import { Navbar, NavItem, NavLink } from 'reactstrap';


export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar className="nav">
  
        <h1>MEET'N'EAT</h1>

    <React.Fragment>
    <NavItem>
      <Box className="menu-box" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',
      padding: '15px', justifyContent: 'center', fontFamily: 'Quicksand' }}>
        <Typography sx={{ minWidth: 100, textSizeAdjust: 'small', fontFamily: 'Quicksand' }}>
        <Greeting />
        </Typography>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ fontFamily: 'Quicksand', backgroundColor: 'magenta' , width: 32, height: 32}}>M</Avatar>
          </IconButton>
        </Tooltip>
        </Box>
        </NavItem>

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
            filter: 'drop-shadow(0px 2px 8px #ff86fb)',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      <div className="drop-down">
        {/* <MenuItem >
          <SettingsTwoToneIcon /> Settings
        </MenuItem>
        <Divider /> */} 
        <MenuItem>
          <ForwardToInboxTwoToneIcon /><NavLink href="/meets">Meets</NavLink> 
        </MenuItem>
        <Divider />
        <MenuItem>
          <AutoAwesomeTwoToneIcon /><NavLink href="/favorites">
          View Favorites
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <LunchDiningTwoToneIcon /><NavLink href="/search">
          Find Eats
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Logout /><NavLink href="/home">
          Log Out
          </NavLink>
        </MenuItem>
        </div>
      </Menu>
    
    </React.Fragment>
    
    </Navbar>
  );
}