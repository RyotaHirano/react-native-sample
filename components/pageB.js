import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

// const pageB = ({navigation}) => (
//   <View>
//     <Text>PageB</Text>
//     <Button
//       onPress={() => navigation.navigate('PageA')}
//       title='PageA'
//     />
//   </View>
// )
//
// export default pageB

class PageBScreen extends React.Component {
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