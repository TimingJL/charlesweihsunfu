import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';

import { PageHeader } from 'src/components/commonStyled';

import ContactUs from './ContactUs';

const Content = styled.div`
  background: #E3F2FD;
  min-height: 100%;
  padding: 40px 0px;
`;

const Contact = () => {
  return (
    <>
      <PageHeader>contact us</PageHeader>
      <Content>
        <Container>
          <ContactUs />
        </Container>
      </Content>
    </>
  );
};

export default Contact;