import React from 'react';
import Box from '@mui/material/Box';

const EssayContest = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <h3><strong>{`The Biennial CHARLES WEI-HSUN FU-ISCP Essay Contest in Asian Philosophy`}</strong></h3>
      <div>{`Three prizes of $2,000 each are offered for the best essays in the area of Asian philosophy, two awards for graduate students of begining faculty (within five years of receipt of the Ph.D.), one each in Chinese and English, as well as one award for a senior scholar. Awardees are required to attend the biennial conference of the International Society for Chinese Philosophy conference to present their winning essays.`}</div>

      <div>{`Decisions will be rendered by separate panels of scholars, drawn from the membership of the International Society for Chinese Philosophy. Funding (up to $1000) also will be provided for the winners to travel to the biennial ISCP conference.`}</div>

      <div>{`The 2007 conference is scheduled for Wuhan, People's Republic of China.`}</div>

      <br />

      <div>
        <div><strong>{`ELIGIBILITY`}</strong></div>
        <div>{`The contest is open to`}</div>
      </div>

      <div>
        <blockquote>
          <ol>
            <li>{`Young scholars beginning their careers, such as graduate students or assistant professors within five years of receipt of their Ph.D.), as well as independent scholars of comparable standing. Awardees are required to send a conference submission to ISCP and attend the conference to present the winning essay.`}</li>
            <li>{`Senior scholars in need of funding to attend the conference.`}</li>
          </ol>
        </blockquote>
      </div>

      <br />

      <div>
        <div><strong>{`SUBMISSIONS`}</strong></div>
        <div>{`Three copies of the essay (double-spaced, 12 point Times Roman font), should be sent directly to the Fu Foundation office. Previously published papers are not acceptable. SUBMISSIONS SHOULD NOT EXCEED 5000 WORDS OR 2O PAGES (excluding notes and bibliography).`}</div>
      </div>

      <br />

      <div><div><strong>{`DEADLINE:`}</strong></div>{`October 15, 2006`}</div>

      <br />
      
      <div>
        <div><strong>{`JUDGING CRITERIA`}</strong></div>
        <div>{`The purpose of the contest is to encourage young scholars who show promise of making important contributions to the study and development of Chinese philosophy or Asian philosophy related to Chinese thought. Submissions will be evaluated on the following criteria:`}</div>
      </div>

      <div>
        <blockquote>
          <ol>
            <li>{`CREATIVITY: original philosophical insights, such as East-West comparisons.`}</li>
            <li>{`COHERENCE: a cogent, well-argued presentation.`}</li>
            <li>{`SCHOLARSHIP: competence in dealing with philosophical texts and interpretations.`}</li>
          </ol>
        </blockquote>
      </div>
    </Box>
  );
};

export default EssayContest;