import React from 'react';
import styled from 'styled-components';

import CardImg1 from '../../assets/hsilai.jpg';

const Container = styled.div`
  padding: 40px 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  background: url(${props => props.$src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 420px;
`;

const Card = styled.div`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #DDD;
    max-width: 1000px;
    max-height: 450px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;

    @media
    ${(props) => props.theme.device.smTablet},
    ${(props) => props.theme.device.mobile},
    {
        flex-direction: column;
    }
`;

const Content = styled.div``;

const Title = styled.div`
    color: black;
    font-size: 24px;

    ${(props) => props.theme.device.smTablet},
    ${(props) => props.theme.device.mobile},
    {
        vertical-align: top;
    }
`;

const Description = styled.div`
    margin-top: 20px;
    color: black;
    font-size: 16px;
`;

const Introduction = () => {
  return(
    <Container>
      <Card>
        <Image $src={CardImg1} />
        <Content>
          <Title>An Introduction to the Charles Wei-Hsun Fu Foundation</Title>
          <Description>The Charles Wei-Hsun FU FOUNDATION, a tax-exempt foundation, was organized in 1997 in loving memory of the life and work of CHARLES WEI-HSUN FU (1933-1996),. . . .</Description>
        </Content>
      </Card>
    </Container>
  );
};
  
export default Introduction;