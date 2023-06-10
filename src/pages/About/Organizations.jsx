import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

const H4 = styled.div`
  font-size: 20px;
  margin-top: 50px;
`;

const Organizations = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <h2><strong>ORGANIZATIONS SUPPORTED BY THE FU FOUNDATION</strong></h2>
      <H4>
        <div>
          {`CREATIVE ART & COMMUNICATIONS INSTITUTE`}
        </div>
        <div>
          {`ECOLOGICAL LIFE SYSTEMS INSTITUTE, INC.`}
        </div>
        <div>
          {`HELEN WOODWARD ANIMAL CENTER`}
        </div>
        <blockquote>
          {`5 year pledge to capital campaign`}
        </blockquote>
        <div>
          {`INTERNATIONAL SOCIETY FOR PHILOSOPHY & PSYCHOTHERAPY (ISPP)`}
        </div>
        <div>
          {`ZOOLOGICAL SOCIETY OF SAN DIEGO`}
        </div>
        <blockquote>
          {`2002/2003--New Heart of the Zoo (Ken Allen Tribute)`}
        </blockquote>
        <blockquote>
          {`2001/2002-Orangutan/Siamang Exhibit`}
        </blockquote>
        <blockquote>
          {`1999/2000-Condor Ridge`}
        </blockquote>
        <blockquote>
          {`1999-Ituri Forest`}
        </blockquote>
        <blockquote>
          {`1997/1998-Center for Reproduction of Endangered Species (CRES)`}
        </blockquote>
      </H4>
    </Box>
  );
};

export default Organizations;
