import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Essay from './pages/Essay';
import Scholarship from './pages/Scholarship';
import Publications from './pages/Publications';
import { routePathConfig } from './route';

const Container = styled.div`
  height: calc(100vh - 64px);
  overflow-y: auto;
`;

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <NavigationBar />
      <Container>
        <Routes>
          <Route path={routePathConfig.home} element={<Home />} />
          <Route path={routePathConfig.about} element={<About />} />
          <Route path={routePathConfig.contact} element={<Contact />} />
          <Route path={routePathConfig.essay} element={<Essay />} />
          <Route path={routePathConfig.scholarship} element={<Scholarship />} />
          <Route path={routePathConfig.publications} element={<Publications />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
