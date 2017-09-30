import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Container,
  Content,
  View
} from 'native-base'
import AutoHeightImage from 'react-native-auto-height-image';

const { width } = Dimensions.get('window')
const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class PhotoScreen extends React.Component {
  static navigationOptions = {
    title: 'Photo'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {state} = this.props.navigation;

    return (
      <Container>
        <ScrollView
          maximumZoomScale={3.0}
        >
          <Content>
              <View
                style={style.container}
              >
                <AutoHeightImage
                  width={width}
                  imageURL={state.params.photo.node.image.uri}
                />
              </View>
          </Content>
        </ScrollView>
      </Container>
    )
  }
}