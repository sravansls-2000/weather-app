import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <footer>@sravanKumar</footer>
    </div>
  );
}

export default App;
