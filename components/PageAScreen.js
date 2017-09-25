import React from 'react'
import {
  Container, Header, Content, Button, Text
} from 'native-base'

export default class PageAScreen extends React.Component {
  static navigationOptions = {
    title: 'PageA'
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
      </Container>
    )
  }
}