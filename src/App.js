import React from 'react';
import './App.css';

import Home from './pages/home';
import Rooms from './pages/rooms';
import Singlerooms from './pages/singleRoom';
import Error from './pages/error';
import Navbar from './components/navbar';

import {Route, Switch, Router} from 'react-router-dom';

function App() {
  return (
  <> 
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={Singlerooms} />
      <Route component={Error} />
    </Switch>
   </>)
}

export default App;
