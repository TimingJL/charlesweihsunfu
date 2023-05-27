import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import CardImg1 from '../../assets/hsilai.jpg';
import SDSU_Img from '../../assets/SDSU_Arts_&_Letters_New_Building.jpg';

const Image = styled.div`
  background: url(${props => props.$src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const Card = styled.div`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #DDD;

    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 24px;

    @media
    ${(props) => props.theme.device.smTablet},
    ${(props) => props.theme.device.mobile},
    {
      grid-template-columns: 1fr;
      grid-template-rows: 300px 1fr;
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

const buttonSX = { width: '100px', marginTop: 2, boxShadow: 'none' };

const Introduction = () => {
  return(
    <Container maxWidth="md" sx={{ marginTop: '100px', marginBottom: '100px' }}>
      <Stack spacing={4}>
        <Card>
          <Image $src={CardImg1} />
          <Content>
            <Title>An Introduction to the Charles Wei-Hsun Fu Foundation</Title>
            <Description>The Charles Wei-Hsun FU FOUNDATION, a tax-exempt foundation, was organized in 1997 in loving memory of the life and work of CHARLES WEI-HSUN FU (1933-1996),. . . .</Description>
            <Stack spacing={4} alignItems="flex-end">
              <Button variant="contained" sx={buttonSX}>More</Button>
            </Stack>
          </Content>
        </Card>
        <Card>
          <Image $src={SDSU_Img} />
          <Content>
            <Title>The Charles Wei-Hsun Fu Scholarship in Chinese Thought & Culture</Title>
            <Description>beginning in Fall, 2005 in cooperation with the SDSU College of Arts & Letters and the China Studies Institute, . . .</Description>
            <Stack spacing={4} alignItems="flex-end">
              <Button variant="contained" sx={buttonSX}>More</Button>
            </Stack>
          </Content>
        </Card>
      </Stack>
    </Container>
  );
};

export default Introduction;