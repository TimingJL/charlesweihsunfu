import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import AvatarPath from '../../assets/avatar.jpeg';
const Remembering = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <h2 id="section-1" className='about-title'>REMEMBERING DR. FU</h2>
      <div>
        <img src={AvatarPath} style={{ borderRadius: '4px' }} />
      </div>
      <Divider />
      <h3 style={{ textAlign: 'left', fontWeight: '900', marginBottom: '20px' }}>Friends and colleges share unforgettable anecdotes</h3>
      <div>
        <strong>DR. GEORGE C. H. SUN</strong>
        <br />
        founder and president of the Thome H. Fang Institute: <a href="http://www.thomehfang.com" target="_blank" rel="noreferrer">http://www.thomehfang.com</a>
      </div>
      <div>
        {`This picture of Charles reminds me of many fine moments we had together in early 60s teaching in the same college [National Taiwan University in Taipei] (different departments though). We ate at the same cafeteria. Once we were both at Thome's [the late Professor Thome H. Fang], he was there sometime before me. I remember him recommending UC Berkeley in preference to UCLA, but I already took UCLA. Had I been thus advised earlier, I might have taken another course.`}
      </div>
      <div>
        {`Charles told me in 1976, in Denver, Colorado, that Thome [Fang] gave him a book list on Buddhist studies, including 300 tomes. To Thome he was always grateful for initiation, though temperamentally he found himself closer to Professors Hsu Fu-guan and Mou Tsong-san, according to his own autobiographical account. He even intimated me that Fang's scholarship in Buddhism IS really remarkable! What was the Master's [Professor Fang's] impression of him? "Of all my students teaching abroad or in the US, only Fu Wei-hsun is working really hard; the others all fool around. . ."`}
      </div>
      <div>
        {`In 1984, in Stony Brook, NY, we had a brief talk in his room; he said half-seriously and half- jokingly, "There is one aspect of our Master Fang which only you, Old Sun, can continue and develop?" "Which aspect?" "His literary brilliance (wen cai), his poetical talents and quality,... no other students have such affinity with him as you do."`}
      </div>
      <div>
        {`We had not been very familiar with each other, though we shared the same space in the same college at Taita during in our undergraduate days. We had met no more than three times for a more or less close conversation, in Athens [Georgia] (for an interview), in San Francisco, and in Stony Brooks (for the ISCP conference). In San Francisco, Charles said, "George, I always take you as a Taoist, like Chuangtzu; to my surprise, you also can be a Legalist as an administrator. . . . Toast!" Beer was dear to both of us then. In Stony Brook, he told me, "We haven't met often. But each time we meet, you impress me (a little) more deeply . . . ," adding he read my translation of Thome's major work and other stuff. Did Charles sometime sound like a diplomat if he chose to? He was deceptively blunt and rude. When we were at the same table in Taipei, Lewis E. Hahn asked me, "Who is that young scholar who seems to be rude?" I told him who he was.`}
      </div>
      <div>
        {`He kept his whole being in good cheer. He told me, of all music, he loved Beethoven most. Neither "tragedy" nor "comedy" is a fitting characterization for Charles the man and his career.`}
      </div>
      <Divider />
      <h3 style={{ textAlign: 'center', fontWeight: '900' }}>DID YOU KNOW???</h3>
      <div>{`Billionaire John W. Kluge, president of Metromedia Company, has established the equivalent of a Nobel Prize focused on the Humanities, the $1 million Kluge Prize for Lifetime Intellectual Achievement, observing:`}</div>
      <div style={{ background: 'rgb(241 250 255)', padding: '24px' }}>{`I have felt for a long time that humanities and social sciences are quite often considered secondary citizens.`}</div>
      <div>{`Dr. Fu often lamented the lack of a Nobel Prize in Philosophy, for which he would have been an ideal condidate!`}</div>
    </Box>
  );
};

export default Remembering;
