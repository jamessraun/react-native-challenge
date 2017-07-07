import React, { Component } from 'react';
import { Provider } from 'react-redux';
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

import store from './app/store'

class nativeProject extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('nativeProject', () => nativeProject);
