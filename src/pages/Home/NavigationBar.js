import React from 'react';
import styled from 'styled-components/macro';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoPath from '../../assets/FuLogo.jpg';

const Image = styled.img`
    border-radius: 4px;
    margin-right: 8px;
`;

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image src={LogoPath} width={32} height={32}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            傅偉勳基金會
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
