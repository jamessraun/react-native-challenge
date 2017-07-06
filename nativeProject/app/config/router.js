import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

export const App = StackNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: {
      title:'Find News',
    }
  },
  Detail: {
    screen:DetailScreen,
    navigationOptions: {
      title:'Detail News',
    }
  },
})
