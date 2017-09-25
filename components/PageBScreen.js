import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class PageBScreen extends React.Component {
  static navigationOptions = {
    title: 'PageB'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Button
        title='PageA'
        onPress={ () => navigate('PageA') }
      />
    )
  }
}