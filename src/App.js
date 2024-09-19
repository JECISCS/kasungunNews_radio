
import Navbar from './components/Navbar';

import React from 'react';
import AsideSection from './components/AsideSection';

import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import CommentSection from './components/Commentsection'; /* no error here bruuh*/
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
     <AsideSection/>
     <CommentSection/>
     <Footer/>
    
     
    </div>
  );
}

export default App;















/*
 // <Navbar/>
      <Hero/>
      <LatestNews/>
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
    <React.Fragment>
      <Navbar/>
        <Header />
      <Hero />
      <LatestNews />
    </React.Fragment>
    </div>
  );
}

export default App;*/
