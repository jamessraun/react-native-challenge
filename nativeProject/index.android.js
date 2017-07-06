import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './app/screens/HomeScreen';
import DetailScreen from './app/screens/DetailScreen';
import {App} from './app/config/router'

class nativeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('nativeProject', () => nativeProject);
