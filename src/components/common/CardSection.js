// import library for making Component
import React, { Component } from 'react';
import {
  View
} from 'react-native';

// Make a component
class CardSection extends Component {


  render() {
    return (
      <View style={[styles.containerStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

// Make the component available to other parts of the app
export {CardSection};
