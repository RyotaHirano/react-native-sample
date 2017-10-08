import React from 'react'
import {
  TouchableHighlight,
  FlatList,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Container,
  Content,
  View,
  Button,
  Text
} from 'native-base'
import { ImagePicker } from 'expo'

const { width } = Dimensions.get('window')
const style = StyleSheet.create({
  image: {
    width: width/2,
    height: width/2
  }
})

export default class PhotoSelectScreen extends React.Component {
  static navigationOptions = {
    title: 'PhotoSelect'
  }

  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
  }

  _pickImage = async() => {
    let r = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    if (!r.cancelled) {
      this.setState({ images: [...this.state.images, r.uri] })
    }
  }

  _renderItem = ({item}) => (
    <TouchableHighlight
      onPress={ () =>
        this.props.navigation.navigate('Photo', {photo: item})
      }
    >
      <Image
        key={item}
        style={style.image}
        source={{ uri: item }}
      />
    </TouchableHighlight>
  )

  render() {
    return(
      <Container>
        <Content>
          <View>
            <Button
              primary
              title="写真を選ぶ"
              onPress={this._pickImage}
            >
              <Text>写真を選ぶ</Text>
            </Button>
            <FlatList
              data={this.state.images}
              extraData={this.state}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index}
            />
          </View>
        </Content>
      </Container>
    )
  }
}

