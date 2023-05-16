import React from 'react';

import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import { PRIMARY_COLOR } from '../../theme/color';

const SideMenu = () => {
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
        <MenuIcon sx={{ color: PRIMARY_COLOR }} />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={handleDrawerClose}
      >
        <div style={{ width: 300 }}>
          side menu
        </div>
      </Drawer>
    </>
  );
};

export default SideMenu;
