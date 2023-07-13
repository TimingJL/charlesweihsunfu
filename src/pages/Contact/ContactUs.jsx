import React from 'react';
import Box from '@mui/material/Box';
import { H2, H3 } from 'src/components/commonStyled';

const ContactUs = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <H2>{`THE CHARLES WEI-HSUN FU FOUNDATION`}</H2>
      <div>{`We would enjoy answering your questions and knowing how you heard about us. Thank YOU for your interest in the Foundation!`}</div>

      <H3>{`Foundation Address:`}</H3>
      <div>
        <div>
          <div>{`The Charles Wei-Hsun Fu Foundation`}</div>
          <div>{`10869 Wallingford Road`}</div>
          <div>{`San Diego, California 92126-2560`}</div>
          <div>{`U.S.A.`}</div>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18947.909960645437!2d-117.16881265292602!3d32.91009300889573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf885285a1889%3A0x7dbeebaec932fddc!2s10869+Wallingford+Rd%2C+San+Diego%2C+CA+92126%E7%BE%8E%E5%9C%8B!5e0!3m2!1szh-TW!2stw!4v1508551252026" width="100%" height="450" style={{ border: '0', marginTop: '20px' }} allowFullScreen></iframe>
      </div>

      <br />

      <div>
        <div>{`Fax: `}{`858-566-8083`}</div>
        <a href="http://charlesweihsunfu.org/">{`http://charlesweihsunfu.org/`}</a>
      </div>

      <br />

      <div>
        <div>{`President, Sandra A. Wawrytko, Ph.D.`}</div>
        <div>{`wawrytko@charleswei-hsunfufoundation.org`}</div>
      </div>

      <br />

      <div>{`We are a non-profit, tax-exempt organization recognized by the U.S. government under 501(c).`}</div>

      <br />

      <div>{`Donations to the Fu Foundation are tax deductible.`}</div>
      <br /><br /><br />
      <h3>{`THE CHARLES WEI-HSUN FU FOUNDATION OFFICERS AND TRUSTEES`}</h3>

      <h3>{`Officers:`}</h3>
      <div>
        <div>
          {`Mr. Wei-Tsung Fu`}{`, Chairman of the Board of Trustees`}
        </div>
        <div>
          {`Ms. Syou-Ling Fu`}{`, Secretary and Treasurer`}
        </div>
      </div>

      <div>
        {`Dr. Sandra A. Wawrytko-Fu`}
        {`, President`}
      </div>

      <div>
        {`Mr. Wei-Tsung Fu`}
        {`, Chairman of the Board of Trustees`}
      </div>

      <div>
        {`Ms. Syou-Ling Fu`}
        {`, Secretary and Treasurer`}
      </div>

    </Box>
  );
};

export default ContactUs;