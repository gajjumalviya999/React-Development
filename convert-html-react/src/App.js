import React from 'react';
import './App.css';
import Header from './Header'
import Jumbotron from "./jumbotron";
import Feature from './feature';
import GetInTouch from "./GetInTouch";
import Footer from './footer'
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Jumbotron/>
      <Feature/>
      <GetInTouch/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
