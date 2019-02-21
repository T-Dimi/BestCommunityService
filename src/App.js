import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import EquipmentPage from './components/pages/equipmentPage';
import ShuttlePage from './components/pages/shuttlePage';
import HomeCarePage from './components/pages/homeCarePage';
import ClassesPage from './components/pages/classesPage';
import CateringPage from './components/pages/cateringPage';
import RoomPage from './components/pages/roomPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Equipment' component={EquipmentPage} />
            <Route exact path='/Shuttle' component={ShuttlePage} />
            <Route exact path='/HomeCare' component={HomeCarePage} />
            <Route exact path='/Classes' component={ClassesPage} />
            <Route exact path='/Catering' component={CateringPage} />
            <Route exact path='/Rooms' component={RoomPage} />


        </div>
      </Router>

    );
  }
}

export default App;
