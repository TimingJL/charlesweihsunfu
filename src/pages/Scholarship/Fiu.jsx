import React from 'react';
import Box from '@mui/material/Box';
import { H2, Subtitle, P, UL, AwardCard } from 'src/components/commonStyled';

const awards = [
  {
    title: '2021 Scholarship Recipients',
    description: 'Due to the COVID-19 Pandemic, FIU canceled all summer study abroad programs for 2021.',
    winners: []
  },
  {
    title: '2020 Scholarship Recipients',
    description: 'Due to the COVID-19 Pandemic, FIU canceled all summer study abroad programs for 2020.',
    winners: []
  },
  {
    title: '2019 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Raul Caner Cruz',
        description: 'Raul Caner Cruz is an Asian Studies MA student interested in researching Japanese Fox Folklore and learning Japanese. He participated in the Ritsumeikan Summer Study Abroad Program in Kyoto, Japan for five weeks. He was able to visit many temples and shrines to gain a deeper insight behind Shinto traditions.'
      },
      {
        name: 'Izak Kertznus',
        description: 'Izak Kertznus studied with one of his greatest living inspirations, the world renowned Japanese Flutist, Shigenori Kudo. He also participated in the Kirishima International Music Festival where he was able to enhance his Japanese language skills.'
      },
      {
        name: 'Barsha Manandahar',
        description: 'Barsha Manandahar conducted research on post-disaster recovery of the Nepal earthquake in 2015 for her Ph.D. in Public Policy and Administration.'
      },
      {
        name: 'Nanda Singh',
        description: 'Nanda Singh is pursing an Asian Studies MA and it set to graduate this fall. For her MA research, she is focusing on contemporary marriage in Japan. She participated in the Ritsumeikan Summer Study Abroad Program in Kyoto, Japan. She was able to enhance her Japanese language skills and is interested in applying to the JET Program.'
      },
    ]
  },
  {
    title: '2018 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Virginia Aleman',
        description: 'Virginia Aleman is a double major student in Asian Studies and International Relations, pursuing a Certificate in Chinese Studies. She participated in the China Language and Culture Study Abroad program in Hangzhou, Zhejiang Province in China. She was able to improve her speaking skills in Mandarin and has hopes of working for an embassy in the near future.'
      },
      {
        name: 'Amaya Bueno',
        description: 'Amaya Bueno is an Asian Studies MA student who went to South Korea over the summer and attended Lexis Korea where she took an intensive Korean course in preparation for TOPIK, the Korean language proficiency exam.'
      },
      {
        name: 'Justin Raymond Hernandez',
        description: 'Justin Raymond Hernandez is an Asian Studies major completing a Certificate in Asian Globalization and Latin America, as well as a minor in Geography. He will be traveling this Fall 2018 to Osaka, Japan to learn Japanese at Kansai Gaidai University.'
      },
      {
        name: 'Kelena Gomez',
        description: "Kelena Gomez is pursuing an International Relations major with a minor in Asian Studies. Starting this Fall 2018, she will be traveling to South Korea to attend Korea University and improve her Korean language skills for a year. After graduation, she hopes to pursue a master's degree in Korean Studies."
      },
      {
        name: 'Jacob Foley',
        description: "Jacob Foley is a double major student in Psychology and Asian Studies also pursuing a Certificate in Chinese Studies. This Summer 2018, Jacob went to China for the Language and Culture Study Abroad program in Hangzhou to improve his language proficiency."
      },
    ]
  },
  {
    title: '2017 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Katrina Ankrum',
        description: 'Katrina Ankrum is an Asian Studies M.A student who worked this summer with Dr. Heine in compiling commentaries on Dōgen’s Shōbōgenzō (正法眼蔵) and assisted with Chinese & Japanese translations in relation to her M.A. thesis. This project will appear as a special article in the 2017 issue of Japan Studies Review.'
      },
      {
        name: 'Zenel Garcia',
        description: 'Zenel Garcia – Hong Kong & South Korea. Zenel is part of the Asian Studies MA/PhD in International Relations program. He went to Hong Kong and Seoul in June 2017 to present his research on China and Eurasia at the International Studies Association International and AAS-in-Asia conferences.'
      },
      {
        name: 'Arabella Jones',
        description: 'Arabella Jones – Japan. Arabella is a student in the International Relations BA/Asian Studies Second Major, with Japanese and AGLA Certificates. She studied abroad with the Honors College over the summer of 2017 in Tokyo and Hokkaido.'
      },
      {
        name: 'Chantelle Mnayariji',
        description: 'Chantelle Mnayariji – Vietnam, Cambodia & Thailand. Chantelle is pursuing an Asian Studies Certificate and studied abroad in Vietnam, Cambodia, and Thailand with the Honors College over the summer of 2017 researching American Influence in South East Asia.'
      },
      {
        name: 'Lisa Niven',
        description: 'Lisa Niven – Japan. Lisa is an Asian Studies graduate student slated for summer 2017 graduation. She conducted research in Japan for her Master’s Essay “The Multi-Cultured Japanese Project: A Look Into the Life Experiences of Multi-Cultured Japanese People Inside and Outside of Japan.”'
      },
      {
        name: 'Margarita Rentis',
        description: 'Margarita Rentis – Japan. Margarita is a dual degree student in International Business & Management and Japanese Area Studies Major. She travelled this June-August 2017 to Hikone, Japan to attend Shiga University for an intensive Japanese language program.'
      },
      {
        name: 'Adriana V. Schiavo',
        description: 'Adriana V. Schiavo – Japan. Adriana is pursuing an Asian Studies BA, and English as a Second Major. She studied abroad with the FIU Intensive Language and Culture program in Kyoto over the summer.'
      },
      {
        name: 'Ashley Webb',
        description: 'Ashley Webb – South Korea. Ashley is an Asian Studies MA student who went to South Korea to take a ten-week intensive language program at the Korean Language Education Center of Seoul National University and to complete research for her Master’s Essay “The Impact of Beauty Culture in South Korea: A Society Geared Toward Physical Appearance.”'
      },
    ]
  },
  {
    title: '2016 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'David Dayton',
        description: 'David Dayton – Thailand. David is an Asian Studies graduate student who conducted research in Bangkok, Thailand during Summer 2016 for his Asian Studies Master of Arts essay, which focuses on daily religious practices at Arawan Shrine and Temple of the Emerald Buddha.'
      },
      {
        name: 'Jadiel Hernandez',
        description: 'Jadiel Hernandez – Japan. Jadiel is pursuing an International Relations BA, a minor in Asian Studies, and a certificate in Japanese Studies. Jadiel spent a full academic year studying abroad at Ritsumeikan University in Kyoto, Japan.'
      },
      {
        name: 'Bianca Trifoi',
        description: 'Bianca Trifoi – South Korea. Bianca is an Asian Studies graduate student who is enrolled in a ten-week intensive language program at the Korean Language Education Center of Seoul National University in Seoul, South Korea.'
      },
      {
        name: 'Jana Nudelman',
        description: 'Jana Nudelman – China. Jana is double majoring in Asian Studies, specializing in East Asian Studies, and International Relations. Jana is studying abroad at Beijing Language and Culture University in Beijing, China.'
      },
      {
        name: 'Franklin Hernandez',
        description: 'Franklin Hernandez – China. Franklin graduated with his BA in Asian Studies, majoring in Chinese Area Studies. He completed a two-month intensive language course at Soochow University in Suzhou, China. He is now pursuing his MA in Asian Studies.'
      },
      {
        name: 'Joshua Seidler',
        description: 'Joshua Seidler – Japan. Joshua graduated with his BA in Asian Studies, majoring in Japanese Area Studies. Joshua experienced cultural immersion in a two-week study abroad program in Beppu, Japan this summer.'
      },
    ]
  },
  {
    title: '2015 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Jennifer Beaty',
        description: 'Jennifer Beaty – Japan. Jennifer will attend an intensive language program at KCP International in Tokyo, Japan during Summer 2015. Jennifer is an Asian Studies graduate student and is also receiving a graduate certificate in Japanese Studies.'
      },
      {
        name: 'David Dayton',
        description: 'David Dayton – Taiwan. David will attend the Chinese Language Program at the Chinese Language Education Center at the National Taipei University of Education during Summer 2015. David is an Asian Studies/Global and Sociocultural Studies graduate student.'
      },
      {
        name: 'Andy Fernandez',
        description: 'Andy Fernandez – Japan. Andy will attend the Buddhist Studies Program at Antioch University in Kyoto, Japan during Fall 2015. Andy is a Religious Studies major.'
      },
      {
        name: 'Franklin Hernandez',
        description: 'Franklin Hernandez – China. Franklin will study Chinese Business and Chinese Culture and Language in Hangzhou, China at Zhejiang Gongshang University during Summer 2015. He is receiving a certificate in Chinese Studies.'
      },
      {
        name: 'Marcela Lopez Bravo',
        description: 'Marcela Lopez Bravo – Taiwan. Marcela will attend the C2+ Summer Course: Chinese Language, Culture, and Translation at National Taiwan University. Marcela is an Asian Studies graduate student.'
      },
      {
        name: 'Pamela Suguimitzu',
        description: 'Pamela Suguimitzu – Japan. Pamela will attend the FIU Intensive Language and Culture Program in Kyoto, Japan during Summer 2015. Pamela is an Asian Studies major.'
      },
      {
        name: 'Randall Tallent',
        description: 'Randall Tallent – Japan. Randall will attend an intensive language program at KCP International in Tokyo, Japan during Summer 2015. Randall is an Asian Studies graduate student and is also receiving a graduate certificate in Japanese Studies.'
      },
    ]
  },
  {
    title: '2014 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Guillermo Bonilla',
        description: 'Guillermo Bonilla – Japan. Guillermo will attend the intensive language and culture program at Ritsumeikan University during Summer 2014. Guillermo is majoring in Asian Studies.'
      },
      {
        name: 'Ana Gomez',
        description: 'Ana Gomez – Japan. Ana will attend Kanda University in Chiba, Japan during Fall 2014. She is a Japanese Studies Area Major and is also receiving a Certificate in Japanese Studies.'
      },
      {
        name: 'Rachel Klein',
        description: 'Rachel Klein – China. Rachel will attend a courses on Chinese language and East Asian History and Culture at Zhejiang University during Summer 2014.'
      },
      {
        name: 'Lisa Niven',
        description: 'Lisa Niven – Japan. Lisa will attend Kansai Gaidai in Osaka, Japan for Fall 2014 and Spring 2015. Lisa is receiving a B.A. in Asian Studies and a Certificate in Japanese Studies.'
      },
      {
        name: 'Kevin Quinn',
        description: 'Kevin Quinn – Japan. Kevin will participate in the Kyoto Intensive Language and Culture Program during Summer 2014. Kevin is double majoring in International Relations and Asian Studies, and is receiving a Certificate in Japanese Studies.'
      },
      {
        name: 'Geri Ross',
        description: 'Geri Ross – Japan. Geri will participate in the International Student Exchange (ISE) Program at Kansai Gaidai University in Osaka, Japan during Fall 2014. Geri is double majoring in Japanese Area Studies and English, with a minor in Japanese Language and Literature.'
      },
      {
        name: 'Jean Vergara',
        description: 'Jean Vergara – Japan. Jean will attend the intensive language and culture program at Ritsumeikan University in Kyoto, Japan during Summer 2014. Jean is majoring in Japanese Area Studies.'
      },
      {
        name: 'Shalisha Witherspoon',
        description: 'Shalisha Witherspoon – Japan. Shalisha will attend Ritsumeikan University for the Intensive Language and Culture Program during Summer 2014. Shalisha is majoring in Computer Information Technology with a minor in Japanese Language and Literature and a Certificate in Japanese Studies.'
      },
      {
        name: 'Shonda Witherspoon',
        description: 'Shonda Witherspoon – Japan. Shonda will attend Ritsumeikan University for the Intensive Language and Culture Program during Summer 2014. Shonda is majoring in IT Software with a minor in Japanese Language and Literature and a Certificate in Japanese Studies.'
      },
    ]
  },
  {
    title: '2013 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Jacob Burns',
        description: 'Jacob Burns - Japan. Jacob will study Japanese Language and Culture at Ritsumeikan University in Kyoto during Summer 2013. He is minoring in Japanese Language and Criminal Justice as well as the Certificate in Japanese Studies.'
      },
      {
        name: 'William Colachicco',
        description: 'William Colachicco - Thailand. William will visit and study at many temples and caves in Thailand which are renowned for their association with famous Thai monks such as Ajahn Mun and Ajahn Chah during Summer 2013.'
      },
      {
        name: 'Lukas Danner',
        description: 'Lukas Danner - China. Lukas will travel this summer to attend the 10th Annual East Asia Security Symposium and Conference at China Foreign Affairs University in Beijing. He will present a paper on the recent Diaoyu/Senkaku Islands conflict with Japan as a case of Regional Security Complex Theory.'
      },
      {
        name: 'Cory Hardaker',
        description: 'Cory Hardaker - China. Cory will travel this summer to attend the Humanistic Buddhist Monastic Life Program in China at the Fuyan Temple at Heng Shan, Hunan Province. He is pursuing the M.A. in Asian Studies.'
      },
      {
        name: 'Magdaline Jamass',
        description: 'Maria Magdaline Jamass - South Korea. Maria Magdaline will spend the Summer term studying Korean language and culture at Ewha Womans University in South Korea. She devoted time to research the topic of Islam in Korea and find primary sources for her thesis for the M.A. in Asian Studies.'
      },
      {
        name: 'Lopez Bravo',
        description: 'Marcela Lopez Bravo - China. Marcela will be going to China to research the distinctive linguistic features between Mandarin and English to prove a better understanding of how Mandarin is acquired by English speakers during Fall 2013.'
      },
      {
        name: 'George Pearson',
        description: 'George Pearson - Japan. George will be studying Japanese language and culture at Kansai Gadai University in Osaka during Fall 2013 and Spring 2014. He is pursuing a B.A. in Fine Arts and Asian Studies.'
      },
      {
        name: 'Dylan Veide',
        description: 'Dylan Veide - China. Dylan will be travelling to China this summer to improve his skils in Chinese language and immerse in Chinese culture in preparation for a future career with the State Department. He is pursuing a B.A. in International Relations and the Chinese Certificate.'
      },
    ]
  },
  {
    title: '2012 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Shivani Bothra',
        description: 'Shivani Bothra - India. Shivani attended Summer School for Jain Studies in India in order to interact with Jain communities and participate in cultural activities from both Digambar and Shwetambar communities. This will help her write her thesis on the Anuvrat movement, an expression of modern Jainism.'
      },
      {
        name: 'Stephanie De Bedout',
        description: 'Stephanie De Bedout - Japan. Stephanie studied in Japan to improve her language skills and gain first-hand experience about Japanese culture. She stayed at the Kyoto Language Intensive Program during the summer.'
      },
      {
        name: 'Darrin Dorsey',
        description: 'Darrin Dorsey - Japan. Darrin traveled to Japan in the summer to gain a greater cultural experience for his degree in Asian Studies and for his future career in this field.'
      },
      {
        name: 'Rebecca Fernandez',
        description: 'Rebecca Fernandez - China. Rebecca went to Hangzhou, China to take language courses at Zhejiang University during the summer.'
      },
      {
        name: 'Alexis Moore',
        description: 'Alexis Moore - Japan. Alexis traveled during the summer to Tokyo to research and acquire materials pertaining to her Master’s Essay in Asian Studies, focusing on Japanese body image.'
      },
      {
        name: 'Mariana Restrepo',
        description: 'Mariana Restrepo - India. Mariana studied in India during the summer attending a Jain studies program in four major cities: Delhi, Jaipur, Varansi, and Ladnun. She learned about Jain philosophy and practices and visited two other cities, Dharamsala and Bohdghaya, to conduct research for her graduate thesis.'
      },
      {
        name: 'Heolly Rodriguez',
        description: 'Heolly Rodriguez - Japan. Holly travled to Japan in September for three months to collect research information to supplement her thesis, based on Contemporary Japanese Art/Artists.'
      },
      {
        name: 'Gabriela Romeu',
        description: 'Gabriela Romeu - Japan. Gabriela gathered research materials in Tokyo during the summer, particularly Japanese history textbooks that are difficult to acquire in the United States for the continuation of her studies and thesis for the M.A. in Asian Studies.'
      },
      {
        name: 'Daniel Sloman',
        description: 'Daniel Sloman - Japan. Daniel is studying abroad in Kyoto, Japan at Ritsumeikan University for the 2012–2013 academic year. As an Anthropology and Asian Studies major, he desires to learn and study Japanese culture and improve his language'
      },
    ]
  },
  {
    title: '2011 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Julia Beabout',
        description: 'Julia Beabout – China. Julia participated in the Summer Intensive Chinese Language Program at the Beijing Institute for Education where she studied Mandarin, conducted research for her thesis, and interviewed Chinese families about contemporary social issues.'
      },
      {
        name: 'Karen Cespedes',
        description: 'Karen Cespedes – Taiwan. Karen won a prestigious award from the U.S. State Department to conduct a distinguished, paid internship at the American Institute in Taiwan.'
      },
      {
        name: 'Adam Johnson',
        description: 'Adam Johnson – China. Adam attended China University of Political Science and Law to participate in the Language and Chinese Law Program, continued his thesis research and studied Mandarin and a minority language.'
      },
      {
        name: 'Vanessa Ostby',
        description: 'Vanessa Ostby – China. Vanessa studied Chinese language, culture and business at Zhejiang University by participating in FIU’s summer China Study Abroad Program.'
      },
      {
        name: 'Mariana Restrepo',
        description: 'Mariana Restrepo – Nepal. Mariana participated in an intensive Sanskrit Language Program at the Center for Buddhist Studies at Rangjung Yeshe Institute at Kathmandu University, in Nepal.'
      },
    ]
  },
  {
    title: '2010 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Yogesh Dongol',
        description: 'Yogesh Dongol - Nepal. Yogesh conducted research on policy gap analysis during the summer for his MS degree in Environmental Studies.'
      },
      {
        name: 'Jason Ehlen',
        description: 'Jason Ehlen - Nanjing, China. Jason completed his MA in Asian Studies at Nanjing University. He received a prestigious scholarship from the Chinese government to study there and research Sino-Indian relations.'
      },
      {
        name: 'YuanYuan Fang',
        description: 'YuanYuan Fang - Kyoto, Japan. YuanYuan participated in a summer intensive language program at Ritsumeikan University, studying Japanese language, culture and society, as well as interviewing Japanese students and professors for research on national identity.'
      },
      {
        name: 'Rebekah Lyew-Ayee',
        description: 'Rebekah Lyew-Ayee - Hangzhou, China. Rebekah studied Chinese language, culture and business at Zhejiang University by participating in the summer China Study Abroad Program.'
      },
      {
        name: 'Maria Isabel Quevedo',
        description: 'Maria Isabel Quevedo - Kyoto, Japan. Isabel participated in the intensive summer language and culture program at Ritsumeikan University. During the fall, she continued her studies in Japan as an exchange student at Kansai Gadai University.'
      },
    ]
  },
  {
    title: '2009 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Lacey Haslam',
        description: 'Lacey Haslam, Kansai Gaidai University in Osaka, Japan. Lacey graduated with a double major in Asian Studies and International Relations and showed exceptional interest in Japanese Culture and Language.'
      },
      {
        name: 'Harriet Marin',
        description: "Harriet Marin, Zhejiang University in Hangzhou, China. Harriet completed a Master's in Asian Studies."
      },
      {
        name: 'Thomas J. Rayson',
        description: 'Thomas J. Rayson, Ritsumeikan University in Kyoto, Japan. Thomas graduated with an Asian Studies BA and was interested in Japanese Language and the art of Iaido.'
      },
      {
        name: 'Yesenia Reyeros',
        description: 'Yesenia Reyeros, Bangkok, Thailand. Yesenia pursued an Internationl Relations major with an Asian Studies minor.'
      },
      {
        name: 'Nathan Schorb',
        description: 'Nathan Schorb, Kanda University in Chiba City, Japan. Nathan was an International Business major and studied both Japanese and Chinese as well as practiced Kendo and Taiko.'
      },
    ]
  },
  {
    title: '2008 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Doria Bareket',
        description: 'Doria Bareket, an Asian Studies Major, spent a semester at Ritsumeikan University in Kyoto, Japan in fall 2008.'
      },
      {
        name: 'Greg Burrow',
        description: 'Greg Burrow, a Japanese Studies Certificate student, traveled to Hiroshima for a seminar on the atomic bombing.'
      },
      {
        name: 'Stephanie Cua',
        description: 'Stephanie Cua, a Japanese Studies Certificate student, spent a year at Kansai Gaidai University in Osaka, Japan.'
      },
      {
        name: 'Boris Escalona',
        description: 'Boris Escalona, an Asian Studies Major, attended the Ritsumeikan University program in summer 2008.'
      },
      {
        name: 'Karyna Do Monte',
        description: 'Karyna Do Monte, traveled to India for studies of religion and culture in pursuit of the Graduate Asian Studies Certificate.'
      },
      {
        name: 'Yakelin Wong',
        description: 'Yakelin Wong, a Japanese Studies Certificate student, spent a semester at Kansai Gaidai University in Osaka, Japan in fall 2008.'
      },
    ]
  },
  {
    title: '2007 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: 'Jacob Dobbs',
        description: 'Jacob Dobbs traveled to China for studies of language and culture in pursuit of the Chinese Studies Certificate.'
      },
      {
        name: 'Jennifer Garcia',
        description: 'Jennifer Garcia, an Asian Studies major, participated in the 2007 summer intensive language program in Kyoto.'
      },
      {
        name: 'Marisely Rojas',
        description: 'Marisely Rojas pursued a Japanese Studies Certificate and attended the Ritsumeikan University program in summer 2007.'
      },
      {
        name: 'Jan Solomon',
        description: 'Jan Solomon conducted research in South Asia leading to her doctoral degree in International Relations.'
      },
      {
        name: 'Antonio Vega',
        description: 'Antonio Vega, an Asian Studies major, spent the Fall semester abroad at Kansai Gaidai University in Japan.'
      },
    ]
  },
  {
    title: '2006 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: '',
        description: 'Felix A. Maldonado attended Kansai Gaidai for a year exchange. Felix pursued a double major in Asian Studies.'
      },
      {
        name: '',
        description: 'David Shaw, Brian Hunting, and Teresa Montgomery participated in the 2006 Summer Intensive Language Program at Ritsumeikan University. David, an Asian Studies major pursued Japan studies for the duration of his degree. Teresa pursued a Japanese Studies Certificate and was highly active in the Anime Club, organizing activities and events with Asian Studies. Brian pursued a minor in Asian Studies and Japanese Certificate.'
      },
      {
        name: '',
        description: 'Ranju Shrestha Acharya, a graduate student, conducted research in Nepal for the M.S. thesis in Environmental Studies on plant resource policies in non-timber forest products sector in Nepal.'
      },
      {
        name: '',
        description: 'Zhang Xiu Hui, Treasurer of the International Business Honor Society, went to Thailand in the Spring semester as part of the 2006 International Business Honor Society - Global Leadership and Service Project.'
      },
    ]
  },
  {
    title: '2005 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: '',
        description: 'Yanery Andreu (Semester in Japan). Yanery, an Asian Studies major, spent the Fall 2005 semester studying at Kansai Gaidai University near Kyoto and Osaka on a student semester exchange program. He was also the recipient of a Freeman-Asia scholarship.'
      },
      {
        name: '',
        description: `Jonathan Cameron (Summer in China). Jonathan spent two weeks in China as part of Professor Chang's "Art and Education" trip.`
      },
      {
        name: '',
        description: `Christopher Pena (Summer in Japan). Christopher won an essay contest from Aichi Prefectural University's International Symposium in Partnership with EXPO 2005 Aichi, Japan "Symbiosis: Harmonious Coexistence and Our Challenge of Creating a New Age in the 21st Century." As part of this award, he attended a two-week conference at Aichi Prefectural University during the summer.`
      },
      {
        name: '',
        description: 'Kathy Stone (Summer in India). Kathy, an Environmental Studies MA student who also completed a graduate certificate in Asian Studies, conducted her thesis research in Southern India over the summer. She investigated the socio-economic challenges of restoring mangrove forests in commercial aquacultures in the area.'
      },
    ]
  },
  {
    title: '2004 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: '',
        description: 'Jelena Avramovic (Summer in China). Jelena, an Asian Studies certificate student, traveled on a special trip sponsored by International Mission on Diplomacy that enhanced her studies of global political economy.'
      },
      {
        name: '',
        description: 'Sandy Avila (Summer in Thailand). Sandy, a graduate student in Religious Studies, as well as an Asian Studies graduate certificate student, worked on a research project during the summer in Thailand that combined her interest in the study of religious ritual and performing arts, especially dance.'
      },
      {
        name: '',
        description: 'Alan Flaten (Summer in Japan)'
      },
      {
        name: '',
        description: 'Natali Garcia-Diaz (Semester in Japan).Natali, an Asian Studies B.A. student with a double major in Sociology, spent a semester at Kansai Gaidai University during Fall 2004.'
      },
      {
        name: '',
        description: 'Ronald Gonzalez (Summer in Japan)'
      },
    ]
  },
  {
    title: '2003 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: '',
        description: 'Nabin Baral (Semester in Nepal)'
      },
      {
        name: '',
        description: 'Isidro de Prat (Year in Japan). Isidro spent a year at Kanda University. He also received a scholarship from Kanda and completed the Asian Studies B.A. program.'
      },
      {
        name: '',
        description: 'Bryna Griffin (Summer in Thailand). Bryna, a graduate student in Environmental Studies, worked on a research project in Thailand in the summer.'
      },
      {
        name: '',
        description: 'Aviva Menashe (Year in Japan) Aviva is also an Asian Studies B.A. student, and will be spending a year at Kansai Gaidai University in Osaka.'
      },
      {
        name: '',
        description: 'Diana Ter-ghazaryan (Summer in Kyrgyzstan). Diana, a graduate student in Environmental Studies, worked on a research project in the summer in Kyrgyzstan. She completed the graduate certificate in Transitional and Regional Studies with a concentration on Asia.'
      },
      {
        name: '',
        description: 'Nilesh Timilsina (Semester in Nepal)'
      },
    ]
  },
  {
    title: '2002 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: '',
        description: 'Luis Dionisio (Year in Japan)'
      },
      {
        name: '',
        description: 'Dareth Iseda (Summer in Japan)'
      },
      {
        name: '',
        description: 'Daniell Jaramillo (Semester in Japan)'
      },
      {
        name: '',
        description: 'Timothy Knapp (Summer in Japan)'
      },
      {
        name: '',
        description: 'Damaris Ramos (Conference in Malaysia)'
      },
    ]
  },
  {
    title: '2001 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: '',
        description: 'Angel Drolet (Semester in Japan). Angela spent a semester abroad at Kansai Gaidai in Japan.'
      },
      {
        name: '',
        description: 'Christian Ruehling (Semester in Japan). Christian spent a semester abroad at Kansai Gaidai in Japan.'
      },
      {
        name: '',
        description: 'Jessica Satanonchai (Summer in China). Jessica, an Asian Studies B.A. student, spent three months studying in Xian, China.'
      },
    ]
  },
  {
    title: '2000 Scholarship Recipients',
    description: '',
    winners: [
      {
        name: '',
        description: 'Marsha Lance (Summer in China)'
      },
      {
        name: '',
        description: 'Wendy Lo (Semester in Japan). Wendy, an International Business student, spent a semester abroad at Kansai Gaidai in Japan.'
      },
      {
        name: '',
        description: 'Yale Needel (Semester in India). Yale, a graduate student in Religious Studies, researched his MA thesis in India.'
      },
    ]
  },
];

const Fiu = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <div style={{ margin: '50px 0px' }}>
        <H2>{`THE FU FOUNDATION SCHOLARSHIP AT FIU`}</H2>
        <Subtitle>{`$2000 in travel grants to Asia provided annually for students of the Asian Studies Institute Florida International University, Miami, Florida.`}</Subtitle>
        <Subtitle>
          <P>{`Scholarship application details can be found at the following link:`}</P>
          <a href="https://asian.fiu.edu/study-abroad/scholarships/fu-foundation-scholarship/">{`https://asian.fiu.edu/study-abroad/scholarships/fu-foundation-scholarship/`}</a>
        </Subtitle>
      </div>
      <br />
      <b>Congratulations to the Fu Foundation Award recipients!</b>
      {
        awards.map((item) => (
          <AwardCard key={item.title}>
            <div className="award__title">{item.title}</div>
            <div className="award__description">{item.description}</div>
            <UL>
              {item.winners.map((winner, index) => (
                <li key={`${winner.name}__${index}`} className="award__winner-name">
                  <b>{winner.name}</b>
                  <div>{winner.description}</div>
                </li>
              ))}
            </UL>
          </AwardCard>
        ))
      }
    </Box>
  );
};

export default Fiu;