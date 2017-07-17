import React, { Component } from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class Route extends Component {
  render() {
    return (
      <Router>
        <Scene cardStyle={ {backgroundColor: '#fff'} } key="root">
          <Scene key="loginForm" component={LoginForm} title="Please Login" />
          <Scene
            onRight={() => Actions.createEmployee()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            renderLeftButton={true} />
          <Scene key="createEmployee" component={EmployeeCreate} title="Create Employee"/>
        </Scene>
      </Router>
    );
  }
}

export default Route;
