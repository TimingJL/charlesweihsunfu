import React from 'react';
import Box from '@mui/material/Box';
import { H2, P, UL, OL, Quot } from 'src/components/commonStyled';

import LogoPath from '../../assets/FuLogo.jpg';

const Introduction = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <H2>{`AN INTRODUCTION TO THE CHARLES WEI-HSUN FU FOUNDATION`}</H2>
      <div className='about-content'>
        <P>
          {`The Charles Wei-Hsun FU FOUNDATION, a tax-exempt foundation, was organized in 1997 in loving memory of the life and work of CHARLES WEI-HSUN FU (1933-1996), scholar and teacher extraordinaire. A native of Taiwan, Dr. FU graduated from Taiwan University with a degree in Philosophy, where he taught for several years. Later he continued his studies at UC Berkeley, the University of Hawaii, and the University of Illinois, completing a Ph.D. in Philosophy.`}
        </P>
        <P>
          {`After 25 years at Temple University he took early retirement to serve as a founding member of the Fo Guang University faculty in Taiwan, directing the Institute of Life and Death Studies. His untimely death occurred at the peak of his professional career. As his legacy he left numerous publications in Chinese and English, from scholarly tomes to popular essays. He is perhaps best known for his ground breaking Chinese works:`}
        </P>
        <UL style={{ margin: '20px 0px' }}>
          <li>{`The Life of Learning and the Learning of life: My Philosophical Development (1994) `}</li>
          <li>{`Dignified Death and Dignified Life: From Thanatological Psychiatry to the Post-Traditional Learning of Life and Death (1993).`}</li>
        </UL>
        <P>
          {`Dr. Fu was instrumental in bringing the work of other authors to the reading public through his nine series of Chinese and English language books, ranging from Asian Thought and Culture to Modern Buddhism, Current Global Trends,and Life-and-Death Studies.`}
        </P>
        <P>
          {`Following the path blazed by Dr. FU, the Foundation seeks to support the comparative and intercultural study of Philosophy as well as bold new interpretations of Asian Philosophies, including Confucianism, Neo-Confucianism, Buddhism, and Daoism.`}
        </P>
        <P>
          {`We would enjoy answering your questions.`}
        </P>
        <P>
          {`Thank YOU for your interest in the Foundation!`}
        </P>
        <P>
          {`We are a non-profit, tax-exempt organization recognized by the U.S. government under 501(c).`}
        </P>
        <P>
          {`Donations to the Fu Foundation are tax deductible.`}
        </P>
      </div>
      <hr />
      <H2>{`THE FIELD-BEING FORUM, 2000`}</H2>
      <div className='about-content'>
        <P>
          {`The Charles Wei-hsun Fu Foundation was conceived at the 10th ISCP conference held in Korea in July of 1997, nine months after the death of Dr. Fu. My initial thought for memorializing my husband was to arrange for publication of all his works in both English and Chinese, thereby preserving a permanent record of his scholarly output While at the conference, among so many of our colleagues, I was reminded of his heartfelt encouragement for the work of others, especially young scholars. Indeed, Dr. Fu espoused a diverse combination of ideals: Zhuang Zi's True Person possessing "no-self," "no-merit," and "no-name"; The Confucian sage, active in promoting the worthy; the compassionate Bodhisattva of Buddhism. These thoughts led to a proposal for a joint ISCP/Fu Foundation essay contest for young scholars.`}
        </P>
        <P>
          {`It became clear that a more formal organization was required, which led to incorporation as a non-profit, tax-exempt, educational foundation recognized by the U.S. government. This includes a yearly budget and a Board of Directors, comprised of the very supportive Fu family members, with myself as President. Arranging the legal and bureaucratic details took some two years, none of which would have been possible without the continuing cooperation of Dr. Fu's friends and students internationally.`}
        </P>
        <P>
          {`Our goal is a permanent, financially independent private foundation, with a mission reflective of Charles' own multi-facted interests:`}
        </P>
        <OL>
          <li>{`to carry on and disseminate the scholarly work of Dr. Charles Wei-hsun Fu`}</li>
          <li>{`to support the research of students and scholars in the field of Asian philosophy, especially Chinese philosophy`}</li>
          <li>{`to encourage academic research and popular education in the field of life and death studies internationally`}</li>
          <li>{`to support projects aimed at the protection of other animal species and the environment, from the global village to the rain forest`}</li>
        </OL>
        <P>
          {`Existing projects include gradual publication of the COLLECTED WORKS, some 20 to 30 volumes, in both English and Chinese. A contract for the Chinese version has been signed Hung Yeh Publishing Company in Taipei. The first volume, a Chinese translation of Contemporary Ethical Autonomism: A Critical Study of Sartre and Hare, Charles' 1969 dissertation, should go to press later this year. Other ongoing projects are:`}
        </P>
        <UL>
          <li>{`THE FU FOUNDATION-ISCP ESSAY CONTEST—four $2000 awards offered in conjunction with biennial conference of the International Society for Chinese Philosophy, plus airfare`}</li>
          <li>{`THE FU FOUNDATION-IIFB ESSAY CONTEST—two $1000 awards in conjunction with the yearly conference of the International Institute for Field Being, plus airfare`}</li>
          <li>{`THE FU SCHOLAR AT SDSU—a yearly $1000 scholarship to an outstanding student of Asian Thought and Culture at San Diego State University, in conjunction with Phi Beta Delta international honor society`}</li>
        </UL>
        <P>
          {`Continuing funding is provided for a variety of non-profit organizations who emphasis aspects of the Fu Foundation mission:`}
        </P>
        <UL>
          <li>{`the Creative Arts & Communications Institute`}</li>
          <li>{`the Ecological Life Systems Institute, Inc`}</li>
          <li>{`the Helen Woodward Animal Center`}</li>
          <li>{`the International Society for Philosophy and Psychotherapy (ISPP)`}</li>
          <li>{`the Zoological Society of San Diego`}</li>
        </UL>
        <P>
          {`Among our pending projects is a series of memorial volumes consisting of essays contributed by Dr. Fu's friends and students, followed by support for publication of important works on Asian philosophy by other scholars, in various languages. Long term projects also are in the works, such as establishment of an international guest house for visiting scholars and their families in San Diego, California.`}
        </P>
        <P>
          {`The Fu Foundation welcomes suggestions for other projects in keeping with its mission. We are also interested in any contributions you may have for the Charles Wei-hsun Fu Archives, in the form of letters from Dr. Fu, audio or tapes of his lectures, and especially personal anecdotes.`}
        </P>
        <P>
          {`Sandra A. Wawrytko-Fu, Ph.D.`}
        </P>
      </div>
      <hr />
      <H2>{`ABOUT THE FU FOUNDATION LOGO`}</H2>
      <div className='about-content'>
        <P>
          {`The butterfly is a favored symbol in many cultures. In China it is linked with:`}
        </P>
        <img src={LogoPath} width="100%" style={{ maxWidth: "400px" }} />
        <UL>
          <li>{`love--from the star-crossed couple who become butterfly lovers to the dearly departed who return in butterfly form.`}</li>
          <li>{`transformation, as in Zhuang Zi's butterfly dream. In other cultures the butterfly is associated with its experience of metamorphosis, a life/death cycle of new emergence and resurrection.`}</li>
        </UL>
        <P>
          {`In Taiwan the butterfly has special meaning, for the island plays host to many species. Of the estimated 19,000 butterfly species throughout the world, 377 are native to the island, which has the world's greatest butterfly density. To the class conscious Rukai tribe, the butterfly is a symbol of nobility as well as a bringer of good luck.`}
        </P>
        <P>
          {`Life, Love, Death, and Transformation are all concerns closely connected to the Mission of the Fu Foundation as we seek to sustain the philosophical flights of Dr. Fu's amazing mind and spirit.`}
        </P>
      </div>
      <hr />
      <H2>MISSION STATEMENT</H2>
      <div className='about-content'>
        <P>
          {`The mission of the Fu Foundation is multi-faceted, yet unified, emulating the life and work of Dr. FU himself:`}
        </P>
        <OL>
          <li>{`To carry on and disseminate the scholarly work of Dr. Charles Wei-hsun Fu (publications)`}</li>
          <li>{`To support educational enterprises in the field of Asian thought through cash awards for scholars and students scholarships as well as assistance in publications`}</li>
          <li>{`To encourage academic research and popular education in the field of Life and Death Studies internationally`}</li>
          <li>{`To support projects aimed at the protection of other animal species and the environment, from the global village to the rain forest (organizations)`}</li>
        </OL>
        <Quot>
          {`"My deep conviction concerning the need for changes in our curriculum arises from my own intercultural and interdisciplinary experiences. Although my educational and cultural background is East Asian, my original professional training was in Western philosophy. Subsequently I taught at several departments of philosophy, and . . the department of religion. In order to guide our students into the next century, it is imperative that we design more and more courses capable of stimulating students in cross-cultural and inter-disciplinary terms in our ever-shrinking global village. . . . That task must be shared by us all as concerned and responsible educators."`}
        </Quot>
        <P>
          <b>{`CHARLES WEI-HSUN FU `}</b>
          <div>{`"Toward a Creative East-West Dialogue in Moral Education and Value Orientation," `}</div>
          <div>{`Rethinking the Curriculum (1989)`}</div>
        </P>
      </div>
    </Box>
  );
};

export default Introduction;
