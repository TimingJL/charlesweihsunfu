import * as React from 'react';

import HeroSection from './HeroSection';
import Introduction from './Introduction';
import Footer from './Footer';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Introduction />
      <Footer />
    </React.Fragment>
  );
};

export default Home;