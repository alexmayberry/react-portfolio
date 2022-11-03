import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Portfolio from "./components/Portfolio.js";
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Main from './components/Main.js';
import Footer from './components/Footer';
import './App.css';

const name = "Alex";


function App() {

  const [currentPage, setCurrentPage] = useState('Portfolio');
  
  const renderPage = () => {
  if ( currentPage === 'About' ) return <About />;
  if ( currentPage === 'Portfolio' ) return <Portfolio />;
  if ( currentPage === 'Contact' ) return <Contact />;
  }
  
  const changePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <CssBaseline />
      <Header currentPage={ currentPage } changePage={ changePage }/>
      <Main renderPage={renderPage}/>
      <Footer />
    </div>
  );
}

export default App;
