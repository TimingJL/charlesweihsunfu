import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background: #34495e;
  padding: 40px 20px;
  color: #fff;
  text-align: center;
  @media
    ${(props) => props.theme.device.smTablet},
    ${(props) => props.theme.device.mobile},
    {
      text-align: left;
    }
`;

const Footer = () => <Container>Copyright © The Charles Wei-Hsun Fu Foundation - All Rights Reserved.</Container>;

export default Footer;
