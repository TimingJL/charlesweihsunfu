import React from 'react';
import Box from '@mui/material/Box';
import { H2, Subtitle, P, OL } from 'src/components/commonStyled';

const Hermeneutics = () => {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, padding: 4, boxShadow: 1 }}>
      <H2>{`CREATIVE HERMENEUTICS`}</H2>
      <Subtitle>{`Dr. Fu's innovative methodology for dealing with texts, especially philosophical texts, has been applied in many venues, from Confucianism and Buddhism to Amero-European thought. The goal is to elicit a faithful reading of past thought and thinkers that is simultaneously applicable to the present, while leaving room for further open-ended explorations in the future.`}</Subtitle>
      <div>
        <P>
          {`Creative hermeneutics represents an innovative methodological technique for exploring the deeper meanings of various metaphysical and religious ideas, especially those that are nonconceptual or nondualistic in nature. In addition, it allows us to un-cover the underlying structure of a particular system of thought, such as Taoist metaphysics. The framework of creative hermeneutics consists of the following five dialectical steps:`}
        </P>
        <OL>
          <li>{`What did a thinker, such as Lao Tzu, actually say?`}</li>
          <li>{`What was meant by that locutionary speech-act? Has it been expressed with sufficient clarity? If not, how can the underlying intention be made manifest?`}</li>
          <li>{`What could have been intended? To determine this all the possible implications of the original expressions need to be examined to ferret out those implications with demonstrated hermeneutic priority.`}</li>
          <li>{`Regardless of the actual expressions or their underlying intentions, what should be said? This requires a critical, philosophical judgment, that may well entail modifications in the original thought.`}</li>
          <li>{`Assuming the original thinker were alive today, what would he or she say regardless of original intentions? The creative hermeneutician must demand of the thinker reassess the content of the thought and revise it accordingly.`}</li>
        </OL>
        <P>
          {`In developing this method, I have been greatly influenced by Heidegger's ingenious philosophical reflections on hermeneutics, as variously discussed in such works as Sein und Zeit, Kant und das Problem der Metaphysik, Was heisst Denken?, and "Aus einem Gesprach von der Sprache." J. L. Austin's philosophical analysis of the contextual subtleties of performative speech-acts also has been a source of inspiration for the embryonic formation of creative hermeneutics.`}
        </P>
      </div>
    </Box>
  );
};

export default Hermeneutics;