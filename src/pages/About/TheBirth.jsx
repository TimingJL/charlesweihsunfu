import React from 'react';
import Box from '@mui/material/Box';
import { H2, H3, H4, P, UL, OL } from 'src/components/commonStyled';

const TheBirth = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <H2>THE BIRTH OF THE FU FOUNDATION</H2>
      <div className='about-content'>
        <H3>{`INTRODUCTORY REMARKS AT THE CONFERRAL OF AWARDS FOR THE FIRST BIENNIAL CHARLES WEI-HSUN FU FOUNDATION ESSAY CONTEST, HELD IN CONJUNCTION WITH THE INTERNATIONAL SOCIETY FOR CHINESE PHILOSOPHY`}<br />{`-- Fo Guang University, Taiwan, July, 1999`}</H3>
        <P>
          {`Many of you were friends or students of Dr. Fu. Others have read his works; some may be unfamiliar with him. In any case, it may be of interest to relate some background on the "birth" of the Fu Foundation at the 10th ISCP conference held in Korea in July of 1997, nine months after the death of Dr. Fu. My initial thought for memorializing Charles was to arrange for publication of all his works in both English and Chinese, thereby preserving a permanent record of his scholarly output Then I began to think of his equal contribution to ongoing scholarship, especially by encouraging young scholars. Dr. Fu espoused a diverse combination of ideals:`}
          <br />
        </P>
        <P>
          <div>{`Zhuang Zi's True Person possessing "no-self," "no-merit," and "no-name"`}</div>
          <div>{`The Confucian sage, active in promoting the worthy the compassionate Bodhisattva of Buddhism.`}</div>
        </P>
        <P>
          {`As Professor Li Kuen Tong recalls, these thoughts led to a proposal for a biennial joint ISCP/Fu Foundation essay contest for young scholars, which was graciously accepted by ISCP. Initially three language categories were set forth:`}
        </P>
        <OL>
          <li>{`Chinese`}</li>
          <li>{`Japanese or Korean`}</li>
          <li>{`English`}</li>
        </OL>
        <P>
          {`The winning author in each category was to receive a $2000 award, plus airfare to the ISCP conference. Later a fourth category was proposed and funded by a close friend of Dr. (also a member of the Fu Foundation Board of Directors), recognizing submissions by Taiwanese scholars. A blind reviewing process was implemented, with separate panels of reviewers drawn from the ISCP membership. The essays were judged on three criteria, reflecting the priorities of Dr. Fu himself:`}
        </P>
        <UL>
          <li>{`creativity`}</li>
          <li>{`coherence`}</li>
          <li>{`scholarship`}</li>
        </UL>
        <P>
          {`It became clear that a more formal organization was required, which led to incorporation as a non- profit, tax-exempt, educational foundation recognized by the U.S. government. This includes a yearly budget and a Board of Directors, comprised of the very supportive Fu family members, with myself as President. After two years of arranging the legal details we have arrived at our present status, which would have been impossible without the continuing cooperation of Dr. Fu's friends and students internationally.`}
        </P>
        <br />
        <P>
          <H4 style={{ marginBottom: '8px' }}>{`GOAL: `}</H4>
          <div>A permanent, financially independent private foundation</div>
        </P>
        <br />
        <P>
          <H4 style={{ marginBottom: '8px' }}>{`MISSION: `}</H4>
        </P>
        <OL>
          <li>{`To promote and disseminate the works of Dr. Charles Wei-hsun Fu`}</li>
          <li>{`The support the research of students and scholars in the field of Asian philosophy, especially Chinese philosophy`}</li>
          <li>{`To encourage exploration of Life-and-Death Studies (reflecting Dr. Fu's intended roles as Director of the Life and Death Institute at Fo Guang University)`}</li>
          <li>{`To address important social issues espoused by Dr. Fu, such as environmentalism, animals rights, etc`}.</li>
        </OL>
        <br />
        <P>
          <H4 style={{ marginBottom: '8px' }}>{`EXISTING PROJECTS: `}</H4>
        </P>
        <UL>
          <li>{`the ongoing Essay Contest in conjunction with ISCP; next awards in 2001`}</li>
          <li>{`a yearly scholarship through Phi Beta Delta, an international honor society, for students of Asian thought and culture at San Diego State University (where Dr. Fu was an adjunct Professor of Asian Studies)`}</li>
          <li>{`yearly support for non-profit organizations`}</li>
        </UL>
        <br />
        <P>
          <H4 style={{ marginBottom: '8px' }}>{`PENDING PROJECTS: `}</H4>
        </P>
        <UL>
          <li>{`publication of Dr. Fu's complete works in Chinese and English, totaling some 20- 30 volumes, including previously unpublished works (such as a lengthy history of Chinese philosophy and his philosophical correspondence)`}</li>
          <li>{`a series of memorial volumes consisting of essays contributed by Dr. Fu's friends and students`}</li>
          <li>{`support for publication of important works on Asian philosophy by other scholars, in various languages`}</li>
        </UL>
        <br />
        <P>
          <H4 style={{ marginBottom: '8px' }}>{`LONG TERM PROJECT: `}</H4>
        </P>
        <UL>
          <li>{`establishment of a guest house for visiting scholars and their families in San Diego, California`}</li>
        </UL>
        <br />
        <P>
          {`The Fu Foundation welcomes suggestions for other projects in keeping with its mission. We are also interested in any contributions you may have for the Charles Wei-hsun Fu Archives, in the form of letters from Dr. Fu, audio or tapes of his lectures, and so on.`}
        </P>
        <P>
          {`Sandra A. Wawrytko-Fu, Ph.D.`}<br />{`President`}
        </P>
      </div>
    </Box>
  );
};

export default TheBirth;
