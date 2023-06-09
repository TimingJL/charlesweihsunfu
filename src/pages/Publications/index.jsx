import React from 'react';
import styled, { useTheme } from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { PageHeader } from 'src/components/commonStyled';
import Collected from './Collected';
import Hermeneutics from './Hermeneutics';
import GreatLearning from './GreatLearning';
import Morality from './Morality';

const Content = styled.div`
  background: #E3F2FD;
  min-height: 100%;
  padding: 40px 0px;
`;

const Publications = () => {
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
      <PageHeader>publications</PageHeader>
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
          <Tab value={0} label="Collected" />
          <Tab value={1} label="Hermeneutics" />
          <Tab value={2} label="Great-learning" />
          <Tab value={3} label="Morality" />
        </Tabs>
      </Box>
      <Content>
        <Container>
          <Stack spacing={2}>
            {tabIndex === 0 && <Collected />}
            {tabIndex === 1 && <Hermeneutics />}
            {tabIndex === 2 && <GreatLearning />}
            {tabIndex === 3 && <Morality />}
          </Stack>
        </Container>
      </Content>
    </>
  );
};

export default Publications;