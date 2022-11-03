import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './components/Main.js';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Main/>
      <Footer />
    </div> 
  );
}

export default App;
