import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Essay from './pages/Essay';
import Scholarship from './pages/Scholarship';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/essay'} element={<Essay />} />
      <Route path={'/scholarship'} element={<Scholarship />} />
    </Routes>
  );
}

export default App;
