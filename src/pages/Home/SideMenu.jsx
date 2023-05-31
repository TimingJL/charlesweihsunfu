import React from 'react';
import { useTheme } from 'styled-components';

import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { routePathConfig } from '../../route';

const SideMenu = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
      >
        <MenuIcon sx={{ color: theme.color.primary }} />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={handleDrawerClose}
      >
        <List sx={{ width: '300px'}}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate(routePathConfig.home);}}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate(routePathConfig.about);}}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate(routePathConfig.publications);}}>
              <ListItemText primary="Publications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate(routePathConfig.scholarship);}}>
              <ListItemText primary="Scholarship" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate(routePathConfig.essay);}}>
              <ListItemText primary="Essay" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate(routePathConfig.contact);}}>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;
