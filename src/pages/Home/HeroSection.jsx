import React from 'react';
import styled from 'styled-components';

import BackgroundPath from '../../assets/SkyBgCompress.jpg';
import AvatarPath from '../../assets/avatar.jpeg';

const Background = styled.div`
    background: url(${BackgroundPath});
    max-width: 100vw;
    min-height: calc(100vh - 64px);
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 0;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`;

const Mask = styled.div`
    background-color: #a9a9a9;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 64px);
    position: absolute;
    z-index: -1;
    overflow: hidden;
`;

const Avatar = styled.img`
    border-radius: 100%;
    margin-top: 200px;
    border: 6px solid #FFF;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    @media
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.smTablet},
    ${(props) => props.theme.device.mobile},
    {
        margin-top: 100px;
    }
`;

const H2 = styled.h2`
    color: white;
    font-size: 40px;
    margin: 12px 20px;
    text-align: center;
    text-shadow: 1px 1px 2px #111;
    @media
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.smTablet},
    {
        font-size: 32px;
    }
    @media
    ${(props) => props.theme.device.mobile},
    {
        font-size: 24px;
    }
`;

const Description = styled.p`
    color: white;
    font-size: 24px;
    max-width: 700px;
    margin: 12px 20px 60px;
    text-align: center;
    text-shadow: 1px 1px 2px #111;
    @media
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.smTablet},
    {
        font-size: 18px;
    }
    @media
    ${(props) => props.theme.device.mobile},
    {
        font-size: 16px;
    }
`;

const HeroSection = () => {
  return(
    <Background>
      <Mask />
      <Avatar src={AvatarPath} width={200} height={200} />
      <H2>The Charles Wei-Hsun Fu Foundation</H2>
      <Description>To extend the search for knowledge & wisdom, promote the international efforts of philosophers, and encourage ever deeper explorations of Asian Thought and Culture.
      </Description>
    </Background>
  );
};

export default HeroSection;