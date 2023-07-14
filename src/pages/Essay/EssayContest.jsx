import React from 'react';
import Box from '@mui/material/Box';
import { H2, P, OL, Quot } from 'src/components/commonStyled';

const EssayContest = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <H2>{`The Biennial CHARLES WEI-HSUN FU-ISCP Essay Contest in Asian Philosophy`}</H2>
      <P>{`Three prizes of $2,000 each are offered for the best essays in the area of Asian philosophy, two awards for graduate students of begining faculty (within five years of receipt of the Ph.D.), one each in Chinese and English, as well as one award for a senior scholar. Awardees are required to attend the biennial conference of the International Society for Chinese Philosophy conference to present their winning essays.`}</P>

      <P>{`Decisions will be rendered by separate panels of scholars, drawn from the membership of the International Society for Chinese Philosophy. Funding (up to $1000) also will be provided for the winners to travel to the biennial ISCP conference.`}</P>

      <P>{`The 2007 conference is scheduled for Wuhan, People's Republic of China.`}</P>

      <br />

      <P>
        <b>{`ELIGIBILITY`}</b>
        <br />
        {`The contest is open to`}
      </P>

      <Quot>
        <OL>
          <li>{`Young scholars beginning their careers, such as graduate students or assistant professors within five years of receipt of their Ph.D.), as well as independent scholars of comparable standing. Awardees are required to send a conference submission to ISCP and attend the conference to present the winning essay.`}</li>
          <li>{`Senior scholars in need of funding to attend the conference.`}</li>
        </OL>
      </Quot>

      <br />

      <P>
        <b>{`SUBMISSIONS`}</b>
        <>{`Three copies of the essay (double-spaced, 12 point Times Roman font), should be sent directly to the Fu Foundation office. Previously published papers are not acceptable. SUBMISSIONS SHOULD NOT EXCEED 5000 WORDS OR 2O PAGES (excluding notes and bibliography).`}</>
      </P>

      <br />

      <P>
        <b>{`DEADLINE:`}</b>
        <>{`October 15, 2006`}</>
      </P>

      <br />

      <P>
        <b>{`JUDGING CRITERIA`}</b>
        <>{`The purpose of the contest is to encourage young scholars who show promise of making important contributions to the study and development of Chinese philosophy or Asian philosophy related to Chinese thought. Submissions will be evaluated on the following criteria:`}</>
      </P>

      <Quot>
        <OL>
          <li>{`CREATIVITY: original philosophical insights, such as East-West comparisons.`}</li>
          <li>{`COHERENCE: a cogent, well-argued presentation.`}</li>
          <li>{`SCHOLARSHIP: competence in dealing with philosophical texts and interpretations.`}</li>
        </OL>
      </Quot>
    </Box>
  );
};

export default EssayContest;