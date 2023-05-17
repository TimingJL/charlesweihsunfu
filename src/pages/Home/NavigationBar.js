import React from 'react';
import styled, { useTheme } from 'styled-components/macro';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LogoPath from '../../assets/FuLogo.jpg';
import SideMenu from './SideMenu';

const Image = styled.img`
    object-fit: contain;
    border-radius: 4px;
    margin-right: 8px;
`;

const NavigationBar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: '#FFF' }}>
        <Toolbar>
          <Image src={LogoPath} width={44} height={44} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: theme.color.primary, fontWeight: '700' }}>
            傅偉勳基金會
          </Typography>
          <SideMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
