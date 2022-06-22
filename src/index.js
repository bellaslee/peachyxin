import './assets/styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={Home} />
    </Routes>
  </HashRouter>
);