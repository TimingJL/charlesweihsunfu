import React from 'react';
import styled, { useTheme } from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import backgroundImg from '../../assets/SkyBgCompress.jpg';

const PageHeader = styled.div`
  background: url(${backgroundImg});
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-family: 'Playfair Display';
  font-weight: 900;
  letter-spacing: 4px;
`;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.device.mobile, { noSsr: true });
  const isSmTablet = useMediaQuery(theme.device.smTablet, { noSsr: true });
  const isTablet = useMediaQuery(theme.device.tablet, { noSsr: true });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <PageHeader>about</PageHeader>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          {...(isMobile || isSmTablet || isTablet ? {
            variant: 'scrollable',
            scrollButtons: true,
            allowScrollButtonsMobile: true,
          } : {
            centered: true
          })}
        >
          <Tab value={0} label="Introduction"  />
          <Tab value={1} label="The Birth" />
          <Tab value={2} label="Remembering" />
          <Tab value={3} label="Organizations Supported" />
        </Tabs>
      </Box>
    </>
  );
};

export default About;