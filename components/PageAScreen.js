import React from 'react'
import {
  Container, Content, Button, Text, Footer, FooterTab, Icon
} from 'native-base'

export default class PageAScreen extends React.Component {
  static navigationOptions = {
    title: 'PageA'
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Content>
          <Button
            primary
            title="PageB"
            onPress={ () => navigate('PageB') }
          >
            <Text>PageB</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon ios='ios-add-circle' android='md-add-circle'/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}