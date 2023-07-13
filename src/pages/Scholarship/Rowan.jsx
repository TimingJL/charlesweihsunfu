import React from 'react';
import Box from '@mui/material/Box';
import { H2, Subtitle } from 'src/components/commonStyled';

const Rowan = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2><strong>{`THE CHARLES WEI-HSUN FU MEMORIAL SCHOLARSHIP, ROWAN UNIVERSITY`}</strong></H2>
        <Subtitle>{`$2000 in scholarships given annually to students in the Asian Studies Program Glassboro, New Jersey`}</Subtitle>
      </div>

      <div><strong>{`2008 Awardees`}</strong></div>
      <div>
        <h4><strong>{`Elizabeth Moreton (English major, Asian Studies minor)`}</strong></h4>
      </div>

      <hr />

      <div><strong>{`2007 Awardees`}</strong></div>
      <div>
        <h4><strong>{`Magdalena A. Dziopko (Spanish)`}</strong></h4>
        <h4><strong>{`Jeffrey Hill (Writing Arts)`}</strong></h4>
      </div>

      <hr />

      <div><strong>{`2006 Awardees`}</strong></div>
      <div>
        <h4><strong>{`Kirk LaVecchia (History)`}</strong></h4>
        <div>{`After graduating from Rowan University, I will continue my studies of Asia. My immediate plan is to take an introductory course in Mandarin Chinese. Hopefully, with this core knowledge of the language, I will be able to travel to China where I can explore and extend more substantially my learning. With a B.A. in History and concentrations in both Asian Studies and International Studies, I plan to one day go on to post-graduate law studies with a focus on international law. In doing so, I hope to provide and integral service that helps aid the relationship between the United States and China.`}</div>

        <h4><strong>{`Sheryl Wong (English)`}</strong></h4>
        <div>{`I am an English major with a Political Science minor and concentrations in Asian Studies, International Studies and Honors. I chose Asian Studies because finding out more about my own culture and being able to speak Mandarin as well as my native Cantonese really interested me. I plan on using this knowledge and these language skills to pursue my career as a Foreign Service Officer with the Department of State and plan on taking the exams in April 2007.`}</div>
      </div>

      <hr />

      <div><strong>{`2005 Awardees`}</strong></div>
      <div>
        <h4><strong>{`Glenn Iannaco (History)`}</strong></h4>
        <h4><strong>{`Pasquale Sabatini (History)`}</strong></h4>
        <h4><strong>{`Sheryl Wong (English)`}</strong></h4>
      </div>

      <hr />

      <div><strong>{`2004 Awardees`}</strong></div>
      <div>
        <h4><strong>{`John J. Herman, Jr.`}</strong></h4>
        <h4><strong>{`Glenn F. Iannaco Jr.`}</strong></h4>
      </div>

      <hr />

      <div><strong>{`2003 Awardees`}</strong></div>
      <div>
        <h4><strong>{`Debra Lore (Spanish)`}</strong></h4>
        <div>{`After graduating college, I hope to take some time off from continuing my education to figure out what type of career I would like to pursue. I would like to travel and see what lies beyond my New Jersey home. At the present time, I am relieved and happy to have survived so many difficult years of school.`}</div>
      </div>
    </Box>
  );
};

export default Rowan;