import React from 'react';
import Box from '@mui/material/Box';
import { H2 } from 'src/components/commonStyled';

const SDSUWomen = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2>{`FU FOUNDATION GRADUATE SCHOLARSHIPS`}<br />{`SDSU WOMEN'S STUDIES DEPARTMENT`}</H2>
      </div>

      <div><strong>{`2004-05 Graduate Student, Scholarship Recipient`}</strong></div>
      <div>
        <h4><strong>{`Doria Bareket`}</strong></h4>
        <div>{`After I finish my master's degree at SDSU, I will return to China and continue my career at a women's magazine. I want to found a first rank women's magazine in China,a professional magazine, and make it a voice for Chinese women. I will establish an academic research center based on the women's studies magazine. I will support cooperation between scholars of Women's Studies in China and western countries.I believe in this way I can do much to contribute to Chinese Women's Studies.`}</div>
      </div>

      <hr />

      <div><strong>{`2003 Graduate Student, Scholarship Recipient`}</strong></div>
      <div>
        <h4><strong>{`LIHONG SHI`}</strong></h4>
        <div>{`M.A. in Women's Studies, SDSU, May 2003. A past recipient of a Fu Foundation Scholarship, she will begin work on Ph.D. in Anthropology at Tulane University in Fall 2003`}</div>
      </div>

      <hr />

      <div><strong>{`2002-03 Graduate Student, Scholarship Recipient`}</strong></div>
      <div>
        <h4><strong>{`LEI PING`}</strong></h4>
      </div>
    </Box>
  );
};

export default SDSUWomen;