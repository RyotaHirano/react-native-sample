import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const pageA = ({navigation}) => (
  <View>
    <Text>PageA</Text>
    <Button
      onPress={() => navigation.navigate('PageB')}
      title="PageB"
    />
  </View>
)

export default pageA