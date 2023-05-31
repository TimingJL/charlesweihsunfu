import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Essay from './pages/Essay';
import Scholarship from './pages/Scholarship';
import Publications from './pages/Publications';
import { routePathConfig } from './route';

function App() {
  return (
    <Routes>
      <Route path={routePathConfig.home} element={<Home />} />
      <Route path={routePathConfig.about} element={<About />} />
      <Route path={routePathConfig.contact} element={<Contact />} />
      <Route path={routePathConfig.essay} element={<Essay />} />
      <Route path={routePathConfig.scholarship} element={<Scholarship />} />
      <Route path={routePathConfig.publications} element={<Publications />} />
    </Routes>
  );
}

export default App;
