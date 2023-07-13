import React from 'react';
import styled, { useTheme } from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import ChineseThought from './ChineseThought';
import Fiu from './Fiu';
import SDSUpbt from './SDSUpbt';
import Rowan from './Rowan';
import SDSUWomen from './SDSUWomen';
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

const Scholarship = () => {
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
      <PageHeader>scholarship</PageHeader>
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
          <Tab value={0} label="CHINESE THOUGHT and CULTURE"  />
          <Tab value={1} label="FIU" />
          <Tab value={2} label="SDSU PHI BETA DELTA" />
          <Tab value={3} label="ROWAN" />
          <Tab value={4} label="SDSU WOMEN" />
        </Tabs>
      </Box>
      <Content>
        <Container>
          <Stack spacing={2}>
            {tabIndex === 0 && <ChineseThought />}
            {tabIndex === 1 && <Fiu />}
            {tabIndex === 2 && <SDSUpbt />}
            {tabIndex === 3 && <Rowan />}
            {tabIndex === 4 && <SDSUWomen />}
          </Stack>
        </Container>
      </Content>
    </>
  ); 
};

export default Scholarship;