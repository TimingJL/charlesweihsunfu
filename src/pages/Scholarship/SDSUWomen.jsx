import React from 'react';
import Box from '@mui/material/Box';
import { H2, UL, AwardCard } from 'src/components/commonStyled';

const awards = [
  {
    title: '2004-05 Graduate Student, Scholarship Recipient',
    winners: [
      {
        name: 'Doria Bareket',
        description: `After I finish my master's degree at SDSU, I will return to China and continue my career at a women's magazine. I want to found a first rank women's magazine in China,a professional magazine, and make it a voice for Chinese women. I will establish an academic research center based on the women's studies magazine. I will support cooperation between scholars of Women's Studies in China and western countries.I believe in this way I can do much to contribute to Chinese Women's Studies.`,
      }
    ]
  },
  {
    title: '2003 Graduate Student, Scholarship Recipient',
    winners: [
      {
        name: 'LIHONG SHI',
        description: `M.A. in Women's Studies, SDSU, May 2003. A past recipient of a Fu Foundation Scholarship, she will begin work on Ph.D. in Anthropology at Tulane University in Fall 2003`,
      }
    ]
  },
  {
    title: '2002-03 Graduate Student, Scholarship Recipient',
    winners: [
      {
        name: 'LEI PING',
      }
    ]
  },
];

const SDSUWomen = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2>{`FU FOUNDATION GRADUATE SCHOLARSHIPS`}<br />{`SDSU WOMEN'S STUDIES DEPARTMENT`}</H2>
      </div>
      {
        awards.map((item) => (
          <AwardCard key={item.title}>
            <div className="award__title">{item.title}</div>
            <div className="award__description">{item.description}</div>
            {item.winners.length > 0 &&
              <UL>
                {item.winners.map((winner, index) => (
                  <li key={`${winner.name}__${index}`} className="award__winner-name">
                    <b>{winner.name}</b>
                    <div>{winner.description}</div>
                  </li>
                ))}
              </UL>
            }
          </AwardCard>
        ))
      }
    </Box>
  );
};

export default SDSUWomen;