import React from 'react';
import Box from '@mui/material/Box';

const ContactUs = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <h3><strong>{`THE CHARLES WEI-HSUN FU FOUNDATION`}</strong></h3>
      <div>{`We would enjoy answering your questions and knowing how you heard about us. Thank YOU for your interest in the Foundation!`}</div>
    
      <h3><strong>{`Foundation Address:`}</strong></h3>
      <div>
        <div>
          <div>{`The Charles Wei-Hsun Fu Foundation`}</div>
          <div>{`10869 Wallingford Road`}</div>
          <div>{`San Diego, California 92126-2560`}</div>
          <div>{`U.S.A.`}</div>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18947.909960645437!2d-117.16881265292602!3d32.91009300889573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf885285a1889%3A0x7dbeebaec932fddc!2s10869+Wallingford+Rd%2C+San+Diego%2C+CA+92126%E7%BE%8E%E5%9C%8B!5e0!3m2!1szh-TW!2stw!4v1508551252026" width="100%" height="450" style={{border:'0', marginTop: '20px'}} allowFullScreen></iframe>
      </div>

      <br />

      <div>
        <div><strong>{`Fax: `}</strong>{`858-566-8083`}</div>
        <div>{`www.charleswei-hsunfufoundation.org`}</div>
      </div>

      <br />

      <div>
        <div><strong>{`President, Sandra A. Wawrytko, Ph.D.`}</strong></div>
        <div>{`wawrytko@charleswei-hsunfufoundation.org`}</div>
      </div>

      <br />

      <div>{`We are a non-profit, tax-exempt organization recognized by the U.S. government under 501(c).`}</div>
      
      <br />
      
      <div><strong>{`Donations to the Fu Foundation are tax deductible.`}</strong></div>
      <br /><br /><br />
      <h3><strong>{`THE CHARLES WEI-HSUN FU FOUNDATION OFFICERS AND TRUSTEES`}</strong></h3>

      <h3>{`Officers:`}</h3>
      <div>
        <div>
          <strong>{`Mr. Wei-Tsung Fu`}</strong>{`, Chairman of the Board of Trustees`}
        </div>
        <div>
          <strong>{`Ms. Syou-Ling Fu`}</strong>{`, Secretary and Treasurer`}
        </div>
      </div>

      <div>
        <strong>{`Dr. Sandra A. Wawrytko-Fu`}</strong>
        {`, President`}
      </div>

      <div>
        <strong>{`Mr. Wei-Tsung Fu`}</strong>
        {`, Chairman of the Board of Trustees`}
      </div>

      <div>
        <strong>{`Ms. Syou-Ling Fu`}</strong>
        {`, Secretary and Treasurer`}
      </div>

    </Box>
  );
};

export default ContactUs;