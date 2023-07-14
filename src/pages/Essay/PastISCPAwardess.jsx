import React from 'react';
import Box from '@mui/material/Box';
import { H2, Subtitle, UL, AwardCard, Divider } from 'src/components/commonStyled';

import DuanChongyang from 'src/assets/essay/2022_DuanChongyang.png';
import TIMO_ENNEN from 'src/assets/essay/2022_TIMO_ENNEN.png';
import WangKaiyuan from 'src/assets/essay/2022_WangKaiyuan.png';

const awards = [
  {
    title: '2022 Awardees',
    categories: [
      {
        name: 'ENGLISH LANGUAGE PRIZE ESSAY',
        winners: [
          {
            name: 'TIMO ENNEN, Ph.D. Candidate in Humanities - The Hong Kong University of Science and Technology, Hong Kong',
            description: '“An Unbridgeable Gap – Cognitive Science, Mencius and Wang Yangming”',
            imagePath: TIMO_ENNEN,
          }
        ]
      },
      {
        name: 'CHINESE LANGUAGE PRIZE ESSAY',
        winners: [
          {
            name: '王开元,  Lecturer 讲师 - 河北大学哲学系 (Hebei University, Philosophy)',
            description: '"欲求、厌恶与尊严——孟子“羞恶之心”的内涵与理论意义"',
            imagePath: WangKaiyuan,
          },
          {
            name: '段重阳, Ph.D. Candidate in philosophy - 华东师范大学哲学系 (East China Normal University, Philosophy)',
            description: '“摄用归体”与“摄体归用”：熊十力形而上学的两个步骤',
            imagePath: DuanChongyang,
          }
        ]
      },
    ]
  },
  {
    title: '2003 Awardees',
    description: '2003 conference cancelled.',
    winners: [],
  },
  {
    title: '2002 Awardees',
    winners: [
      {
        name: 'KYOO E. LEE, PH.D. - London, England',
        description: `The Madness of Measuring Madness: Revisiting Foucault vs. Derrida in Descartes's Madmen as a Field-Being Issue`,
      },
      {
        name: 'PROFESSOR JINMEI YUAN - Department of Philosophy, Creighton University, Omaha, Nebraska U.S.A',
        description: 'Exploring the Logical Space in the Patterns of Classical Chinese Mathematical Art',
      },
      {
        name: 'PROFESSOR YOURU WANG - Rowan University, Glassboro, New Jersey U.S.A.',
        description: 'Dao Must Flow Freely—The De-substantalization of Buddha Nature in the Platform Sutra',
      },
    ]
  },
  {
    title: '2001 Awardees',
    winners: [
      {
        name: 'WANG QINGJIE - The Chinese University of Hong Kong',
        description: 'Heng and the Temporality of Dao: Heidegger and Laozi',
      }
    ],
    categories: [
      {
        name: '',
        winners: [
          {
            name: 'WANG QINGJIE - The Chinese University of Hong Kong',
            description: 'Heng and the Temporality of Dao: Heidegger and Laozi',
          }
        ],
      },
      {
        name: 'Joint Prize',
        winners: [
          {
            name: 'FRANZ RIFFERT - University of Salzburg, Austria',
            description: 'On Non-Substantialism in Psychology: Convergencies BetweenWhitehead and Piaget',
          },
          {
            name: 'JIN Y. PARK - American University, U.S.A.',
            description: `Politicizing Kung-an: <br>Zen Buddhism and Julia Kristeva's Feminist Poetics`,
          }
        ]
      },
      {
        name: 'Honorable Mention',
        winners: [
          {
            name: 'WENYU XIE - Fuller Theological Seminary, Arcadia, California.',
            description: `"The Field of Possibility: Zhuangzi and Kierkegaard"`,
          },
        ]
      }
    ]
  },
  {
    title: '2000 Awardees',
    categories: [
      {
        name: '',
        winners: [
          {
            name: 'ROBERT ELLIS - University of Lancaster, Department of Philosophy,UK',
            description: 'Lakatos and Non-Dualistic Ethics',
          },
          {
            name: 'SIMON JAMES - University of Duram, Department of Philosophy,UK',
            description: 'Awakening to Language in Heidegger and Zen',
          },
        ],
      },
      {
        name: 'Honorable Mention',
        winners: [
          {
            name: 'MAJA MILCINSKI',
            description: 'In Life and Death Studies',
          },
          {
            name: 'Universa v Ljubljana, Filozofska Fakulteta',
            description: `"Uroboros and the Open Circle: Two ways of Approaching Impermananence"`,
          },
          {
            name: 'ZHIHE WANG - Claremont Graduate University',
            description: `In Environmental Concerns - "John Cobb's Postmodern Eco-economic Theory"`,
          },
        ]
      }
    ]
  },
];

const ISCPAwards = [
  {
    title: '2009 Awardees - Fu Ren University, Taipei, Taiwan',
    categories: [
      {
        name: 'CHINESE LANGUAGE - YOUNG SCHOLAR',
        winners: [
          {
            name: 'Li Xi, Graduate Student - Aesthetics Research Center, Department of Philosophy, Peking University',
            description: '“The Logic Structure of Shi as a concept in Chinese Philosophy”',
          }
        ],
      },
      {
        name: 'ENGLISH LANGUAGE - YOUNG SCHOLAR',
        description: 'The prize will be shared between two entries',
        winners: [
          {
            name: 'Francis Li Chung-hung - HKICC Lee Shau Kee School of Creativity, Hong Kong',
            description: `“’Not Laugh, Not be Tao’: The Application of the Tao Te Ching in the Drawings of Yue Minjun”`,
          },
          {
            name: 'Tonya Warren, M.A. student - Department of Philosophy, San Diego State University',
            description: `“Reconciling the ‘Self’ in Western Psychology and Buddhism”`,
          }
        ],
      },
      {
        name: 'ESTABLISHED SCHOLAR AWARDEE',
        description: 'The prize will be shared between two entries',
        winners: [
          {
            name: 'Li-Hsiang Lisa Rosenlee - Associate Professor of Philosophy, University of Hawaii— West Oahu',
            description: `“Confucian Care: Beyond the Colonial Politics of Feminism”`,
          },
        ],
      },
    ]
  },
  {
    title: '2005 AWARDEES - Sydney, Australia, University of New South Wales',
    categories: [
      {
        name: 'CHINESE LANGUAGE',
        winners: [
          {
            name: 'Yang Guorong, Ph.D. - East China Normal University, Shanghai, PRC',
            description: `"The Debate over "Tian" and "Ren"—A Reinterpretation of the Zhuangzi"`,
          }
        ]
      },
      {
        name: 'ENGLISH LANGUAGE',
        winners: [
          {
            name: `Chen Kung Hung, Graduate Degree Fellow - East-West Center, University of Hawai'i`,
            description: `"Meanings in the Making: Words, Creativity, and a Philosophical Interpretation of A Book from the Sky"`,
            note: `[PLEASE NOTE: The original awardee, Eric Hanson, a graduate student at the University of Hawai'i, was unable to accept the award due to professional commitments that prevented him from attending the conference.]`
          }
        ]
      },
      {
        name: 'SENIOR SCHOLAR AWARDEE',
        winners: [
          {
            name: 'Yang Ju-ping, Ph.D. - College of History, Nankai University, Tianjin, PRC',
            description: `"Zhuangzi and the Cynics—Their Significance to the Modern Society"`
          }
        ]
      }
    ]
  },
  {
    title: '2001 AWARDEES',
    categories: [
      {
        name: 'ENGLISH LANGUAGE',
        winners: [
          {
            name: `Brian Bruya, Ph.D. candidate - Department of Philosophy, University of Hawai'i at Manoa, U.S.A.`,
            description: `"Qing and Emotion in Early Chinese Thought"`
          }
        ]
      },
      {
        name: 'JAPANESE LANGUAGE - Honorable Mention',
        winners: [
          {
            name: 'Maja Milcinski, Ph.D. - Philipps-Universitat Marburg, Germany'
          }
        ]
      },
      {
        name: 'CHINESE LANGUAGE - no awards made',
      }
    ]
  },
  {
    title: '1999 AWARDEES',
    categories: [
      {
        name: 'CHINESE LANGUAGE - Honorable Mentions',
        winners: [
          { name: 'Fu Zheng Ming - Sundsvall, Sweden' },
          { name: 'Lai Chi-tim - Department of Religion, Chinese University of Hong Kong' },
          { name: 'Youru Wang - Department of Philosophy, Chinese University of Hong Kong' },
        ]
      },
      {
        name: 'Honorable Mentions',
        winners: [
          { name: 'Jiuan Heng - Department of Philosophy, National University of Singapore' },
          { name: 'Li-Hsiang (Lisa) Lee - Department of Philosophy, University of Hawaii, Manoa' },
        ]
      }
    ]
  }
];

const PastISCPAwardess = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2>{`The CHARLES WEI-HSUN FU Annual Essay Contest in Field-Being Philosophy and Non-Substantialist Thought.`}</H2>
        <Subtitle>{`Each of the two winners recieves an award of $1000, plus transportation to the conference (up to $500), with board and lodging at the conference provided by IIFB($450):`}</Subtitle>
      </div>
      {
        awards.map((item) => (
          <AwardCard key={item.title}>
            <div className="award__title">{item.title}</div>
            <div className="award__description">{item.description}</div>
            {item.winners?.length > 0 &&
              <UL>
                {item.winners?.map((winner, index) => (
                  <li key={`${winner.name}__${index}`} className="award__winner-name">
                    <b>{winner.name}</b>
                    <div>{winner.description}</div>
                  </li>
                ))}
              </UL>
            }
            {item.categories?.length > 0 && (
              <>
                {item.categories?.map((category, cIndex) => (
                  <div key={cIndex}>
                    <b>{category.name}</b>
                    <UL>
                      {category.winners?.map((winner, index) => (
                        <li key={`${winner.name}__${index}`} className="award__winner-name">
                          <div>
                            <b>{winner.name}</b>
                            <div>{winner.description}</div>
                            <div>{winner.note}</div>
                          </div>
                          {winner.imagePath && <img src={winner.imagePath} width="160" height="90" style={{ objectFit: 'cover', marginTop: '4px' }} />}
                        </li>
                      ))}
                    </UL>
                  </div>
                ))}
              </>
            )}
          </AwardCard>
        ))
      }
      <Divider />
      <div style={{ margin: '50px 0px' }}>
        <H2>{`Biennial CHARLES WEI-HSUN FU-ISCP Essay Contest in Asian Philosophy Past Awardees`}</H2>
      </div>
      {
        ISCPAwards.map((item) => (
          <AwardCard key={item.title}>
            <div className="award__title">{item.title}</div>
            <div className="award__description">{item.description}</div>
            {item.winners?.length > 0 &&
              <UL>
                {item.winners.map((winner, index) => (
                  <li key={`${winner.name}__${index}`} className="award__winner-name">
                    <b>{winner.name}</b>
                    <div>{winner.description}</div>
                  </li>
                ))}
              </UL>
            }
            {item.categories?.length > 0 && (
              <>
                {item.categories?.map((category, cIndex) => (
                  <div key={cIndex}>
                    <b>{category.name}</b>
                    <UL>
                      {category.winners?.map((winner, index) => (
                        <li key={`${winner.name}__${index}`} className="award__winner-name">
                          <div>
                            <b>{winner.name}</b>
                            <div>{winner.description}</div>
                            <div>{winner.note}</div>
                          </div>
                          {winner.imagePath && <img src={winner.imagePath} width="160" height="90" style={{ objectFit: 'cover', marginTop: '4px' }} />}
                        </li>
                      ))}
                    </UL>
                  </div>
                ))}
              </>
            )}
          </AwardCard>
        ))
      }
    </Box>
  );
};

export default PastISCPAwardess;