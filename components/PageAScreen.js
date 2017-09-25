import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class PageAScreen extends React.Component {
  static navigationOptions = {
    title: 'PageA'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Button
        title="PageB"
        onPress={ () => navigate('PageB') }
      />
    )
  }
}