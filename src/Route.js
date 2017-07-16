import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

class Route extends Component {
  render() {
    return (
      <Router>
        <Scene cardStyle={ {backgroundColor: '#fff' } } key="root">
          <Scene key="loginForm" component={LoginForm} title="Please Login" />
          <Scene
            onRight={() => console.log('right')}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            renderLeftButton={true}/>
        </Scene>
      </Router>
    );
  }
}

export default Route;
