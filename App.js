import React from 'react';
import {
  StackNavigator
} from 'react-navigation'

import PageAScreen from './components/PageAScreen'
import PageBScreen from './components/PageBScreen'
import PhotoScreen from './components/PhotoScreen'

const App = StackNavigator({
  PageA: {
    screen: PageAScreen
  },
  PageB: {
    screen: PageBScreen
  },
  Photo: {
    screen: PhotoScreen
  }
})

export default App