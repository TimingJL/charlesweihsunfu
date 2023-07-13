import styled from 'styled-components';
import backgroundImg from 'src/assets/SkyBgCompress.jpg';

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const H4 = styled.h4`
  font-size: 16px;
  margin-top: 50px;
  font-weight: 400;
  font-weight: 500;
`;

export const P = styled.p`

`;

export const UL = styled.ul`
  padding-left: 30px;
  li {
    margin: 8px 0px;
  }
`;

export const OL = styled.ol`
  padding-left: 30px;
  li {
    margin: 8px 0px;
  }
`;

export const Quot = styled.div`
  background: rgb(241, 250, 255);
  padding: 24px;
  border-radius: 4px;
  margin: 20px 0px;
`;

export const Divider = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 24px 0px;
`;

export const Subtitle = styled.div`
  color: #757575;
  font-weight: 500;
  font-size: 18px;
`;

export const PageHeader = styled.div`
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
  letter-spacing: 1px;
  font-size: min(max(3.5vw, 30px), 40px);
`;
