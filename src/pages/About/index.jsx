import React from 'react';
import styled, { useTheme } from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Introduction from './Introduction';
import TheBirth from './TheBirth';
import Remembering from './Remembering';
import Organizations from './Organizations';
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

const Content = styled.div`
  background: #E3F2FD;
  min-height: 100%;
  padding: 40px 0px;
`;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.device.mobile, { noSsr: true });
  const isSmTablet = useMediaQuery(theme.device.smTablet, { noSsr: true });
  const isTablet = useMediaQuery(theme.device.tablet, { noSsr: true });
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <PageHeader>about</PageHeader>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
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
      <Content>
        <Container>
          <Stack spacing={2}>
            {tabIndex === 0 && <Introduction />}
            {tabIndex === 1 && <TheBirth />}
            {tabIndex === 2 && <Remembering />}
            {tabIndex === 3 && <Organizations />}
          </Stack>
        </Container>
      </Content>
    </>
  ); 
};

export default About;