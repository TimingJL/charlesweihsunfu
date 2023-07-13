import React from 'react';
import Box from '@mui/material/Box';

const ApplicationForm = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{margin:'50px', fontSize: '18px'}}>
        <h3><span>{`Charles Wei-Hsun Fu Foundation`}</span></h3>
        <br />
        <hr />
        <div>{`FU FOUNDATION-ISCP ESSAY CONTEST`}</div>
        <div>{`APPLICATION FORM`}<br />
          {`(the information provided here is intended for the records of the Foundation and will NOT be revealed to reviewers evaluating submissions)`}
        </div>
        <div>{`Family Name: `}</div>
        <div>{`Personal Name: `}</div>
        <div>{`Address: `}<br />
          {`  (including zip code) `}
        </div>
        <div>{`City: `}</div>
        <div>{`State/Province:`}</div>
        <div>{`Country: `}</div>
        <div>{`Phone/Fax: `}</div>
        <div>{`E-mail: `}</div>
        <div>{`Degrees held:`}<br />
          {`(please include institution, date, and discipline)`}
        </div>
        <div>{`Scholarly Specialization: `}</div>
        <div>{`Female Male (circle one) `}</div>
        <div>{`Essay Submission Title:`}</div>
        <hr size="1" />
        <div>{`PLEASE NOTE: `}<br />
          {`The Fu foundation welcomes the participation of Independent Scholars in ALL of its programs!`}
        </div>
      </div>
    </Box>
  );
};

export default ApplicationForm;