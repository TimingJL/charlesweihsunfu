import React from 'react';
import styled, { useTheme } from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { PageHeader } from 'src/components/commonStyled';
import EssayContest from './EssayContest';
import PastISCPAwardess from './PastISCPAwardess';
import ApplicationForm from './ApplicationForm.jsx';

const Content = styled.div`
  background: #E3F2FD;
  min-height: 100%;
  padding: 40px 0px;
`;

const Essay = () => {
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
      <PageHeader>essay</PageHeader>
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
          <Tab value={0} label="Essay Contest" />
          <Tab value={1} label="PAST ISCP AWARDEES" />
          <Tab value={2} label="APPLICATION FORM" />
        </Tabs>
      </Box>
      <Content>
        <Container>
          <Stack spacing={2}>
            {tabIndex === 0 && <EssayContest />}
            {tabIndex === 1 && <PastISCPAwardess />}
            {tabIndex === 2 && <ApplicationForm />}
          </Stack>
        </Container>
      </Content>
    </>
  );
};

export default Essay;