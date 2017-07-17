import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Route from './Route';

console.disableYellowBox = true;

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB0eBLNO-5RwIakMsC-bUpZOywPovsjn58',
      authDomain: 'react-employee-manager.firebaseapp.com',
      databaseURL: 'https://react-employee-manager.firebaseio.com',
      projectId: 'react-employee-manager',
      storageBucket: 'react-employee-manager.appspot.com',
      messagingSenderId: '713533005772'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  }
}


export default App;
