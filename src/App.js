import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import LanPasaa from './components/websites/LanPasaa/LanPasaa';

function App() {
  return (
    <BrowserRouter>
      <LanPasaa />
    </BrowserRouter>

  );
}

export default App;
