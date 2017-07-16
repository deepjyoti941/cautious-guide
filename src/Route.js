import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import {Scene, Router} from 'react-native-router-flux';

class Route extends Component {
  render() {
    return (
      <Router>
        <Scene cardStyle={ {backgroundColor: '#fff' } } key="root">
          <Scene key="LoginForm" component={LoginForm} title="Please Login"/>
        </Scene>
      </Router>
    );
  }
}

export default Route;
