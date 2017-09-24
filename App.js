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

// import PageA from './components/pageA.js'
// import PageB from './components/pageB.js'

// const PageAScreen = ({navigation}) => (
//   <PageA
//     navigation={navigation}
//   />
// )
//
// const PageBScreen = ({navigation}) => (
//   <PageB
//     navigation={navigation}
//   />
// )

const App = StackNavigator({
  PageA: {
    screen: PageAScreen
  },
  PageB: {
    screen: PageBScreen
  }
})

export default App