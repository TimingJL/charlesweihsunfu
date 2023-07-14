import React from 'react';
import Box from '@mui/material/Box';
import { H2, Subtitle, UL, AwardCard } from 'src/components/commonStyled';

const awards = [
  {
    title: '2007',
    description: `2007 temporary suspension of PBD scholarship; research grants awarded to\nSUE-YUN KIM(History, Academy of Korean Studies, Seoul)\nDONAVAN MUIR(Philosophy, SDSU)`,
    winners: []
  },
  {
    title: '2006',
    winners: [
      {
        name: 'XIAYING ZHANG - MSBA Finance, College of Business Administration',
        description: `I will attend the University of Hong Kong on Spring 2007 as a visiting student. While in Hong Kong, I'm planning to learn Cantonese as well as to explore the cultural diversity that reside in its society due to its unique historical background. I'm also planning to attend the Summer Service Learning Program sponsored by the Wang Foundation after my studies at University of Hong Kong.`,
      }
    ]
  },
  {
    title: '2005',
    winners: [
      {
        name: 'STEPHEN RICE - Fine Art Studio Arts',
        description: `B.A. Fine Art, Emphasis in Studio Arts, Minor in Chinese Language. Starting Fall 2006 will attend the China Central Academy of Fine Artsin Beijing, determined to be the first American to attain a Masters degree in Traditional Chinese Painting from China's premier art school.`,
      }
    ]
  },
  {
    title: '2004',
    winners: [
      {
        name: 'MEGAN MORN - M.A. STUDENT IN INTERDISCIPLINARY STUDIES',
        description: `Research focuses on the relationship of Noh drama to shamanism. Of special interest are the historical connections made between China and Japan through Korea, especially through itinerant performers. Through these relationships Japanese shamanism has been influenced by Chinese and Korean shamanism. This legacy and heritage is still seen in Japan today and is also found within the tradition of Noh drama. Results of this study may help distinguish religious traditions in Japanese history, which have been difficult to separate.`,
      }
    ]
  },
  {
    title: '2003',
    winners: [
      {
        name: 'Miguel Llora - M.A. Asian Studies',
        description: 'Mr. Llora will be completing his Masters Thesis on the topic of Filipino migration to the U.S.',
      }
    ]
  },
  {
    title: '2002',
    winners: [
      {
        name: 'Shigeru Suzuki - M.A. English and Comparative Literature',
        description: 'Mr. Suzuki will be pursuing his Ph.D. at University of California, Santa Cruz beginning in Fall 2003',
      }
    ]
  },
  {
    title: '2001',
    winners: [
      {
        name: 'Tomoko Kubotani - M.A. Social Work',
        description: '',
      }
    ]
  },
  {
    title: '2000',
    winners: [
      {
        name: 'Ming Jin Woo - M.A. Television, Film & New Media Production',
        description: '',
      }
    ]
  },
  {
    title: '1999',
    winners: [
      {
        name: 'Jennifer Kue (U.S.) - M.A. Anthropology',
        description: '',
      }
    ]
  },
];

const SDSUpbt = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2><strong>{`	FU FOUNDATION SCHOLAR, SDSU PHI BETA DELTA`}</strong></H2>
        <Subtitle>
          <div>{`Scholarship application details can be found at the following link:`}</div>
          <a href="http://www.sa.sdsu.edu/isc/pbdscholarship.htm">http://www.sa.sdsu.edu/isc/pbdscholarship.htm</a>
        </Subtitle>
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

export default SDSUpbt;