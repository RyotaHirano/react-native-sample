import React from 'react'
import Photo from './PhotoScreen'
import {
  TouchableHighlight,
  CameraRoll,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Container,
  Content,
  View,
  Text
} from 'native-base'

const { width } = Dimensions.get('window')
const style = StyleSheet.create({
  image: {
    width: width/2,
    height: width/2
  }
})

export default class PageBScreen extends React.Component {
  static navigationOptions = {
    title: 'PageB'
  }

  constructor(props) {
    super(props)
    this.state = {
      isCameraLoaded: false,
      photos: []
    }
  }

  componentDidMount() {
    CameraRoll.getPhotos(
        {first: 44}
      )
      .then(data => {
        this.setState({ photos: data.edges })
      }, error => {
          console.warn(error);
      })
  }

  _onPressItem = (data: object) => {
    navigate('Photo', {photo: data})
  }

  _renderItem = ({item}) => (
    <TouchableHighlight
      onPressItem={this._onPressItem}
    >
      <Image
        style={style.image}
        source={{ uri: item.node.image.uri }}
      />
    </TouchableHighlight>
  )

  render() {
    return (
      <Container>
        <Content>
          <ScrollView>
            <FlatList
              data={this.state.photos}
              renderItem={this._renderItem}
              keyExtractor={item => item.node.image.uri}
              numColumns={2}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}