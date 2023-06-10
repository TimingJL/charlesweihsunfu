import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import LogoPath from '../../assets/FuLogo.jpg';

const Image = styled.img`
  object-fit: contain;
  border-radius: 4px;
  margin-right: 8px;
`;

const Introduction = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <h2 id="section-1" className='about-title'>{`AN INTRODUCTION TO THE CHARLES WEI-HSUN FU FOUNDATION`}</h2>
      <div className='about-content'>
        <p>
          {`The Charles Wei-Hsun FU FOUNDATION, a tax-exempt foundation, was organized in 1997 in loving memory of the life and work of CHARLES WEI-HSUN FU (1933-1996), scholar and teacher extraordinaire. A native of Taiwan, Dr. FU graduated from Taiwan University with a degree in Philosophy, where he taught for several years. Later he continued his studies at UC Berkeley, the University of Hawaii, and the University of Illinois, completing a Ph.D. in Philosophy.`}
        </p>
        <p>
          {`After 25 years at Temple University he took early retirement to serve as a founding member of the Fo Guang University faculty in Taiwan, directing the Institute of Life and Death Studies. His untimely death occurred at the peak of his professional career. As his legacy he left numerous publications in Chinese and English, from scholarly tomes to popular essays. He is perhaps best known for his ground breaking Chinese works:`}
        </p>
        <ul>
          <li>{`The Life of Learning and the Learning of life: My Philosophical Development (1994) `}</li>
          <li>{`Dignified Death and Dignified Life: From Thanatological Psychiatry to the Post-Traditional Learning of Life and Death (1993).`}</li>
        </ul>
        <p>
          {`Dr. Fu was instrumental in bringing the work of other authors to the reading public through his nine series of Chinese and English language books, ranging from Asian Thought and Culture to Modern Buddhism, Current Global Trends,and Life-and-Death Studies.`}
        </p>

        <p>
          {`Following the path blazed by Dr. FU, the Foundation seeks to support the comparative and intercultural study of Philosophy as well as bold new interpretations of Asian Philosophies, including Confucianism, Neo-Confucianism, Buddhism, and Daoism.`}
        </p>

        <p>
          {`We would enjoy answering your questions.`}
        </p>
        <p>
          {`Thank YOU for your interest in the Foundation!`}
        </p>

        <p>
          {`We are a non-profit, tax-exempt organization recognized by the U.S. government under 501(c).`}
        </p>

        <p>
          {`Donations to the Fu Foundation are tax deductible.`}
        </p>
      </div>

      <hr />
      <h2 id="section-3" className='about-title'>{`THE FIELD-BEING FORUM, 2000`}</h2>
      <div className='about-content'>
        <p>
          {`The Charles Wei-hsun Fu Foundation was conceived at the 10th ISCP conference held in Korea in July of 1997, nine months after the death of Dr. Fu. My initial thought for memorializing my husband was to arrange for publication of all his works in both English and Chinese, thereby preserving a permanent record of his scholarly output While at the conference, among so many of our colleagues, I was reminded of his heartfelt encouragement for the work of others, especially young scholars. Indeed, Dr. Fu espoused a diverse combination of ideals: Zhuang Zi's True Person possessing "no-self," "no-merit," and "no-name"; The Confucian sage, active in promoting the worthy; the compassionate Bodhisattva of Buddhism. These thoughts led to a proposal for a joint ISCP/Fu Foundation essay contest for young scholars.`}
        </p>

        <p>
          {`It became clear that a more formal organization was required, which led to incorporation as a non-profit, tax-exempt, educational foundation recognized by the U.S. government. This includes a yearly budget and a Board of Directors, comprised of the very supportive Fu family members, with myself as President. Arranging the legal and bureaucratic details took some two years, none of which would have been possible without the continuing cooperation of Dr. Fu's friends and students internationally.`}
        </p>

        <p>
          {`Our goal is a permanent, financially independent private foundation, with a mission reflective of Charles' own multi-facted interests:`}
        </p>

        <p>
          <ol>
            <li>{`to carry on and disseminate the scholarly work of Dr. Charles Wei-hsun Fu`}</li>
            <li>{`to support the research of students and scholars in the field of Asian philosophy, especially Chinese philosophy`}</li>
            <li>{`to encourage academic research and popular education in the field of life and death studies internationally`}</li>
            <li>{`to support projects aimed at the protection of other animal species and the environment, from the global village to the rain forest`}</li>
          </ol>
        </p>

        <p>
          {`Existing projects include gradual publication of the COLLECTED WORKS, some 20 to 30 volumes, in both English and Chinese. A contract for the Chinese version has been signed Hung Yeh Publishing Company in Taipei. The first volume, a Chinese translation of Contemporary Ethical Autonomism: A Critical Study of Sartre and Hare, Charles' 1969 dissertation, should go to press later this year. Other ongoing projects are:`}
        </p>

        <p>
          <ul>
            <li>{`THE FU FOUNDATION-ISCP ESSAY CONTEST—four $2000 awards offered in conjunction with biennial conference of the International Society for Chinese Philosophy, plus airfare`}</li>
            <li>{`THE FU FOUNDATION-IIFB ESSAY CONTEST—two $1000 awards in conjunction with the yearly conference of the International Institute for Field Being, plus airfare`}</li>
            <li>{`THE FU SCHOLAR AT SDSU—a yearly $1000 scholarship to an outstanding student of Asian Thought and Culture at San Diego State University, in conjunction with Phi Beta Delta international honor society`}</li>
          </ul>
        </p>

        <p>
          {`Continuing funding is provided for a variety of non-profit organizations who emphasis aspects of the Fu Foundation mission:`}
        </p>

        <p>
          <ul className="list">
            <li className="list-item one">{`the Creative Arts & Communications Institute`}</li>
            <li>{`the Ecological Life Systems Institute, Inc`}</li>
            <li>{`the Helen Woodward Animal Center`}</li>
            <li>{`the International Society for Philosophy and Psychotherapy (ISPP)`}</li>
            <li>{`the Zoological Society of San Diego`}</li>
          </ul>
        </p>

        <p>
          {`Among our pending projects is a series of memorial volumes consisting of essays contributed by Dr. Fu's friends and students, followed by support for publication of important works on Asian philosophy by other scholars, in various languages. Long term projects also are in the works, such as establishment of an international guest house for visiting scholars and their families in San Diego, California.`}
        </p>

        <p>
          {`The Fu Foundation welcomes suggestions for other projects in keeping with its mission. We are also interested in any contributions you may have for the Charles Wei-hsun Fu Archives, in the form of letters from Dr. Fu, audio or tapes of his lectures, and especially personal anecdotes.`}
        </p>

        <p>
          {`Sandra A. Wawrytko-Fu, Ph.D.`}
        </p>
      </div>

      <hr />

      <h2 id="section-4" className='about-title'>{`ABOUT THE FU FOUNDATION LOGO`}</h2>
      <div className='about-content'>
        <p>
          {`The butterfly is a favored symbol in many cultures. In China it is linked with:`}
        </p>
        <Image src={LogoPath} sx={{height: '100%'}} />

      </div>

      <hr />
      <h2 id="section-5" className='about-title'>{`MISSION STATEMENT`}</h2>
      <div className='about-content'>
        <p>
          {`The mission of the Fu Foundation is multi-faceted, yet unified, emulating the life and work of Dr. FU himself:`}
        </p>

        <ol>
          <li>{`To carry on and disseminate the scholarly work of Dr. Charles Wei-hsun Fu (publications)`}</li>
          <li>{`To support educational enterprises in the field of Asian thought through cash awards for scholars and students scholarships as well as assistance in publications`}</li>
          <li>{`To encourage academic research and popular education in the field of Life and Death Studies internationally`}</li>
          <li>{`To support projects aimed at the protection of other animal species and the environment, from the global village to the rain forest (organizations)`}</li>
        </ol>

        <p>
          {`"My deep conviction concerning the need for changes in our curriculum arises from my own intercultural and interdisciplinary experiences. Although my educational and cultural background is East Asian, my original professional training was in Western philosophy. Subsequently I taught at several departments of philosophy, and . . the department of religion. In order to guide our students into the next century, it is imperative that we design more and more courses capable of stimulating students in cross-cultural and inter-disciplinary terms in our ever-shrinking global village. . . . That task must be shared by us all as concerned and responsible educators."`}
        </p>

        <p>
          <div>{`CHARLES WEI-HSUN FU `}</div>
          <div>{`"Toward a Creative East-West Dialogue in Moral Education and Value Orientation," `}</div>
          <div>{`Rethinking the Curriculum (1989)`}</div>
        </p>
      </div>

    </Box>
  );
};

export default Introduction;
