import React from 'react';
import Box from '@mui/material/Box';
import { H2, H3, P, Subtitle, Divider } from 'src/components/commonStyled';

const ApplicationForm = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2>{`Charles Wei-Hsun Fu Foundation`}</H2>
        <br />
        <Divider />
        <H3 style={{ textAlign: 'center' }}>{`FU FOUNDATION-ISCP ESSAY CONTEST`}</H3>
        <Subtitle style={{ textAlign: 'center' }}>{`APPLICATION FORM`}<br />
          {`(the information provided here is intended for the records of the Foundation and will NOT be revealed to reviewers evaluating submissions)`}
        </Subtitle>
        <P>{`Family Name: `}</P>
        <P>{`Personal Name: `}</P>
        <P>{`Address: `}<br />
          {`  (including zip code) `}
        </P>
        <P>{`City: `}</P>
        <P>{`State/Province:`}</P>
        <P>{`Country: `}</P>
        <P>{`Phone/Fax: `}</P>
        <P>{`E-mail: `}</P>
        <P>{`Degrees held:`}<br />
          {`(please include institution, date, and discipline)`}
        </P>
        <P>{`Scholarly Specialization: `}</P>
        <P>{`Female Male (circle one) `}</P>
        <P>{`Essay Submission Title:`}</P>
        <Divider size="1" />
        <b>{`PLEASE NOTE: `}</b>
        <P>
          {`The Fu foundation welcomes the participation of Independent Scholars in ALL of its programs!`}
        </P>
      </div>
    </Box>
  );
};

export default ApplicationForm;