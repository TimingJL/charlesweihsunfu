import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { H2, P } from 'src/components/commonStyled';

import apidaNewsImgPath from "src/assets/centerOfAsian/APIDA_news_Dean_and_Virginia.jpeg";
import capsNameImgPath from "src/assets/centerOfAsian/CAPS_Name_and_photo.jpeg";
import capsPlaque from "src/assets/centerOfAsian/CAPS_plaque.png";

const Card = styled.div`
  background: white;
  display: flex;
  gap: 20px;
  img {
    width: 300px;
  }

  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column;
    gap: 12px;
    img {
      width: 100%;
    }
  }
`;

const CenterForAsian = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <H2>The Charles Wei-hsun Fu Center of Asian &  Pacific Studies is now a reality.</H2>
      <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "36px" }}>
        <Card>
          <img src={apidaNewsImgPath} alt="" style={{ flexShrink: 0, height: "100%" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div>The Charles Wei-hsun Fu Center of Asian & Pacific Studies is now a reality. The Charles Wei-hsun Fu Center of Asian &  Pacific Studies is now a reality.  It is wonderful to think of all the students who will benefit in the future!</div>
            <div>Photos attached of the ceremony with the college Dean and Center Director.</div>
          </div>
        </Card>
        <Card>
          <img src={capsNameImgPath} alt="" style={{ flexShrink: 0, height: "100%" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div>It is wonderful to think of all the students who will benefit in the future!</div>
            <P>
              CHARLES WEI-HSUN FU (1933-1996), scholar and teacher extraordinaire, was a native of
              Taiwan. He graduated from National Taiwan University in Philosophy, where he taught for
              several years. He continued his studies at UC Berkeley, the University of Hawaii and the
              University of Illinois, where he earned a Ph.D. in Philosophy. 
            </P>
            <P>
              After 25 years as a faculty member at Temple University he took early retirement to serve as a
              founding member of Fo Guang University in Taiwan, directing the Institute of Life and Death
              Studies. Tragically, he passed away at the height of his career, leaving behind a rich legacy of
              publications in both Chinese and English, from scholarly tomes to popular essays. He is best
              known for his groundbreaking works, including The Life of Learning and the Learning of Life: My
              Philosophical Development (1994) and Dignified Death and Dignified Life: From Thanatological
              Psychiatry to the Post-traditional Learning of Life and Death (1993).
            </P>
            <P>
              Dr. Fu was instrumental in bringing the work of other authors to the reading public through his
              nine series of Chinese and English language books, ranging from Asian Thought and Culture to
              Modern Buddhism, Current Global Trends, and Life-and-Death Studies. Following the path
              blazed by Dr. Fu, the Foundation seeks to support the unfolding of “Cultural China” and foster
              philosophical dialogue among students and upcoming generations of scholars in Asian thought.
              In tandem, the Foundation aims to support SDSU students of Asian Studies who are looking to
              learn more and get connected to the Asia-Pacific.
            </P>
          </div>
        </Card>
        <Card>
          <img src={capsPlaque} alt="" style={{ flexShrink: 0, height: "100%" }} />
          <div>
            We also have a new endowed Fu Scholarship at Rowan University.
          </div>
        </Card>
      </div>
    </Box>
  );
};

export default CenterForAsian;
