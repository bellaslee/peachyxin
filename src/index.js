import './assets/css/styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page from './Components/Page';
import Commissions from './pages/Commissions'
import Portfolio from './pages/Portfolio';
import About from './pages/About';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route path="/" element={<Home />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </HashRouter>
);