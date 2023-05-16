import React from 'react';
import styled from 'styled-components/macro';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { PRIMARY_COLOR } from '../../theme/color';
import LogoPath from '../../assets/FuLogo.jpg';
import SideMenu from './SideMenu';

const Image = styled.img`
    object-fit: contain;
    border-radius: 4px;
    margin-right: 8px;
`;

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: '#FFF' }}>
        <Toolbar>
          <Image src={LogoPath} width={32} height={32} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: PRIMARY_COLOR }}>
            傅偉勳基金會
          </Typography>
          <SideMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
