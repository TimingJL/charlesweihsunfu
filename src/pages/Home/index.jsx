import * as React from 'react';

import HeroSection from './HeroSection';
import Introduction from './Introduction';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Introduction />
    </React.Fragment>
  );
};

export default Home;