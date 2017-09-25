import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation'

import PageAScreen from './components/PageAScreen'
import PageBScreen from './components/PageBScreen'

const App = StackNavigator({
  PageA: {
    screen: PageAScreen
  },
  PageB: {
    screen: PageBScreen
  }
})

export default App