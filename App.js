import React from 'react';
import {
  StackNavigator
} from 'react-navigation'

// Screens
import PageAScreen from './components/PageAScreen'
import PageBScreen from './components/PageBScreen'
import PhotoScreen from './components/PhotoScreen'
import PhotoSelectScreen from './components/PhotoSelectScreen'

const App = StackNavigator({
  PageA: {
    screen: PageAScreen
  },
  PageB: {
    screen: PageBScreen
  },
  Photo: {
    screen: PhotoScreen
  },
  PhotoSelect: {
    screen: PhotoSelectScreen
  },
})

export default App