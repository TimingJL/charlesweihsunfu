import React from 'react';
import Box from '@mui/material/Box';
import { H2, P, UL, Divider } from 'src/components/commonStyled';

const ChineseThought = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2><strong>{`THE CHARLES WEI-HSUN FU SCHOLARSHIP IN CHINESE THOUGHT & CULTURE`}</strong></H2>
        <div>{`beginning in Fall, 2005 in cooperation with the SDSU College of Arts & Letters and the China Studies Institute`}</div>
      </div>
      <b>{`SELECTION CRITERIA`}</b>
      <UL>
        <li>{`The scholarship will be open to any student in good standing at SDSU, Graduate or undergraduate, pursuing a program of study focusing on Chinese Thought and Culture.`}</li>
        <li>{`The award will be based on the awardees record of academic excellence, with a minimum GPA of 3.5 out of 4.0.`}</li>
        <li>{`Demonstration of financial need as defined by the SDSU Office of Financial Aid and Scholarships will be taken into consideration.`}</li>
        <li>{`Preference will be given to applicants who are engaged in Taiwan studies, Chinese Philosophy and Religion, Chinese culture and Language, as well as applicants from the College of Arts and Letters.`}</li>
        <li>{`If no suitable candidate is found in a given year, no award will be granted.`}</li>
      </UL>
      <br />
      <H2><strong>{`APPLICATION PROCESS`}</strong></H2>
      <P>{`Application period - March  through May`}</P>
      <P>{`Please visit the SDSU scholarship page (under C) for further details and application form.`}</P>
      <P>{`An essay is required for the application (2 pages maximum) including why you chose your major or educational program, your career plans, how your orientation to Chinese thought and culture factors into your educational and career choices.`}</P>
      <Divider />
      <div><strong>{`2008 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>
      <Divider />
      <div><strong>{`2007 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>
      <Divider />
      <div><strong>{`2006 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>
      <Divider />
      <div><strong>{`2005 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>
    </Box>
  );
};

export default ChineseThought;