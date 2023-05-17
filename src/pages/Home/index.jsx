import * as React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';

const Container = styled.div`

`;

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


const Home = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <NavigationBar />
      </ElevationScroll>
      <Toolbar />
      <Container>
        <HeroSection />
      </Container>
    </React.Fragment>
  );
};

export default Home;