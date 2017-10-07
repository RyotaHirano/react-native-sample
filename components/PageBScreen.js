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

export default class PageBScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'PageB'
  }

  constructor(props) {
    super(props)
    this.state = {
      isCameraLoaded: false,
      photos: [],
      page: 1
    }
  }

  componentDidMount() {
    CameraRoll.getPhotos(
      {first: 1000}
    )
    .then(data => {
      this.setState({ photos: data.edges })
    }, error => {
        console.warn(error);
    })
  }

  _renderItem = ({item}) => (
    <TouchableHighlight
      onPress={ () =>
        this.props.navigation.navigate('Photo', {photo: item})
      }
    >
      <Image
        style={style.image}
        source={{ uri: item.node.image.uri }}
      />
    </TouchableHighlight>
  )

  _onEndReached = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this._getPhoto()
      }
    )
  }

  _getPhoto = () => {
    CameraRoll.getPhotos(
      {first: 44}
    )
      .then(data => {
        this.setState({ photos: Object.assign(this.state.photos, data.edges) })
      }, error => {
        console.warn(error);
      })
  }

  render() {
    return (
      <Container>
        <Content>
          <ScrollView>
            <FlatList
              data={this.state.photos}
              extraData={this.state}
              renderItem={this._renderItem}
              keyExtractor={item => item.node.image.uri}
              numColumns={2}
              onEndReached={this._onEndReached}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}