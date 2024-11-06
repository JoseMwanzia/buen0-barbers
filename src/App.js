import React from 'react';
import './App.css';
import  Navbar  from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Prices from './components/Prices';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom';
import MorePrices from './components/MorePrices';
import Footer from './components/Footer';

function App() {

  return (
  <>
  <Navbar/>
  <Switch>

    <Route path="/moreservices">
      <MorePrices/>
    </Route>

    <Route exact path="/">
        <Home/>,
        <Services/>,
        <AboutUs/>,
        <Prices/>,
        <Testimonials/>,
        <Contact/>
    </Route>
    
  </Switch>
  <Footer/>
  </>
  );
}

export default App;
