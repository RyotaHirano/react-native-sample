import React from 'react'
import Photo from './PhotoScreen'
import {
  TouchableHighlight,
  CameraRoll,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Container,
  Content,
  View
} from 'native-base'

const { width } = Dimensions.get('window')
const style = StyleSheet.create({
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
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
        {first: 25}
      )
      .then(data => {
        this.setState({ photos: data.edges })
      }, error => {
          console.warn(error);
      })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Content>
          <ScrollView>
            <View style={style.gallery}>
              {
                this.state.photos.map((photo, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      onPress={ () => navigate('Photo', {photo: photo}) }
                    >
                      <Image
                        key={index}
                        style={style.image}
                        source={{ uri: photo.node.image.uri }}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}