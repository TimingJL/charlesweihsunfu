import React from 'react';
import styled from 'styled-components/macro';

import BackgroundPath from '../../assets/SkyBgCompress.jpg';
import AvatarPath from '../../assets/avatar.jpeg';

const Background = styled.div`
    background: url(${BackgroundPath});
    width: 100vw;
    min-height: calc(100vh - 64px);
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 0;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`;

const Mask = styled.div`
    background-color: white;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
`;

const Avatar = styled.img`
    border-radius: 100%;
    margin-right: 8px;
    margin-top: 200px;
    border: 6px solid white;
`;

const H2 = styled.h2`
    color: white;
    font-size: 40px;
    margin: 12px 20px;
    text-align: center;
    text-shadow: 1px 1px 2px #111;
    @media screen and (max-width: 900px) {
        font-size: 32px;
    }
    @media screen and (max-width: 486px) {
        font-size: 24px;
    }
`;

const Description = styled.p`
    color: white;
    font-size: 24px;
    max-width: 700px;
    margin: 12px 20px;
    text-align: center;
    text-shadow: 1px 1px 2px #111;
    @media screen and (max-width: 900px) {
        font-size: 18px;
    }
    @media screen and (max-width: 486px) {
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