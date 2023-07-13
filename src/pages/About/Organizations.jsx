import React from 'react';
import Box from '@mui/material/Box';
import { H2, H4, UL, Quot } from 'src/components/commonStyled';


const Organizations = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <H2>ORGANIZATIONS SUPPORTED BY THE FU FOUNDATION</H2>
      <H4>
        <UL>
          <li>
            {`CREATIVE ART & COMMUNICATIONS INSTITUTE`}
          </li>
          <li>
            {`ECOLOGICAL LIFE SYSTEMS INSTITUTE, INC.`}
          </li>
          <li>
            {`HELEN WOODWARD ANIMAL CENTER`}
          </li>
        </UL>
        <Quot>
          {`5 year pledge to capital campaign`}
        </Quot>
        <UL>
          <li>
            {`INTERNATIONAL SOCIETY FOR PHILOSOPHY & PSYCHOTHERAPY (ISPP)`}
          </li>
          <li>
            {`ZOOLOGICAL SOCIETY OF SAN DIEGO`}
          </li>
        </UL>
        <Quot>
          {`2002/2003--New Heart of the Zoo (Ken Allen Tribute)`}
        </Quot>
        <Quot>
          {`2001/2002-Orangutan/Siamang Exhibit`}
        </Quot>
        <Quot>
          {`1999/2000-Condor Ridge`}
        </Quot>
        <Quot>
          {`1999-Ituri Forest`}
        </Quot>
        <Quot>
          {`1997/1998-Center for Reproduction of Endangered Species (CRES)`}
        </Quot>
      </H4>
    </Box>
  );
};

export default Organizations;
