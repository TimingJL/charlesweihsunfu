import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const H3 = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin: 50px}}>
`;

const ChineseThought = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{fontSize: '20px', margin: '50px'}}>
        <h3><strong>{`THE CHARLES WEI-HSUN FU SCHOLARSHIP IN CHINESE THOUGHT & CULTURE`}</strong></h3>
        <div>{`beginning in Fall, 2005 in cooperation with the SDSU College of Arts & Letters and the China Studies Institute`}</div>
      </div>
      <div>{`SELECTION CRITERIA`}</div>

      <ul>
        <li>{`The scholarship will be open to any student in good standing at SDSU, Graduate or undergraduate, pursuing a program of study focusing on Chinese Thought and Culture.`}</li>
        <li>{`The award will be based on the awardees record of academic excellence, with a minimum GPA of 3.5 out of 4.0.`}</li>
        <li>{`Demonstration of financial need as defined by the SDSU Office of Financial Aid and Scholarships will be taken into consideration.`}</li>
        <li>{`Preference will be given to applicants who are engaged in Taiwan studies, Chinese Philosophy and Religion, Chinese culture and Language, as well as applicants from the College of Arts and Letters.`}</li>
        <li>{`If no suitable candidate is found in a given year, no award will be granted.`}</li>
      </ul>

      <br />

      <H3><strong>{`APPLICATION PROCESS`}</strong></H3>

      <div>{`Application period - March  through May`}</div>
      <div>{`Please visit the SDSU scholarship page (under C) for further details and application form.`}</div>
      <div>{`An essay is required for the application (2 pages maximum) including why you chose your major or educational program, your career plans, how your orientation to Chinese thought and culture factors into your educational and career choices.`}</div>
      
      <hr />
      
      <div><strong>{`2008 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>

      <hr />

      <div><strong>{`2007 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>

      <hr />

      <div><strong>{`2006 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>

      <hr />

      <div><strong>{`2005 Awardee`}</strong></div>
      <h4><strong>{`Tonya Warren`}</strong></h4>
    </Box>
  );
};

export default ChineseThought;