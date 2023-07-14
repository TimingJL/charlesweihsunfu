import React from 'react';
import Box from '@mui/material/Box';
import { H2, Subtitle, UL, AwardCard } from 'src/components/commonStyled';

const awards = [
  {
    title: '2008',
    description: 'Elizabeth Moreton (English major, Asian Studies minor)',
    winners: []
  },
  {
    title: '2007',
    winners: [
      { name: 'Magdalena A. Dziopko (Spanish)' },
      { name: 'Jeffrey Hill (Writing Arts)' },
    ]
  },
  {
    title: '2006',
    winners: [
      {
        name: 'Kirk LaVecchia (History)',
        description: `After graduating from Rowan University, I will continue my studies of Asia. My immediate plan is to take an introductory course in Mandarin Chinese. Hopefully, with this core knowledge of the language, I will be able to travel to China where I can explore and extend more substantially my learning. With a B.A. in History and concentrations in both Asian Studies and International Studies, I plan to one day go on to post-graduate law studies with a focus on international law. In doing so, I hope to provide and integral service that helps aid the relationship between the United States and China.`,
      },
      {
        name: 'Sheryl Wong (English)',
        description: `I am an English major with a Political Science minor and concentrations in Asian Studies, International Studies and Honors. I chose Asian Studies because finding out more about my own culture and being able to speak Mandarin as well as my native Cantonese really interested me. I plan on using this knowledge and these language skills to pursue my career as a Foreign Service Officer with the Department of State and plan on taking the exams in April 2007.`,
      }
    ]
  },
  {
    title: '2005',
    winners: [
      { name: 'Glenn Iannaco (History)' },
      { name: 'Pasquale Sabatini (History)' },
      { name: 'Sheryl Wong (English)' },
    ]
  },
  {
    title: '2004',
    winners: [
      { name: 'John J. Herman, Jr.' },
      { name: 'Glenn F. Iannaco Jr.' },
    ]
  },
  {
    title: '2003',
    winners: [
      {
        name: 'Debra Lore (Spanish)',
        description: 'After graduating college, I hope to take some time off from continuing my education to figure out what type of career I would like to pursue. I would like to travel and see what lies beyond my New Jersey home. At the present time, I am relieved and happy to have survived so many difficult years of school.',
      }
    ]
  },
];

const Rowan = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2><strong>{`THE CHARLES WEI-HSUN FU MEMORIAL SCHOLARSHIP, ROWAN UNIVERSITY`}</strong></H2>
        <Subtitle>{`$2000 in scholarships given annually to students in the Asian Studies Program Glassboro, New Jersey`}</Subtitle>
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

export default Rowan;